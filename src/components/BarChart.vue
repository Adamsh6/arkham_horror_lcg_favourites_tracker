<template lang="html">
  <GChart
    type="BarChart"
    :data="chartData"
    :options="chartOptions"
  />

</template>

<script>
export default {
  name: 'bar-chart',
  data() {
    return {
      chartData: this.sanitisedChartData,
      chartOptions: {
        chart: {
          title: 'Favourite Cards',
        },
        fontName: 'Arvo',
        colors: ['purple'],
        hAxis: {
          format: "#",
          baseline: 0
        },
        backgroundColor: {fill: '#E6E6FA', fillOpacity: 0.5}
      }
    }
  },
  props: ['sanitisedChartData']
}
</script>

<style lang="css" scoped>
</style>
