<template lang="html">
  <div>

  <h3>Favourite Cards by Faction</h3>
  <faction-pie-chart :sanitisedChartData="favouriteByFaction"/>
  <h3>Favourite Cards by Cost</h3>
  <column-chart :sanitisedChartData="favouriteByCost" />
  <h3>Repeated Favourite Cards</h3>
  <bar-chart v-if="favouriteByRepeated.length > 1" :sanitisedChartData="favouriteByRepeated" />
    <p v-if="favouriteByRepeated.length == 1">None of your favourite cards are shared between Investigators!</p>
    <h3>Favourite Cards by Type</h3>
  <column-chart :sanitisedChartData="favouriteByType"/>
</div>
</template>

<script>
import BarChart from '@/components/BarChart'
import FactionPieChart from '@/components/FactionPieChart'
import ColumnChart from '@/components/ColumnChart'

export default {
  name: 'statistics',
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function

    }
  },
  props: ['coreInvestigators', 'selectedInvestigator', 'allCards', 'favourites'],
  components: {
     'bar-chart': BarChart,
    'faction-pie-chart': FactionPieChart,
    'column-chart': ColumnChart
  },
  computed: {
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
    },
    favouriteByRepeated() {
      const data = [['Repeated Card', 'No. of Investigators']]
      const cardCounter = {}

      Object.keys(this.favourites).forEach((key) =>{
        this.favourites[key].forEach((card) =>{
          if(cardCounter.hasOwnProperty(`${card.name} (${card.xp})`)){
            cardCounter[`${card.name} (${card.xp})`] ++
          } else {
            cardCounter[`${card.name} (${card.xp})`] = 1
          }

        })
      })
      Object.keys(cardCounter).forEach((key) =>{
        if(cardCounter[key] > 1){
          data.push([key, cardCounter[key]])
        }
      })
      return data
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
div {
  color: white;
}
h3 {
  text-decoration: underline;
  margin-top: 3em;
}
</style>
