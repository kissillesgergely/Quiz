<template>
  <div class="about">
    <form @submit.prevent>
      <label>Answer the following question</label>
      <br />
      <label>{{ question }}</label>
      <br />
      <div v-for="item in answers" :key="item.index">
        <button 
          @click="submit(item.answer, item.index)"
          class="w-64 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 m-2 border border-gray-400 rounded shadow"
          :class="{
            'bg-green': true
          }"
        >
          {{ item.answer }}
        </button>
        <br />
      </div>
      <label v-if="showAnswer"
        >The correct answer is: {{ correctAnswer }}</label
      >
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  data() {
    return {
      question: "",
      answers: [],
      correctAnswer: "",
      scored: false,
      showAnswer: false,
      hasAnswered: false,
      activeIndex: -1,
    };
  },
  async created() {
    // use fetch here to get the quiz questions
    const response = await fetch("https://opentdb.com/api.php?amount=1");
    const data = await response.json();
    this.question = this.replaceEncodedCharacters(data.results[0].question);
    const temporaryAnswers = data.results[0].incorrect_answers;
    temporaryAnswers.splice(
      Math.round(Math.random() * 1000) % 4,
      0,
      data.results[0].correct_answer
    );
    this.correctAnswer = data.results[0].correct_answer;
    let counter = 0;
    this.answers = temporaryAnswers.map((answer: any) => ({
      index: counter++,
      answer: this.replaceEncodedCharacters(answer)
    }));

    console.log(this.answers);
  },
  methods: {
    submit(answer: string, index: number) {
      if (answer === this.correctAnswer) {
        this.scored = true;
      }

      this.activeIndex = index;
      this.hasAnswered = true;
      this.showAnswer = true;

      console.log(this.scored);
      console.log(this.activeIndex);
    },
    // it's set to any for now because the compiler says this function doesn't exist on strings
    replaceEncodedCharacters(text: any) {
      return text.replaceAll('&quot;', '"').replaceAll('&#039;', '\'')
    }
  },
})
export default class Hello extends Vue {}
</script>
