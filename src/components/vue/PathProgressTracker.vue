<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue';
import type { LearningPath } from '../../data/parcoursData';
import BrutalCheckbox from './BrutalCheckbox.vue';
import { hydrateGamificationFromConvex } from '../../gamification/convexSync';
import { GAMIFICATION_UPDATED_EVENT } from '../../gamification/storageKeys';
import {
  createPathStepKey,
  getCompletedStepIds,
  setCompletedStepIds,
} from '../../gamification/pathProgress';
import { fireBadgeConfetti } from '@diane-winflowz/gamification';
import { getXpState, setTaskCompleted, type TaskType, type XpState } from '../../gamification/xp';

const props = defineProps<{
  pathData: LearningPath;
}>();

const completedSteps = ref<Set<string>>(new Set());
const celebrationShown = ref(false);
const xp = ref<XpState>({
  totalXp: 0,
  readXp: 0,
  taskXp: 0,
  readCount: 0,
  completedTaskCount: 0,
});

const totalSteps = computed(() =>
  props.pathData.modules.reduce((acc, module) => acc + module.steps.length, 0)
);

const completedCount = computed(() => completedSteps.value.size);
const progressPercent = computed(() => {
  if (!totalSteps.value) return 0;
  return Math.round((completedCount.value / totalSteps.value) * 100);
});

function refreshFromStorage() {
  completedSteps.value = new Set(getCompletedStepIds(props.pathData.id));
  xp.value = getXpState();
}

function stepKey(moduleId: string, stepId: string): string {
  return createPathStepKey(moduleId, stepId);
}

function isCompleted(moduleId: string, stepId: string): boolean {
  return completedSteps.value.has(stepKey(moduleId, stepId));
}

function moduleProgress(moduleId: string, stepIds: string[]): { done: number; total: number } {
  const done = stepIds.filter((id) => completedSteps.value.has(stepKey(moduleId, id))).length;
  return { done, total: stepIds.length };
}

function stepTypeLabel(type: TaskType): string {
  switch (type) {
    case 'quiz':
      return 'Quiz';
    case 'guide':
      return 'Guide';
    case 'tuto':
      return 'Tuto';
    case 'action':
      return 'Action';
    default:
      return 'Étape';
  }
}

function stepXp(type: TaskType): number {
  switch (type) {
    case 'quiz':
      return 15;
    case 'guide':
      return 25;
    case 'tuto':
      return 30;
    case 'action':
      return 40;
    default:
      return 20;
  }
}

function toggleStep(moduleId: string, stepId: string, checked: boolean): void {
  const key = stepKey(moduleId, stepId);
  const taskId = `${props.pathData.id}::${key}`;
  const next = new Set(completedSteps.value);
  const module = props.pathData.modules.find((item) => item.id === moduleId);
  const step = module?.steps.find((item) => item.id === stepId);
  const stepType = step?.type ?? 'action';

  if (checked) next.add(key);
  else next.delete(key);

  completedSteps.value = next;
  setCompletedStepIds(props.pathData.id, Array.from(next));
  xp.value = setTaskCompleted(taskId, checked, stepType);

  if (next.size === totalSteps.value && totalSteps.value > 0 && !celebrationShown.value) {
    fireBadgeConfetti();
    celebrationShown.value = true;
  }
}

onMounted(() => {
  void hydrateGamificationFromConvex().finally(refreshFromStorage);
  window.addEventListener('storage', refreshFromStorage);
  window.addEventListener(GAMIFICATION_UPDATED_EVENT, refreshFromStorage);
});

onBeforeUnmount(() => {
  window.removeEventListener('storage', refreshFromStorage);
  window.removeEventListener(GAMIFICATION_UPDATED_EVENT, refreshFromStorage);
});
</script>

<template>
  <div class="path-progress">
    <section class="progress-overview">
      <h2>Progression du parcours</h2>
      <p>{{ completedCount }} / {{ totalSteps }} étapes complétées</p>
      <p class="xp-line">XP parcours: {{ xp.taskXp }} XP</p>
      <div class="progress-track" role="progressbar" :aria-valuenow="progressPercent" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
      </div>
      <strong>{{ progressPercent }}%</strong>
    </section>

    <div class="modules-list">
      <section v-for="(module, moduleIndex) in pathData.modules" :key="module.id" class="module-card">
        <h3>Module {{ moduleIndex + 1 }}: {{ module.title }}</h3>
        <p>{{ module.objective }}</p>
        <p class="module-stats">
          {{ moduleProgress(module.id, module.steps.map((step) => step.id)).done }} / {{ module.steps.length }} étapes
        </p>

        <ol>
          <li v-for="(step, stepIndex) in module.steps" :key="step.id">
            <div class="step-check">
              <BrutalCheckbox
                :model-value="isCompleted(module.id, step.id)"
                :label="`Valider l'étape ${stepIndex + 1}: ${step.title}`"
                @update:model-value="(checked: boolean) => toggleStep(module.id, step.id, checked)"
              />
              <button
                type="button"
                class="step-content-btn"
                @click="toggleStep(module.id, step.id, !isCompleted(module.id, step.id))"
              >
                <strong>Étape {{ stepIndex + 1 }}: {{ step.title }}</strong>
                <span class="step-meta">
                  <span class="step-type" :class="step.type">{{ stepTypeLabel(step.type as TaskType) }}</span>
                  <span class="step-xp">+{{ stepXp(step.type as TaskType) }} XP</span>
                </span>
                <p>{{ step.description }}</p>
              </button>
            </div>
            <a :href="step.href">Ouvrir</a>
          </li>
        </ol>
      </section>
    </div>
  </div>
</template>

<style scoped>
.path-progress {
  --pp-surface: var(--brand-cream);
  --pp-surface-muted: var(--brand-cream);
  --pp-border: var(--brand-black);
  --pp-shadow: var(--brand-black);
  --pp-text: var(--brand-black);
  --pp-link: var(--brand-black);
  --pp-link-hover: var(--brand-orange);
  --pp-progress-track: var(--brand-cream-warm);
  --pp-progress-fill: var(--brand-orange);
  --pp-badge-text: var(--brand-black);

  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.progress-overview {
  background: var(--pp-surface);
  border: 3px solid var(--pp-border);
  box-shadow: none;
  filter: drop-shadow(6px 6px 0 var(--pp-shadow));
  color: var(--pp-text);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 30;
}

.progress-overview h2 {
  margin: 0 0 0.35rem;
}

.progress-overview p {
  margin: 0 0 0.5rem;
}

.xp-line {
  font-weight: 700;
}

.progress-track {
  height: 0.8rem;
  border: 2px solid var(--pp-border);
  background: var(--pp-progress-track);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: var(--pp-progress-fill);
  transition: width 0.25s ease;
}

.modules-list {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.module-card {
  background: var(--pp-surface);
  border: 3px solid var(--pp-border);
  box-shadow: none;
  filter: drop-shadow(5px 5px 0 var(--pp-shadow));
  color: var(--pp-text);
  padding: 1rem;
}

.path-progress section::after {
  border-bottom-color: var(--pp-border);
}

.module-card h3 {
  margin: 0 0 0.4rem;
}

.module-card p {
  margin: 0.3rem 0;
  line-height: 1.45;
}

.module-stats {
  font-weight: 700;
}

.module-card ol {
  margin: 0.6rem 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.module-card li {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.8rem;
  background: var(--pp-surface-muted);
  border: 2px solid var(--pp-border);
  padding: 0.6rem;
}

.step-check {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
}

.step-content-btn {
  all: unset;
  display: block;
  cursor: pointer;
  width: 100%;
}

.step-content-btn:focus-visible {
  outline: 2px dashed var(--brand-orange);
  outline-offset: 2px;
}

.step-meta {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.2rem;
}

.step-type,
.step-xp {
  display: inline-block;
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  border: 2px solid var(--pp-border);
  padding: 0.12rem 0.52rem;
  line-height: 1.2;
  text-align: center;
}

.step-type.quiz {
  background: #bfd8ff;
  color: #0e2b4d;
}

.step-type.guide {
  background: #c9efcd;
  color: #12381f;
}

.step-type.tuto {
  background: #ffd8b2;
  color: #4a2b0f;
}

.step-type.action {
  background: #ffc2c2;
  color: #4e1313;
}

.step-xp {
  background: var(--brand-yellow);
  color: var(--brand-black);
}

.module-card li a {
  white-space: nowrap;
  font-weight: 700;
  color: var(--pp-link);
}

.module-card li a:hover {
  color: var(--pp-link-hover);
}

:global(.dark) .step-content-btn:focus-visible {
  outline-color: var(--brand-yellow);
}

:global(.dark) .step-type,
:global(.dark) .step-xp {
  border-color: var(--pp-border);
}

:global(.dark) .step-type {
  color: var(--pp-badge-text);
}

:global(.dark) .step-type.quiz {
  background: #0f4c81;
  color: #f5f5f2;
}

:global(.dark) .step-type.guide {
  background: #1f6b3a;
  color: #f5f5f2;
}

:global(.dark) .step-type.tuto {
  background: #8a4b11;
  color: #f5f5f2;
}

:global(.dark) .step-type.action {
  background: #8b1f1f;
  color: #f5f5f2;
}

:global(.dark) .step-xp {
  color: var(--brand-black);
}

@media (max-width: 720px) {
  .module-card li {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

<style>
html.dark .path-progress,
.dark .path-progress {
  --pp-surface: var(--brand-ink);
  --pp-surface-muted: var(--brand-charcoal);
  --pp-border: var(--brand-cream);
  --pp-shadow: var(--brand-cream);
  --pp-text: var(--brand-cream);
  --pp-link: var(--brand-yellow);
  --pp-link-hover: var(--brand-cream);
  --pp-progress-track: var(--brand-soot);
  --pp-progress-fill: var(--brand-yellow);
  --pp-badge-text: var(--brand-cream);
}
</style>
