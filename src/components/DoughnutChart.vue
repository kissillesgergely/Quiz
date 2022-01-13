<template>
  <apexchart
      type="donut"
      :options="chartOptions"
      :series="series"
      style="display: unset"
      align="center"
  ></apexchart>
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
    wrongColor: String
  },
  data: function() {
    return {
      // series: [store.state.correct, store.state.wrong],
      series: [this.correct, this.wrong],
      chartOptions: {
        chart: {
          width: 480,
          expandOnClick: false
        },
        legend: {
          //show: false,
          position: 'bottom',
        },
        labels: ['Correct', 'Wrong'],
        //colors: ['#32CD32', '#DC143C'],
        colors: [this.correctColor, this.wrongColor],
        responsive: [
          {
            breakpoint: 2000,
            options: {
              chart: {
                width: 480,
              },
              legend: {
                position: 'bottom',
              }
            }
          },
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: 'bottom',
              }
            }
          }
        ],
        plotOptions: {
          pie: {
            expandOnClick: false
          },
        }
      }
    };
  },
}
</script>
