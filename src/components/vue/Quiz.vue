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

  // Anime la barre de progression avec GSAP
  if (progressFillRef.value) {
    const progress = ((currentIndex.value + 1) / quizData.questions.length) * 100;
    gsap.to(progressFillRef.value, {
      width: `${progress}%`,
      duration: 0.4,
      ease: "power2.out",
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

// GSAP Animation Hooks (sans CSS)
const onEnter = (el: Element, done: () => void) => {
  gsap.fromTo(el, 
    { opacity: 0, x: 50 }, 
    { 
      opacity: 1, 
      x: 0, 
      duration: 0.5, 
      ease: "power2.out",
      onComplete: done 
    }
  );
};

const onLeave = (el: Element, done: () => void) => {
  gsap.to(el, { 
    opacity: 0, 
    x: -50, 
    duration: 0.3, 
    ease: "power2.in",
    onComplete: done 
  });
};
</script>

<style scoped>
.quiz-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.quiz-intro,
.quiz-results {
  text-align: center;
}

.quiz-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #000;
}

:global(.dark) .quiz-title {
  color: #fff6d2;
}

.quiz-description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: #333;
  line-height: 1.6;
}

:global(.dark) .quiz-description {
  color: #e5e5e5;
}

.quiz-btn {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: 3px solid #000;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-block;
}

.quiz-btn.primary {
  background-color: #000;
  color: #fff;
}

.quiz-btn.primary:hover {
  background-color: #333;
  transform: translateY(-2px);
}

.quiz-btn.secondary {
  background-color: #fff;
  color: #000;
  margin-right: 1rem;
}

.quiz-btn.secondary:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
}

:global(.dark) .quiz-btn {
  border-color: #fff6d2;
}

:global(.dark) .quiz-btn.primary {
  background-color: #fff6d2;
  color: #000;
}

:global(.dark) .quiz-btn.secondary {
  background-color: #000;
  color: #fff6d2;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background-color: #e5e5e5;
  border-radius: 4px;
  margin-bottom: 2rem;
  overflow: hidden;
}

.progress-fill {
  width: 0%;
  height: 100%;
  background-color: #000;
  border-radius: 4px;
}

:global(.dark) .progress-bar {
  background-color: #333;
}

:global(.dark) .progress-fill {
  background-color: #fff6d2;
}

.question-wrapper {
  min-height: 400px;
}

.question-card {
  background: #fff;
  border: 3px solid #000;
  border-radius: 1rem;
  padding: 2rem;
}

:global(.dark) .question-card {
  background: #1a1a1a;
  border-color: #fff6d2;
}

.question-number {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #666;
}

:global(.dark) .question-number {
  color: #999;
}

.question-text {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #000;
}

:global(.dark) .question-text {
  color: #fff6d2;
}

.answers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.answer-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  background: #f9f9f9;
  border: 2px solid #e5e5e5;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
}

.answer-btn:hover {
  border-color: #000;
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

:global(.dark) .answer-btn {
  background: #2a2a2a;
  border-color: #444;
}

:global(.dark) .answer-btn:hover {
  border-color: #fff6d2;
}

.answer-icon {
  font-size: 2rem;
}

.answer-text {
  font-size: 1rem;
  font-weight: 500;
  color: #000;
}

:global(.dark) .answer-text {
  color: #fff6d2;
}

.results-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #000;
}

:global(.dark) .results-title {
  color: #fff6d2;
}

.result-card {
  background: #fff;
  border: 3px solid #000;
  border-radius: 1rem;
  padding: 3rem;
  text-align: left;
}

:global(.dark) .result-card {
  background: #1a1a1a;
  border-color: #fff6d2;
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
  color: #000;
}

:global(.dark) .result-name {
  color: #fff6d2;
}

.result-description {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
}

:global(.dark) .result-description {
  color: #e5e5e5;
}

.result-strengths {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.result-strengths li {
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: #f9f9f9;
  border-radius: 0.5rem;
  color: #000;
}

:global(.dark) .result-strengths li {
  background: #2a2a2a;
  color: #fff6d2;
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
    padding: 1rem;
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
    padding: 2rem 1.5rem;
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
