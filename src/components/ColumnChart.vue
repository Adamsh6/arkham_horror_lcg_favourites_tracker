<template lang="html">
  <GChart
    type="ColumnChart"
    :data="chartData"
    :options="chartOptions"
  />

</template>

<script>
export default {
  name: 'column-chart',
  data() {
    return {
      chartData: this.sanitisedChartData,
      chartOptions: {
        chart: {
          title: 'Favourite Cards',
        },
        fontName: 'Arvo',
        colors: ['purple'],
        vAxis: {
          format: "#",
          baseline: 0
        },
        backgroundColor: {fill: '#E6E6FA', fillOpacity: 0.7}
      }
    }
  },
  props: ['sanitisedChartData']
}
</script>

<style lang="css" scoped>
</style>
