<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import {
  useGamification,
  AchievementToast,
  fireBadgeConfetti,
} from '@dianedef/gamification'
import type { Badge } from '@dianedef/gamification'
import { createCharbonConfig } from '../../gamification/config'

const props = defineProps<{
  slug: string
  category?: string
}>()

const toastBadge = ref<Badge | null>(null)
const mounted = ref(false)

const config = createCharbonConfig()
config.onBadgeEarned = (badge: Badge) => {
  toastBadge.value = badge
  fireBadgeConfetti()
}

const { reader, streak, badges, markAsRead } = useGamification(config)

const recentBadges = computed(() => badges.earned.value.slice(-3))

onMounted(() => {
  mounted.value = true
  if (props.slug) {
    markAsRead(props.slug, props.category)
  }
})

watch(
  () => props.slug,
  (newSlug) => {
    if (newSlug && mounted.value) {
      markAsRead(newSlug, props.category)
    }
  }
)
</script>

<template>
  <div v-if="mounted" class="gamification-bar">
    <div class="bar-inner">
      <div class="streak-section">
        <span class="streak-icon" :class="{ active: streak.isActive.value }">
          🔥
        </span>
        <span class="streak-count">{{ streak.currentStreak.value }}</span>
      </div>

      <div class="badges-section">
        <span class="badge-count">
          {{ badges.earned.value.length }} badge{{ badges.earned.value.length > 1 ? 's' : '' }}
        </span>
        <span
          v-for="badge in recentBadges"
          :key="badge.id"
          class="recent-badge"
          :title="badge.name"
        >
          {{ badge.icon }}
        </span>
      </div>

      <div class="read-section">
        <span class="read-count">{{ reader.totalRead.value }} lu{{ reader.totalRead.value > 1 ? 's' : '' }}</span>
      </div>
    </div>

    <Teleport to="body">
      <AchievementToast :badge="toastBadge" :duration="5000" class="toast-wrapper">
        <template #default="{ badge: b, dismiss }">
          <div class="toast-content" @click="dismiss">
            <span class="toast-icon">{{ b.icon }}</span>
            <div class="toast-text">
              <strong>Badge débloqué !</strong>
              <span>{{ b.name }}</span>
            </div>
          </div>
        </template>
      </AchievementToast>
    </Teleport>
  </div>
</template>

<style scoped>
.gamification-bar {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 50;
}

.bar-inner {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  border: 3px solid #000;
  border-radius: 9999px;
  background: #ffe001;
  box-shadow: 4px 4px 0 #000;
  font-family: 'Sanchez', serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #000;
}

:global(.dark) .bar-inner {
  background: #1a1a2e;
  border-color: #fff6d2;
  box-shadow: 4px 4px 0 #fff6d2;
  color: #fff6d2;
}

.streak-section {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.streak-icon {
  font-size: 1.125rem;
  opacity: 0.4;
  transition: opacity 0.3s;
}

.streak-icon.active {
  opacity: 1;
}

.badges-section {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.recent-badge {
  font-size: 1rem;
}

.badge-count,
.read-count {
  opacity: 0.8;
}

.read-section {
  border-left: 2px solid currentColor;
  padding-left: 0.75rem;
  opacity: 0.8;
}

.toast-wrapper {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 100;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border: 3px solid #000;
  border-radius: 0.5rem;
  background: #ffe001;
  box-shadow: 6px 6px 0 #000;
  cursor: pointer;
  animation: toast-slide-in 0.4s ease-out;
}

:global(.dark) .toast-content {
  background: #1a1a2e;
  border-color: #fff6d2;
  box-shadow: 6px 6px 0 #fff6d2;
  color: #fff6d2;
}

.toast-icon {
  font-size: 2rem;
}

.toast-text {
  display: flex;
  flex-direction: column;
  font-family: 'Sanchez', serif;
}

.toast-text strong {
  font-size: 0.875rem;
  text-transform: uppercase;
}

.toast-text span {
  font-size: 1rem;
}

@keyframes toast-slide-in {
  from {
    transform: translateX(120%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Transition classes for AchievementToast */
:global(.toast-enter-active) {
  animation: toast-slide-in 0.4s ease-out;
}

:global(.toast-leave-active) {
  animation: toast-slide-in 0.3s ease-in reverse;
}
</style>
