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
    getCoreInvestigators: function() {
      if(this.allCards){
        const tempCoreInvestigators = []
        for(let i=1; i<6; i++){
          tempCoreInvestigators.push(this.allCards[i])
          this.favourites[this.allCards[i].code] = []
        }
        return tempCoreInvestigators
      } else {
        return null
      }

    }
    //   getCoreInvestigators: function() {
    //     if(this.allCards){
    //     const tempCoreInvestigators = []
    //     for(let i=1; i<this.allCards.length; i++){
    //       const card = this.allCards[i]
    //       if(card.type_code == 'investigator'){
    //       tempCoreInvestigators.push(card)
    //       this.favourites[card.code] = []
    //     }
    //     }
    //     return tempCoreInvestigators
    //   } else {
    //     return null
    //   }
    //
    // }
  }
}
</script>

<style>
body {
  /* background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/beb24151-6c66-453d-88ba-352feea951ec/dcqpv53-deedeb53-832e-4dcd-9783-67ccbaa608da.jpg/v1/fill/w_1531,h_522,q_70,strp/arkham_horror__the_circle_undone_by_jakemurray_dcqpv53-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjU1IiwicGF0aCI6IlwvZlwvYmViMjQxNTEtNmM2Ni00NTNkLTg4YmEtMzUyZmVlYTk1MWVjXC9kY3FwdjUzLWRlZWRlYjUzLTgzMmUtNGRjZC05NzgzLTY3Y2NiYWE2MDhkYS5qcGciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.F-ZxWmJvvEy_YLqaca6K1svftPkR6M4c0PGsjJXNs-I');
  background-size: auto; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;


}
</style>
