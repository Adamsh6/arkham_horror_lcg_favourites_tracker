<template lang="html">
  <GChart
    type="ColumnChart"
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
        }
      }
    }
  },
  props: ['sanitisedChartData']
}
</script>

<style lang="css" scoped>
</style>
