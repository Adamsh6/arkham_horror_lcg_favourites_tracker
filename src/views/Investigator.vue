<template lang="html">
  <div>
    <div class="investigator">
    <img  :src="url + selectedInvestigator.imagesrc"/>
    <card-list :listContent="favourites"></card-list>
  </div>
    <card-list id="all-cards" :listContent="filteredCards">{{this.listContent}}</card-list>
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
    filteredCards() {
      const filteredCards = this.allCards.filter((card) => {
        if(!card.xp){
          return false

        }
        for(const option of this.selectedInvestigator.deck_options){
          for(const faction of option.faction){
            if(faction==card.faction_code && card.xp >= option.level.min && card.xp <= option.level.max){
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
  width: 40%
}
#all-cards {
  float:right;
  width: 50%
}
</style>
