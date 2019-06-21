<template lang="html">
  <div>
 <h4 v-on:click="handleClick">{{card.name}}</h4>
   <button v-on:click="handleButton">Add to Favourites</button>

 <card-details v-if="selected" :card="card" />
</div>
</template>

<script>
import CardDetails from './CardDetails'
import {eventBus} from '@/main.js'

export default {
  name: 'list-item',
  data() {
    return {
      selected: false
    }
  },
  props: ['card'],
  components: {
    'card-details': CardDetails
  },
  methods: {
    handleClick() {
      this.selected = !(this.selected)
    },
    handleButton() {
      eventBus.$emit('add-card', this.card)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
