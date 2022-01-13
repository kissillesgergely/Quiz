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
      :correctColor="'#32CD32'"
      :wrongColor="'#DC143C'"
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
          :correctColor="'#32CD32'"
          :wrongColor="'#DC143C'"
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
          :correctColor="'#32CD32'"
          :wrongColor="'#DC143C'"
        ></doughnut-chart>
        <p v-else class="m-4 italic text-gray-400">No answers yet</p>
        {{ key }}
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import store from '../store'
import DoughnutChart from '@/components/DoughnutChart.vue'

@Options({
  components: {
    DoughnutChart: DoughnutChart,
  }
})
export default class Stats extends Vue {}
</script>
