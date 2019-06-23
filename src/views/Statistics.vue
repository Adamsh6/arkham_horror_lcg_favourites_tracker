<template lang="html">
  <div>
    <h3>Favourite Cards by Type</h3>
  <bar-chart :sanitisedChartData="favouriteByType"/>
  <h3>Favourite Cards by Faction</h3>
  <bar-chart :sanitisedChartData="favouriteByFaction"/>
  <h3>Favourite Cards by Cost</h3>
  <bar-chart :sanitisedChartData="favouriteByCost" />
</div>
</template>

<script>
import BarChart from '@/components/BarChart'
export default {
  name: 'statistics',
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function

    }
  },
  props: ['coreInvestigators', 'selectedInvestigator', 'allCards', 'favourites'],
  components: {
    'bar-chart': BarChart
  },
  computed: {
    // favouriteByType() {
    //   const data = [['Type', 'No. of Favourites'], ['Skill', 0], ['Event', 0], ['Asset', 0]];
    //   const usedCards = {}
    //   Object.keys(this.favourites).forEach((key) =>{
    //     this.favourites[key].forEach((card) =>{
    //       if(!usedCards.hasOwnProperty(card.name)){
    //         usedCards[card.name] = 1;
    //         for(let i=1; i < data.length; i++){
    //           if (card.type_name == data[i][0]){
    //             data[i][1]++
    //           }
    //         }
    //
    //       }
    //     })
    //   })
    //   return data
    // }
    favouriteByType() {
      const data = [['Type', 'No. of Favourites'], ['Skill', 0], ['Event', 0], ['Asset', 0]];
      return this.sanitiseDataByProperty(data, 'type_name')
    },
    favouriteByFaction() {
      const data = [['Faction', 'No. of Favourites'], ['Guardian', 0], ['Seeker', 0], ['Mystic', 0], ['Survivor', 0], ['Rogue', 0], ['Neutral', 0]]
       return this.sanitiseDataByProperty(data, 'faction_name')
    },
    favouriteByCost() {
      const data = [['Cost', 'No. of Favourites'], [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]]
      return this.sanitiseDataByProperty(data, 'cost')
    }
  },
  methods: {
    sanitiseDataByProperty(array, property) {
      const data = array
      const usedCards = {}
      Object.keys(this.favourites).forEach((key) =>{
        this.favourites[key].forEach((card) =>{
          if(!usedCards.hasOwnProperty(card.name)){
            usedCards[card.name] = 1;
            for(let i=1; i < data.length; i++){
              if (card[property] == data[i][0]){
                data[i][1]++
              }
            }

          }
        })
      })
      return data

    }
  }
}
</script>

<style lang="css" scoped>
</style>
