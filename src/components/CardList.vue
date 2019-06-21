<template lang="html">
<div>
  <div >
    <button v-on:click="filterNoXP">0XP</button>
    <button v-on:click="filterXP">1+XP</button>
    <button v-on:click="all">All</button>
    <select v-on:change="filterClass" v-model="selectedClass">
      <option value="Guardian">Guardian</option>
      <option value="Seeker">Seeker</option>
      <option value="Rogue">Rogue</option>
      <option value="Survivor">Survivor</option>
      <option value="Mystic">Mystic</option>
      <option value="Neutral">Neutral</option>
    </select>
  </div>
    <ul>
    <list-item v-for="(card, key) in filteredListContent" :key="key" :card="card"/>
  </ul>
</div>
</template>

<script>
import ListItem from './ListItem'
import CardDetails from './CardDetails'

export default {
  name: 'card-list',
  props: ['listContent'],
  data() {
    return {
      filteredListContent: this.listContent,
      selectedClass: "Guardian",
    }
  },
  components: {
    'list-item': ListItem,
    'card-details': CardDetails,
  },
  computed: {

  },
  methods: {
    filterNoXP(){
      this.filteredListContent = this.listContent.filter((card) => {
        return card.xp == 0
      })
    },
    filterXP(){
      this.filteredListContent = this.listContent.filter((card) => {
        return card.xp > 0
      })
    },
    all(){
      this.filteredListContent = this.listContent
    },
    filterClass(){
      this.filteredListContent = this.listContent.filter((card) => {
        return card.class_name == this.selectedClass
      })
    }
  }

}
</script>

<style lang="css" scoped>
</style>
