<template>
  <div>
    <label>Correct answers: {{ $store.state.correct }}</label>
    <br />
    <label>Wrong answers: {{ $store.state.wrong }}</label>
    <apexchart
      type="donut"
      :options="chartOptions"
      :series="series"
      style="display: unset"
      align="center"
    ></apexchart>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import VueApexCharts from "vue3-apexcharts";
import store from '../store'

@Options({
  components: {
   apexchart: VueApexCharts,
  },
  data: function() {
    return {
      series: [store.state.correct, store.state.wrong],
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
        colors: ['#32CD32', '#DC143C'],
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
})
export default class Stats extends Vue {}
</script>
