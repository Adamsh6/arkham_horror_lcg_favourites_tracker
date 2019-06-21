<template lang="html">
  <ul>
    <list-item v-for="(card, key) in listContent" :key="key" :card="card"/>
  </ul>
</template>

<script>
import ListItem from './ListItem'
import CardDetails from './CardDetails'

export default {
  name: 'card-list',
  props: ['listContent'],
  components: {
    'list-item': ListItem,
    'card-details': CardDetails,
  }

}
</script>

<style lang="css" scoped>
</style>
