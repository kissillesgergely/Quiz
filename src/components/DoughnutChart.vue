<template>
  <apexchart
      v-if="correct || wrong"
      type="donut"
      width="240"
      :options="chartOptions"
      :series="series"
      style="display: unset"
      align="center"
  ></apexchart>
  <p v-else class="m-4 italic text-gray-400">No answers yet</p>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import store from '../store'

export default {
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    correct: Number,
    wrong: Number,
    correctColor: String,
    wrongColor: String,
  },
  data: function() {
    return {
      series: [this.correct, this.wrong],
      chartOptions: {
        chart: {
          expandOnClick: false
        },
        legend: {
          position: 'bottom',
        },
        labels: ['Correct', 'Wrong'],
        colors: [this.correctColor, this.wrongColor],
      }
    };
  },
}
</script>
