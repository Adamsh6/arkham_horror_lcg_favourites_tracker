<template lang="html">
<div>
  <div >
    <select v-on:change="filterCards(isXP, isClass, isType)" v-model="selectedXP">
      <option value="-1">All XP Values</option>
      <option value="0">0XP</option>
      <option value="1">1+XP</option>
    </select>
    <select v-on:change="filterCards(isXP, isClass, isType)" v-model="selectedClass">
      <option value="-1">All Factions</option>
      <option value="Guardian">Guardian</option>
      <option value="Seeker">Seeker</option>
      <option value="Rogue">Rogue</option>
      <option value="Survivor">Survivor</option>
      <option value="Mystic">Mystic</option>
      <option value="Neutral">Neutral</option>
    </select>
  <select v-on:change="filterCards(isXP, isClass, isType)" v-model="selectedType">
    <option value="-1">All Card Types</option>
    <option>Asset</option>
    <option>Event</option>
    <option>Skill</option>
  </select>
  </div>
    <ul>
      <div v-for="(card, key) in filteredListContent">
    <list-item  :key="key" :card="card"></list-item><button v-if="notInFavourites(card)" v-on:click="handleButton(card)">Add to Favourites</button>
  </div>
  </ul>
</div>
</template>

<script>
import ListItem from './ListItem'
import CardDetails from './CardDetails'
import {eventBus} from '@/main.js'

export default {
  name: 'card-list',
  props: ['listContent', 'favourites'],
  data() {
    return {
      filteredListContent: this.listContent,
      selectedClass: "-1",
      selectedType: "-1",
      selectedXP: "-1"
    }
  },
  components: {
    'list-item': ListItem,
    'card-details': CardDetails,
  },
  computed: {
    guardianAmount: function(){
      return this.factionAmount('Guardian')
    }
  },
  methods: {
    isXP(card){
      if(this.selectedXP == -1){
        return true
      } else if(this.selectedXP == 0) {
        return card.xp == 0
      } else {
        return card.xp > 0
      }
    },
    isClass(card){
      if(this.selectedClass == -1) {
        return true
      } else {
        return card.faction_name == this.selectedClass
      }
    },
    isType(card){
      if(this.selectedType == -1) {
        return true
      } else {
        return card.type_name == this.selectedType
      }
    },
    factionAmount(faction) {
      return this.listContent.reduce((acc, card) => {
        if(card.faction_name == faction){
          return acc + 1
        }
      }, 0)
    },
    handleClick() {
      this.selected = !(this.selected)
    },
    handleButton(card) {
      eventBus.$emit('add-card', card)
    },
    notInFavourites(insertCard){
      if(this.favourites == true){
        return false
      }
      let validation = true
      this.favourites.forEach((card) => {
        if(card.name == insertCard.name){
          validation = false
        }
      })
      return validation
    },
    filterCards(isXP, isClass, isType){
      this.filteredListContent = this.listContent.filter((card) => {
          return isXP(card) && isClass(card) && isType(card)
      })
    }
  }

}
</script>

<style lang="css" scoped>

button {
  display: inline-block;
}
</style>
