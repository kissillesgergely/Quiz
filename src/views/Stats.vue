<template>
  <div>
    <h2>Overall</h2>
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
    <p v-else>No answers yet</p>

    <h2>By Difficulty</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="(value, key) in $store.state.difficulties" :key="key">
        <doughnut-chart
          v-if="$store.state.correct || $store.state.wrong"
          :correct="$store.state.difficulties[key].correct"
          :wrong="$store.state.difficulties[key].wrong"
          :correctColor="'#32CD32'"
          :wrongColor="'#DC143C'"
        ></doughnut-chart>
        <p v-else>No answers yet</p>
        {{ key }}
      </div>      
    </div>

    <h2>By Category</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>01</div>
      <!-- ... -->
              <!-- {{ value.correct }}
        <br />
        {{ value.wrong }}
        <br /> -->
      <div>09</div>
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
