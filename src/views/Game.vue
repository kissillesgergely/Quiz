<template>
  <div>
    <form @submit.prevent>
      <label class="mx-4">Category: <strong>{{ category }}</strong></label>
      <br />
      <label class="mx-4">Difficulty: <strong>{{ difficulty }}</strong></label>
      <br />
      <br />
      <label class="mx-4">{{ question }}</label>
      <br />
      <br />
      <div v-for="item in answers" :key="item.index">
        <button
          @click="submit(item.answer, item.index)"
          :disabled="hasAnswered"
          class="w-64 text-gray-800 twc-button"
          :class="[
            { 'bg-white hover:bg-gray-100': !hasAnswered },
            {
              'bg-green-200 hover:bg-green-300':
                hasAnswered && scored && item.index === activeIndex,
            },
            {
              'bg-red-200 hover:bg-red-300':
                hasAnswered && !scored && item.index === activeIndex,
            },
          ]"
        >
          {{ item.answer }}
        </button>
        <br />
      </div>
    </form>
    <label v-if="showAnswer">The correct answer is: {{ correctAnswer }}</label>
    <br />
    <button
      @click="showAnswer = true"
      :disabled="!hasAnswered"
      class="w-40 text-gray-800 twc-button"
      :class="[{'bg-gray-400': !hasAnswered}]"
    >
      Show answer
    </button>
    <button
      @click="nextQuestion"
      :disabled="!hasAnswered"
      class="w-16 text-gray-800 twc-button"
      :class="[{'bg-gray-400': !hasAnswered}]"
    >
      Next
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import store from '../store';

@Options({
  data() {
    return {
      question: '',
      answers: [],
      correctAnswer: '',
      scored: false,
      showAnswer: false,
      hasAnswered: false,
      activeIndex: -1,
      category: '',
      difficulty: '',
    };
  },
  async created() {
    await this.nextQuestion();
  },
  methods: {
    submit(answer: string, index: number) {
      if (answer === this.correctAnswer) {
        this.scored = true;
        store.dispatch('increaseCorrect', {
          difficulty: this.difficulty,
          category: this.category
        });
      } else {
        this.scored = false;
        store.dispatch('increaseWrong', {
          difficulty: this.difficulty,
          category: this.category
        });
      }

      this.activeIndex = index;
      this.hasAnswered = true;
    },
    async nextQuestion() {
      this.showAnswer = false;
      this.hasAnswered = false;
      this.scored = false;
      this.activeIndex = -1;

      const response = await fetch(process.env.VUE_APP_API_URL);
      const data = await response.json();
      this.question = this.replaceEncodedCharacters(data.results[0].question);
      const temporaryAnswers = data.results[0].incorrect_answers;
      temporaryAnswers.splice(
        Math.round(Math.random() * 1000) % 4,
        0,
        data.results[0].correct_answer
      );
      this.correctAnswer = this.replaceEncodedCharacters(data.results[0].correct_answer);
      let counter = 0;
      this.answers = temporaryAnswers.map((answer: any) => ({
        index: counter++,
        answer: this.replaceEncodedCharacters(answer),
      }));
      this.category = this.replaceEncodedCharacters(data.results[0].category);
      this.difficulty = data.results[0].difficulty;
    },
    replaceEncodedCharacters(text: string) {
      return text.replaceAll('&quot;', '"')
        .replaceAll('&amp;', '&')
        .replaceAll('&#039;', '\'')
        .replaceAll('&reg;', '®')
        .replaceAll('&trade;', '™')
        .replaceAll('&eacute;', 'é')
        .replaceAll('&uuml;', 'ü')
        .replaceAll('&rsquo;', '’')
        .replaceAll('&deg;', '°')
    },
  },
})
export default class Game extends Vue {}
</script>
