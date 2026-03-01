<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue';
import type { LearningPath } from '../../data/parcoursData';
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
  refreshFromStorage();
  window.addEventListener('storage', refreshFromStorage);
});

onBeforeUnmount(() => {
  window.removeEventListener('storage', refreshFromStorage);
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
            <label class="step-check">
              <input
                type="checkbox"
                :checked="isCompleted(module.id, step.id)"
                @change="toggleStep(module.id, step.id, ($event.target as HTMLInputElement).checked)"
              />
              <span>
                <strong>Étape {{ stepIndex + 1 }}: {{ step.title }}</strong>
                <span class="step-meta">
                  <span class="step-type" :class="step.type">{{ stepTypeLabel(step.type as TaskType) }}</span>
                  <span class="step-xp">+{{ stepXp(step.type as TaskType) }} XP</span>
                </span>
                <p>{{ step.description }}</p>
              </span>
            </label>
            <a :href="step.href">Ouvrir</a>
          </li>
        </ol>
      </section>
    </div>
  </div>
</template>

<style scoped>
.path-progress {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.progress-overview {
  background: var(--brand-cream);
  border: 3px solid var(--brand-black);
  box-shadow: 6px 6px 0 var(--brand-black);
  padding: 1rem;
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
  border: 2px solid var(--brand-black);
  background: var(--brand-cream-warm);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: var(--brand-orange);
  transition: width 0.25s ease;
}

.modules-list {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.module-card {
  background: var(--brand-cream);
  border: 3px solid var(--brand-black);
  box-shadow: 5px 5px 0 var(--brand-black);
  padding: 1rem;
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
  border: 2px solid var(--brand-black);
  padding: 0.6rem;
}

.step-check {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  cursor: pointer;
}

.step-check input {
  margin-top: 0.2rem;
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
  font-size: 0.75rem;
  font-weight: 700;
  border: 2px solid var(--brand-black);
  padding: 0.08rem 0.45rem;
  line-height: 1.2;
}

.step-type.quiz {
  background: #d9e8ff;
}

.step-type.guide {
  background: #dff7df;
}

.step-type.tuto {
  background: #ffe9d2;
}

.step-type.action {
  background: #ffd8d8;
}

.step-xp {
  background: var(--brand-yellow);
}

.module-card li a {
  white-space: nowrap;
  font-weight: 700;
  color: var(--brand-black);
}

:global(.dark) .progress-overview,
:global(.dark) .module-card {
  background: var(--brand-ink);
  border-color: var(--brand-cream);
  box-shadow: 6px 6px 0 var(--brand-cream);
  color: var(--brand-cream);
}

:global(.dark) .progress-track {
  border-color: var(--brand-cream);
  background: var(--brand-soot);
}

:global(.dark) .module-card li {
  border-color: var(--brand-cream);
}

:global(.dark) .module-card li a {
  color: var(--brand-yellow);
}

:global(.dark) .step-type,
:global(.dark) .step-xp {
  border-color: var(--brand-cream);
  color: var(--brand-black);
}

@media (max-width: 720px) {
  .module-card li {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
