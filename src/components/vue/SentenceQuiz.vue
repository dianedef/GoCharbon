<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { quizData } from '../../data/quizData.js'

const questions = {
  goal: {
    placeholder: '______',
    options: [
      { label: 'générer du cash rapidement', points: { service: 3, livecommerce: 2, ecommerce: 1 } },
      { label: 'construire un actif long terme', points: { saas: 3, content: 1 } },
      { label: 'monétiser mon expertise', points: { formation: 3, service: 2 } },
      { label: 'créer une audience', points: { content: 3, livecommerce: 1, formation: 1 } },
    ],
  },
  budget: {
    placeholder: '______',
    options: [
      { label: '0 à 100€', points: { service: 2, content: 2, livecommerce: 2, formation: 1 } },
      { label: '100 à 500€', points: { service: 2, formation: 2, livecommerce: 1, ecommerce: 1 } },
      { label: '500 à 2 000€', points: { ecommerce: 3, saas: 1 } },
      { label: 'plus de 2 000€', points: { saas: 2, ecommerce: 2 } },
    ],
  },
  mode: {
    placeholder: '______',
    options: [
      { label: 'en direct avec des clients', points: { service: 3, livecommerce: 2, formation: 1 } },
      { label: 'sur un produit scalable', points: { saas: 3, ecommerce: 2 } },
      { label: 'en créant du contenu', points: { content: 3, livecommerce: 1, formation: 2 } },
      { label: 'de façon flexible', points: { service: 1, content: 1, ecommerce: 1, formation: 1, saas: 1 } },
    ],
  },
  tech: {
    placeholder: '______',
    options: [
      { label: 'débutant', points: { service: 2, livecommerce: 2, formation: 2, content: 1 } },
      { label: 'à l\'aise en no-code', points: { ecommerce: 2, content: 2, livecommerce: 1, service: 1 } },
      { label: 'plutôt bon', points: { saas: 3, service: 1 } },
      { label: 'très à l\'aise', points: { saas: 3, ecommerce: 1 } },
    ],
  },
}

const profileUrls = {
  ecommerce: { profile: '/biz/profils/ecommerce', parcours: '/parcours/e-commerce' },
  saas: { profile: '/biz/profils/saas', parcours: '/parcours/logiciel-saas' },
  content: { profile: '/biz/profils/content-creator', parcours: '/parcours/createur-contenu' },
  service: { profile: '/biz/profils/freelance', parcours: '/parcours/freelance' },
  formation: { profile: '/biz/profils/formation', parcours: '/parcours/formation' },
  livecommerce: { profile: '/biz/profils/livecommerce', parcours: '/parcours/live-commerce' },
}

const selections = ref({ goal: '', budget: '', mode: '', tech: '' })
const openKey = ref(null)

function toggle(key) {
  openKey.value = openKey.value === key ? null : key
}

function select(key, index) {
  selections.value[key] = String(index)
  openKey.value = null
}

function label(key) {
  const idx = parseInt(selections.value[key])
  if (isNaN(idx)) return null
  return questions[key].options[idx].label
}

function onClickOutside(e) {
  if (openKey.value && !e.target.closest('.sq-dd')) {
    openKey.value = null
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))

const allSelected = computed(() =>
  Object.values(selections.value).every(v => v !== '')
)

const result = computed(() => {
  if (!allSelected.value) return null
  const scores = { ecommerce: 0, saas: 0, content: 0, service: 0, formation: 0, livecommerce: 0 }
  for (const key of ['goal', 'budget', 'mode', 'tech']) {
    const idx = parseInt(selections.value[key])
    if (isNaN(idx)) return null
    const points = questions[key].options[idx].points
    for (const [profile, value] of Object.entries(points)) {
      if (profile in scores) scores[profile] += value
    }
  }
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1])
  const [topProfile] = sorted[0]
  return {
    profile: topProfile,
    ...quizData.results[topProfile],
    urls: profileUrls[topProfile],
  }
})
</script>

<template>
  <div class="sq">
    <p class="sq-sentence">
      Je veux
      <span class="sq-dd" @click.stop="toggle('goal')">
        <span class="sq-trigger" :class="{ filled: label('goal'), open: openKey === 'goal' }">
          {{ label('goal') || questions.goal.placeholder }}
          <svg class="sq-caret" width="10" height="6" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
        </span>
        <div v-if="openKey === 'goal'" class="sq-menu">
          <div
            v-for="(opt, i) in questions.goal.options"
            :key="i"
            class="sq-option"
            :class="{ active: selections.goal === String(i) }"
            @click.stop="select('goal', i)"
          >{{ opt.label }}</div>
        </div>
      </span>
      avec
      <span class="sq-dd" @click.stop="toggle('budget')">
        <span class="sq-trigger" :class="{ filled: label('budget'), open: openKey === 'budget' }">
          {{ label('budget') || questions.budget.placeholder }}
          <svg class="sq-caret" width="10" height="6" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
        </span>
        <div v-if="openKey === 'budget'" class="sq-menu">
          <div
            v-for="(opt, i) in questions.budget.options"
            :key="i"
            class="sq-option"
            :class="{ active: selections.budget === String(i) }"
            @click.stop="select('budget', i)"
          >{{ opt.label }}</div>
        </div>
      </span>
      de budget, bosser
      <span class="sq-dd" @click.stop="toggle('mode')">
        <span class="sq-trigger" :class="{ filled: label('mode'), open: openKey === 'mode' }">
          {{ label('mode') || questions.mode.placeholder }}
          <svg class="sq-caret" width="10" height="6" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
        </span>
        <div v-if="openKey === 'mode'" class="sq-menu">
          <div
            v-for="(opt, i) in questions.mode.options"
            :key="i"
            class="sq-option"
            :class="{ active: selections.mode === String(i) }"
            @click.stop="select('mode', i)"
          >{{ opt.label }}</div>
        </div>
      </span>
      et en technique je suis
      <span class="sq-dd" @click.stop="toggle('tech')">
        <span class="sq-trigger" :class="{ filled: label('tech'), open: openKey === 'tech' }">
          {{ label('tech') || questions.tech.placeholder }}
          <svg class="sq-caret" width="10" height="6" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
        </span>
        <div v-if="openKey === 'tech'" class="sq-menu">
          <div
            v-for="(opt, i) in questions.tech.options"
            :key="i"
            class="sq-option"
            :class="{ active: selections.tech === String(i) }"
            @click.stop="select('tech', i)"
          >{{ opt.label }}</div>
        </div>
      </span>.
    </p>

    <transition name="sq-fade">
      <div v-if="result" class="sq-result">
        <div class="sq-result-header">
          <span class="sq-result-icon">{{ result.icon }}</span>
          <div>
            <span class="sq-result-label">Ton profil :</span>
            <strong class="sq-result-title">{{ result.title }}</strong>
          </div>
        </div>
        <p class="sq-result-desc">{{ result.description }}</p>
        <div class="sq-result-actions">
          <a :href="result.urls.parcours" class="sq-btn sq-btn-primary">Voir le Parcours</a>
          <a href="/quiz-rapide" class="sq-btn sq-btn-secondary">Affiner avec le Quiz (2 min)</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.sq-sentence {
  font-size: 1.2rem;
  line-height: 2.6;
  font-weight: 600;
  color: #000;
  margin: 0;
  text-align: left;
}

:root.dark .sq-sentence {
  color: #fff;
}

/* Dropdown wrapper */
.sq-dd {
  position: relative;
  display: inline;
}

/* Trigger */
.sq-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.1rem 0.4rem;
  border-bottom: 2px dashed #999;
  color: #999;
  cursor: pointer;
  transition: all 0.15s ease;
  font-weight: 700;
}

.sq-trigger:hover {
  border-bottom-color: #000;
  color: #666;
}

:root.dark .sq-trigger:hover {
  border-bottom-color: var(--brand-yellow, #FFE066);
  color: #bbb;
}

.sq-trigger.filled {
  border-bottom: 3px solid #000;
  color: #000;
  background: var(--brand-yellow, #FFE066);
  padding: 0.05rem 0.45rem;
}

:root.dark .sq-trigger.filled {
  border-bottom-color: var(--brand-yellow, #FFE066);
  color: #000;
  background: var(--brand-yellow, #FFE066);
}

.sq-trigger.open {
  border-bottom-style: solid;
  border-bottom-color: #000;
}

:root.dark .sq-trigger.open {
  border-bottom-color: var(--brand-yellow, #FFE066);
}

.sq-caret {
  flex-shrink: 0;
  transition: transform 0.15s ease;
}

.sq-trigger.open .sq-caret {
  transform: rotate(180deg);
}

/* Menu */
.sq-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 50;
  background: #fff;
  border: 3px solid #000;
  box-shadow: 4px 4px 0 #000;
  min-width: max-content;
  max-width: 90vw;
}

:root.dark .sq-menu {
  background: #1a1a2e;
  border-color: var(--brand-yellow, #FFE066);
  box-shadow: 4px 4px 0 var(--brand-yellow, #FFE066);
}

.sq-option {
  padding: 0.5rem 0.9rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  color: #000;
  transition: background 0.1s ease;
}

:root.dark .sq-option {
  color: #fff;
}

.sq-option:hover {
  background: var(--brand-yellow, #FFE066);
}

:root.dark .sq-option:hover {
  background: var(--brand-yellow, #FFE066);
  color: #000;
}

.sq-option.active {
  background: var(--brand-yellow, #FFE066);
  font-weight: 800;
}

:root.dark .sq-option.active {
  background: var(--brand-yellow, #FFE066);
  color: #000;
}

.sq-option + .sq-option {
  border-top: 3px solid #000;
}

:root.dark .sq-option + .sq-option {
  border-top-color: var(--brand-yellow, #FFE066);
}

/* Result */
.sq-result {
  margin-top: 1.25rem;
  padding: 1.25rem;
  border: 3px solid #000;
  background: #fff;
  box-shadow: 4px 4px 0 #000;
  text-align: left;
}

:root.dark .sq-result {
  border-color: var(--brand-yellow, #FFE066);
  background: #1a1a2e;
  box-shadow: 4px 4px 0 var(--brand-yellow, #FFE066);
}

.sq-result-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.sq-result-icon {
  font-size: 2rem;
  line-height: 1;
}

.sq-result-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  color: #666;
  display: block;
}

:root.dark .sq-result-label {
  color: #aaa;
}

.sq-result-title {
  font-size: 1.3rem;
  font-weight: 800;
  color: #000;
  font-family: 'Poppins', sans-serif;
  display: block;
}

:root.dark .sq-result-title {
  color: #fff;
}

.sq-result-desc {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #333;
  margin: 0.4rem 0 1rem;
}

:root.dark .sq-result-desc {
  color: #ccc;
}

.sq-result-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.sq-btn {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  border: 3px solid #000;
  transition: all 0.15s ease;
}

.sq-btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 4px 4px 0 #000;
}

:root.dark .sq-btn {
  border-color: var(--brand-yellow, #FFE066);
}

:root.dark .sq-btn:hover {
  box-shadow: 4px 4px 0 var(--brand-yellow, #FFE066);
}

.sq-btn-primary {
  background: var(--brand-yellow, #FFE066);
  color: #000;
}

:root.dark .sq-btn-primary {
  background: var(--brand-yellow, #FFE066);
  color: #000;
}

.sq-btn-secondary {
  background: transparent;
  color: #000;
}

:root.dark .sq-btn-secondary {
  color: #fff;
}

/* Transition */
.sq-fade-enter-active { transition: all 0.35s ease; }
.sq-fade-leave-active { transition: all 0.15s ease; }
.sq-fade-enter-from { opacity: 0; transform: translateY(8px); }
.sq-fade-leave-to { opacity: 0; }

@media (max-width: 640px) {
  .sq-sentence {
    font-size: 1.05rem;
    line-height: 2.4;
  }

  .sq-result-actions {
    flex-direction: column;
  }

  .sq-btn {
    text-align: center;
    width: 100%;
  }
}
</style>
