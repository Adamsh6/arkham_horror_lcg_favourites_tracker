<template lang="html">
  <div>
    <div class="investigator">
      <img  :src="url + selectedInvestigator.imagesrc"/>
      <h3>Favourites</h3>
      <card-list :listContent="investigatorFavourites" :favourites="true"></card-list>
    </div>
    <card-list v-if="filteredCards"  id="all-cards" :listContent="filteredCards" :favourites="investigatorFavourites">{{this.listContent}}</card-list>
  </div>
</template>


<script>
import {eventBus} from '@/main.js'
import CardList from '@/components/CardList'

export default {
  name: 'investigator',
  props: ['coreInvestigators', 'selectedInvestigator', 'allCards', 'favourites'],
  components: {
    'card-list': CardList,
  },
  computed: {
    investigatorFavourites() {
      return this.favourites[this.selectedInvestigator.code]
    },
    filteredCards() {
      const filteredCards = this.allCards.filter((card) => {
        if(card.xp === "" || !card.hasOwnProperty('xp')){
          return false

        }
        for(const option of this.selectedInvestigator.deck_options){
          if(option.hasOwnProperty("not")){
            if((card.traits && card.real_traits.toLowerCase().includes(option.trait[0])) && (!(option.hasOwnProperty('level')) || (card.xp >= option.level.min && card.xp <= option.level.max))){
              return false
            }
          }
          if(option.hasOwnProperty("faction")){
            for(const faction of option.faction){
              if(faction==card.faction_code && card.xp >= option.level.min && card.xp <= option.level.max){
                return true
              }
            }
          }else if(option.hasOwnProperty('trait')){
            for(const trait of option.trait){
              if((card.traits &&card.real_traits.toLowerCase().includes(option.trait)) && card.xp >= option.level.min && card.xp <= option.level.max){
                return true
              }
            }
          }else if(option.hasOwnProperty('uses')){
            if(card.text && card.real_text.toLowerCase().includes('uses') && card.real_text.toLowerCase().includes('charges') && card.xp >= option.level.min && card.xp <= option.level.max){
              return true
            }
          }else if(option.hasOwnProperty('text')){
            if(card.text && card.real_text.match(option.text[0])){
              return true
            }
          }
          else if(option.hasOwnProperty('level')){
            if(card.xp >= option.level.min && card.xp <= option.level.max){
              return true
            }
          }

        }
        return false
      })
      return filteredCards
    }
  },
  data() {
    return{
      url: "https://arkhamdb.com"
    }
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
.investigator {
  float: left;
  width: 45%
}
#all-cards {
  float:right;
  width: 50%
}
h3 {
  color: white;
  text-decoration: underline;
}
</style>
