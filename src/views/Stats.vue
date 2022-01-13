<template>
  <div>
    <h2 class="text-2xl"><strong>Overall</strong></h2>
    <label>Correct answers: {{ $store.state.correct }}</label>
    <br />
    <label>Wrong answers: {{ $store.state.wrong }}</label>
    <doughnut-chart
      v-if="$store.state.correct || $store.state.wrong"
      :correct="$store.state.correct"
      :wrong="$store.state.wrong"
      :correctColor="colors.primaryGreen"
      :wrongColor="colors.primaryRed"
    ></doughnut-chart>
    <p v-else class="italic text-gray-400">No answers yet</p>
    <hr class="m-6">
  
    <h2 class="text-2xl"><strong>By Difficulty</strong></h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 m-4 mt-8">
      <div v-for="(value, key) in $store.state.difficulties" :key="key">
        <doughnut-chart
          v-if="$store.state.difficulties[key].correct || $store.state.difficulties[key].wrong"
          :correct="$store.state.difficulties[key].correct"
          :wrong="$store.state.difficulties[key].wrong"
          :correctColor="colors.secondaryGreen"
          :wrongColor="colors.secondaryRed"
        ></doughnut-chart>
        <p v-else class="m-4 italic text-gray-400">No answers yet</p>
        {{ key }}
      </div>
    </div>

    <hr class="m-5">
    <h2 class="text-2xl"><strong>By Category</strong></h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 m-4 mt-8">
      <div v-for="(value, key) in $store.state.categories" :key="key">
        <doughnut-chart
          v-if="$store.state.categories[key].correct || $store.state.categories[key].wrong"
          :correct="$store.state.categories[key].correct"
          :wrong="$store.state.categories[key].wrong"
          :correctColor="colors.tertiaryGreen"
          :wrongColor="colors.tertiaryRed"
        ></doughnut-chart>
        <p v-else class="m-4 italic text-gray-400">No answers yet</p>
        {{ key }}
      </div>
    </div>
    <button 
      @click="resetResults"
      class="w-40 bg-red-600 text-white font-semibold py-2 px-4 m-2 border border-gray-400 rounded shadow"

    >
      Reset results
    </button>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import DoughnutChart from '@/components/DoughnutChart.vue';

@Options({
  components: {
    DoughnutChart: DoughnutChart,
  },
  data() {
    return {
      colors: {
        primaryGreen: '#00b849',
        primaryRed: '#ff9f85',
        secondaryGreen: '#008f39',
        secondaryRed: '#ffbfad',
        tertiaryGreen: '#00a341',
        tertiaryRed: '#ff8f70'
      }
    }
  },
  methods: {
    resetResults() {
      if (confirm('Are you sure you want to reset your results?')) {
        localStorage.clear();
        location.reload();
        window.scrollTo(0, 0);
      }
    },
  }
})
export default class Stats extends Vue {}
</script>
