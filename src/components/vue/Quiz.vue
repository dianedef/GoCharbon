<template>
  <div class="quiz-container">
    <div v-if="!quizStarted" class="quiz-intro">
      <h2 class="quiz-title">Trouve ton Business en Ligne Idéal</h2>
      <p class="quiz-description">
        Réponds à quelques questions pour découvrir le business model qui correspond le mieux à tes compétences et tes envies.
      </p>
      <button @click="startQuiz" class="quiz-btn primary">
        Commencer le Quiz
      </button>
    </div>

    <div v-else-if="!isFinished" class="quiz-content">
      <div class="progress-bar" ref="progressBarRef">
        <div 
          class="progress-fill" 
          ref="progressFillRef"
        ></div>
      </div>

      <Transition
        :css="false"
        @enter="onEnter"
        @leave="onLeave"
        mode="out-in"
      >
        <div :key="currentIndex" class="question-wrapper">
          <div class="question-card">
            <span class="question-number">Question {{ currentIndex + 1 }} / {{ quizData.questions.length }}</span>
            <h3 class="question-text">{{ currentQuestion.text }}</h3>
            
            <div class="answers-grid">
              <button
                v-for="(option, index) in currentQuestion.options"
                :key="index"
                @click="submitAnswer(option.points)"
                class="answer-btn"
              >
                <span class="answer-icon">{{ option.icon }}</span>
                <span class="answer-text">{{ option.text }}</span>
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <div v-else class="quiz-results">
      <h2 class="results-title">Ton Business Idéal :</h2>
      <div class="result-card">
        <div class="result-icon">{{ finalResultData.icon }}</div>
        <h3 class="result-name">{{ finalResultData.title }}</h3>
        <p class="result-description">{{ finalResultData.description }}</p>
        <ul class="result-strengths">
          <li v-for="(strength, index) in finalResultData.strengths" :key="index">
            ✓ {{ strength }}
          </li>
        </ul>
        <div class="result-actions">
          <button @click="resetQuiz" class="quiz-btn secondary">
            Refaire le Quiz
          </button>
          <a href="/apps" class="quiz-btn primary">
            Voir les Apps
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { gsap } from 'gsap';
import { quizData } from '../../data/quizData.js';

const quizStarted = ref(false);
const isFinished = ref(false);
const currentIndex = ref(0);
const progressBarRef = ref<HTMLElement | null>(null);
const progressFillRef = ref<HTMLElement | null>(null);

const scores = reactive({
  ecommerce: 0,
  saas: 0,
  content: 0,
  service: 0,
  formation: 0,
});

const currentQuestion = computed(() => quizData.questions[currentIndex.value]);

const finalResult = computed(() => {
  const maxScore = Math.max(...Object.values(scores));
  return Object.keys(scores).find(
    (key) => scores[key as keyof typeof scores] === maxScore
  ) || 'content';
});

const finalResultData = computed(() => quizData.results[finalResult.value]);

const startQuiz = () => {
  quizStarted.value = true;
};

const submitAnswer = (points: { [key: string]: number }) => {
  for (const [profile, value] of Object.entries(points)) {
    if (profile in scores) {
      scores[profile as keyof typeof scores] += value;
    }
  }

  // Progression "snap" (sans easing/fade) pour rester cohérent avec le style brutaliste
  if (progressFillRef.value) {
    const progress = ((currentIndex.value + 1) / quizData.questions.length) * 100;
    gsap.to(progressFillRef.value, {
      width: `${progress}%`,
      duration: 0.08,
      ease: "none",
    });
  }

  if (currentIndex.value < quizData.questions.length - 1) {
    currentIndex.value++;
  } else {
    isFinished.value = true;
  }
};

const resetQuiz = () => {
  quizStarted.value = false;
  isFinished.value = false;
  currentIndex.value = 0;
  
  Object.keys(scores).forEach((key) => {
    scores[key as keyof typeof scores] = 0;
  });

  if (progressFillRef.value) {
    gsap.set(progressFillRef.value, { width: '0%' });
  }
};

// GSAP Animation Hooks — slide vertical
const onEnter = (el: Element, done: () => void) => {
  gsap.fromTo(el,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.25,
      ease: "power2.out",
      onComplete: done
    }
  );
};

const onLeave = (el: Element, done: () => void) => {
  gsap.to(el, {
    y: -40,
    opacity: 0,
    duration: 0.18,
    ease: "power2.in",
    onComplete: done
  });
};
</script>

<style scoped>
.quiz-container {
  max-width: 860px;
  margin: 0 auto;
  padding: 1.5rem;
}

.quiz-intro,
.quiz-results {
  text-align: center;
  background: var(--brand-cream);
  border: 3px solid var(--brand-black);
  box-shadow: 6px 6px 0 var(--brand-black);
  padding: 2rem;
}

.quiz-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--brand-black);
}

.quiz-description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: var(--brand-soot);
  line-height: 1.6;
}

.quiz-btn {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 700;
  font-family: "Sanchez", serif;
  border: 3px solid var(--brand-black);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: inline-block;
  box-shadow: 5px 5px 0 var(--brand-black);
}

.quiz-btn.primary {
  background-color: var(--brand-yellow);
  color: var(--brand-black);
}

.quiz-btn.primary:hover {
  background-color: var(--brand-orange);
  transform: translate(2px, 2px);
  box-shadow: 3px 3px 0 var(--brand-black);
}

.quiz-btn.secondary {
  background-color: var(--brand-black);
  color: var(--brand-cream);
  margin-right: 1rem;
}

.quiz-btn.secondary:hover {
  background-color: var(--brand-charcoal);
  transform: translate(2px, 2px);
  box-shadow: 3px 3px 0 var(--brand-black);
}

.progress-bar {
  width: 100%;
  height: 16px;
  background-color: var(--brand-cream);
  border: 3px solid var(--brand-black);
  margin-bottom: 2rem;
  overflow: clip;
}

.progress-fill {
  width: 0%;
  height: 100%;
  background-color: var(--brand-yellow);
}

.question-wrapper {
  min-height: 420px;
}

.question-card {
  background: var(--brand-cream);
  border: 3px solid var(--brand-black);
  box-shadow: 6px 6px 0 var(--brand-black);
  padding: 2rem;
}

.question-number {
  display: block;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: "Sanchez", serif;
  margin-bottom: 1rem;
  color: var(--brand-orange);
  text-transform: uppercase;
}

.question-text {
  font-size: 1.85rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--brand-black);
}

.answers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.answer-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: var(--brand-cream);
  border: 3px solid var(--brand-black);
  box-shadow: 4px 4px 0 var(--brand-black);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: left;
}

.answer-btn:hover {
  background: var(--brand-yellow);
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 var(--brand-black);
}

.answer-icon {
  font-size: 2rem;
}

.answer-text {
  font-size: 1rem;
  font-weight: 600;
  color: var(--brand-black);
}

.results-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--brand-black);
}

.result-card {
  background: var(--brand-cream);
  border: 3px solid var(--brand-black);
  box-shadow: 6px 6px 0 var(--brand-black);
  padding: 3rem;
  text-align: left;
}

.result-icon {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;
}

.result-name {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--brand-black);
}

.result-description {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--brand-soot);
}

.result-strengths {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.result-strengths li {
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: var(--brand-cream);
  border: 2px solid var(--brand-black);
  color: var(--brand-black);
}

.result-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .quiz-container {
    padding: 0.75rem;
  }

  .quiz-intro,
  .quiz-results {
    padding: 1.5rem;
  }

  .quiz-title {
    font-size: 2rem;
  }

  .question-text {
    font-size: 1.5rem;
  }

  .answers-grid {
    grid-template-columns: 1fr;
  }

  .result-card {
    padding: 1.75rem 1.25rem;
  }

  .result-actions {
    flex-direction: column;
  }

  .quiz-btn.secondary {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}
</style>

<!-- Dark mode styles - unscoped because Astro breaks :global(.dark) in Vue scoped CSS -->
<style>
.dark .quiz-intro,
.dark .quiz-results {
  background: var(--brand-ink);
  border-color: var(--brand-cream);
  box-shadow: 6px 6px 0 var(--brand-cream);
  color: var(--brand-cream);
}

.dark .quiz-title,
.dark .quiz-description,
.dark .question-text,
.dark .answer-text,
.dark .results-title,
.dark .result-name,
.dark .result-description,
.dark .result-card {
  color: var(--brand-cream);
}

.dark .quiz-btn {
  border-color: var(--brand-cream);
  box-shadow: 5px 5px 0 var(--brand-cream);
}

.dark .quiz-btn.primary {
  background-color: var(--brand-yellow);
  color: var(--brand-black);
}

.dark .quiz-btn.secondary {
  background-color: var(--brand-charcoal);
  color: var(--brand-cream);
}

.dark .progress-bar {
  background-color: var(--brand-ink);
  border-color: var(--brand-cream);
}

.dark .progress-fill {
  background-color: var(--brand-yellow);
}

.dark .question-card {
  background: var(--brand-ink);
  border-color: var(--brand-cream);
  box-shadow: 6px 6px 0 var(--brand-cream);
}

.dark .question-number {
  color: var(--brand-yellow);
}

.dark .answer-btn {
  background: var(--brand-charcoal);
  border-color: var(--brand-cream);
  box-shadow: 4px 4px 0 var(--brand-cream);
}

.dark .answer-btn:hover {
  background: var(--brand-yellow);
  color: var(--brand-black);
  box-shadow: 2px 2px 0 var(--brand-cream);
}

.dark .answer-btn:hover .answer-text,
.dark .answer-btn:hover .answer-icon {
  color: var(--brand-black);
}

.dark .result-card {
  background: var(--brand-ink);
  border-color: var(--brand-cream);
  box-shadow: 6px 6px 0 var(--brand-cream);
}

.dark .result-strengths li {
  background: var(--brand-charcoal);
  border-color: var(--brand-cream);
  color: var(--brand-cream);
}
</style>
