<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useGamification, fireBadgeConfetti } from '@dianedef/gamification'
import type { Badge } from '@dianedef/gamification'
import { createCharbonConfig } from '../../gamification/config'
import CharbonBadgeCard from './CharbonBadgeCard.vue'

const mounted = ref(false)
const toastBadge = ref<Badge | null>(null)

const config = createCharbonConfig()
config.onBadgeEarned = (badge: Badge) => {
  toastBadge.value = badge
  fireBadgeConfetti()
}

const { reader, streak, badges, progress } = useGamification(config)

const allBadges = computed(() => [...badges.earned.value, ...badges.unearned.value])

onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <div v-if="mounted" class="dashboard">
    <!-- Streak -->
    <section class="dashboard-section streak-section">
      <h2 class="section-title">Série de lecture</h2>
      <div class="streak-card">
        <span class="streak-fire" :class="{ active: streak.isActive.value }">🔥</span>
        <div class="streak-info">
          <span class="streak-current">{{ streak.currentStreak.value }} jour{{ streak.currentStreak.value > 1 ? 's' : '' }}</span>
          <span class="streak-best">Record : {{ streak.longestStreak.value }} jour{{ streak.longestStreak.value > 1 ? 's' : '' }}</span>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="dashboard-section stats-section">
      <h2 class="section-title">Statistiques</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-value">{{ reader.totalRead.value }}</span>
          <span class="stat-label">Articles lus</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">{{ badges.earned.value.length }}</span>
          <span class="stat-label">Badges</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">{{ progress.overall.value.percent }}%</span>
          <span class="stat-label">Progression</span>
        </div>
      </div>
    </section>

    <!-- Badges -->
    <section class="dashboard-section badges-section">
      <h2 class="section-title">
        Badges ({{ badges.earned.value.length }} / {{ allBadges.length }})
      </h2>
      <div class="badges-grid">
        <CharbonBadgeCard
          v-for="badge in allBadges"
          :key="badge.id"
          :badge="badge"
          :earned="badges.earned.value.some((b) => b.id === badge.id)"
        />
      </div>
    </section>

    <!-- Progress by category -->
    <section v-if="Object.keys(progress.byCategory.value).length > 0" class="dashboard-section progress-section">
      <h2 class="section-title">Progression par catégorie</h2>
      <div class="progress-list">
        <div
          v-for="(entry, cat) in progress.byCategory.value"
          :key="cat"
          class="progress-item"
        >
          <div class="progress-label">
            <span class="progress-cat">{{ cat }}</span>
            <span class="progress-pct">{{ entry.read }}/{{ entry.total }}</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" :style="{ width: entry.percent + '%' }"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 48rem;
  margin: 0 auto;
}

.dashboard-section {
  padding: 1.5rem;
  border: 3px solid #000;
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 6px 6px 0 #000;
}

:global(.dark) .dashboard-section {
  background: #1a1a2e;
  border-color: #fff6d2;
  box-shadow: 6px 6px 0 #fff6d2;
  color: #fff6d2;
}

.section-title {
  font-family: 'Sanchez', serif;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid currentColor;
}

/* Streak */
.streak-card {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.streak-fire {
  font-size: 3rem;
  opacity: 0.3;
  transition: opacity 0.3s;
}

.streak-fire.active {
  opacity: 1;
}

.streak-info {
  display: flex;
  flex-direction: column;
}

.streak-current {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Sanchez', serif;
}

.streak-best {
  font-size: 0.875rem;
  opacity: 0.7;
}

/* Stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 2px solid #000;
  border-radius: 0.5rem;
  background: #ffe001;
}

:global(.dark) .stat-card {
  background: #2a1a4e;
  border-color: #fff6d2;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Sanchez', serif;
}

.stat-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  opacity: 0.8;
}

/* Badges */
.badges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

/* Progress */
.progress-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.progress-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
}

.progress-cat {
  font-weight: 600;
  text-transform: capitalize;
}

.progress-pct {
  opacity: 0.7;
}

.progress-track {
  height: 0.5rem;
  background: #e0e0e0;
  border-radius: 9999px;
  border: 1px solid #000;
  overflow: hidden;
}

:global(.dark) .progress-track {
  background: #333;
  border-color: #fff6d2;
}

.progress-fill {
  height: 100%;
  background: #9e4fff;
  border-radius: 9999px;
  transition: width 0.5s ease;
}
</style>
