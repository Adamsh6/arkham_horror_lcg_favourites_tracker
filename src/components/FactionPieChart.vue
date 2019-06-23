<template lang="html">
  <GChart
    type="PieChart"
    :data="chartData"
    :options="chartOptions"
  />

</template>

<script>
export default {
  name: 'faction-pie-chart',
  data() {
    return {
      chartData: this.sanitisedChartData,
      chartOptions: {
        chart: {
          title: 'Favourite Cards',
        },
        fontName: 'Arvo',
        slices: [{color: 'blue'}, {color: 'goldenrod'}, {color: 'purple'}, {color: 'red'}, {color: 'green'}, {color: 'gray'}],
        legend: {position: 'labeled'},
        height: 500,
        backgroundColor: {fill: '#E6E6FA', fillOpacity: 0.7}
      }
    }
  },
  props: ['sanitisedChartData']
}
</script>

<style lang="css" scoped>
</style>
