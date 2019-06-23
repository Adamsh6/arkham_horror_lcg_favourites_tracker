<template>
  <div id="app">
    <nav><router-link :to="{name: 'home'}">Home</router-link><router-link :to="{name: 'statistics'}">Statistics</router-link></nav>
    <router-view :coreInvestigators="coreInvestigators" :selectedInvestigator="selectedInvestigator" :allCards="allCards" :favourites="favourites" id="view"></router-view>

  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'app',
  data() {
    return{
      allCards: null,
      coreInvestigators: null,
      selectedInvestigator: null,
      favourites: {}
    }
  },
  computed: {
    // coreInvestigators: getCoreInvestigators()
  },
  components: {

  },
  mounted() {
    fetch('https://arkhamdb.com/api/public/cards/')
    .then(res => res.json())
    .then(data => {
      this.allCards = data;
      this.coreInvestigators = this.getCoreInvestigators()
      this.selectedInvestigator = data[1]
    })

    eventBus.$on('investigator-selected', (investigator) => {
      this.selectedInvestigator = investigator
    })

    eventBus.$on('add-card', (card) => {

      this.favourites[this.selectedInvestigator.code].push(card)
    })

    // this.coreInvestigators = this.getCoreInvestigators()
  },
  methods: {
    // getCoreInvestigators: function() {
    //   if(this.allCards){
    //     const tempCoreInvestigators = []
    //     for(let i=1; i<6; i++){
    //       tempCoreInvestigators.push(this.allCards[i])
    //       this.favourites[this.allCards[i].code] = []
    //     }
    //     return tempCoreInvestigators
    //   } else {
    //     return null
    //   }
    //
    // }
      getCoreInvestigators: function() {
        if(this.allCards){
        const tempCoreInvestigators = []
        for(let i=1; i<this.allCards.length; i++){
          const card = this.allCards[i]
          if(card.type_code == 'investigator'){
          tempCoreInvestigators.push(card)
          this.favourites[card.code] = []
        }
        }
        return tempCoreInvestigators
      } else {
        return null
      }

    }
  }
}
</script>

<style>
body {
   background-image: url('https://i.imgur.com/Wu7uIaO.jpg');
   /* background-image: url('https://wallpaper-gallery.net/images/lovecraft-wallpaper-1920x1080/lovecraft-wallpaper-1920x1080-20.jpg'); */
  background-size: cover;
  background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Arvo', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;


}
a {
  color: white;
}
a:visited {
  color: white;
}
</style>
