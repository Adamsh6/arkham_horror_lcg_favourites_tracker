<template>
  <div id="app">
    <router-view :coreInvestigators="coreInvestigators" id="view"></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return{
      allCards: null,
      coreInvestigators: null
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
    })

    // this.coreInvestigators = this.getCoreInvestigators()
  },
  methods: {
    getCoreInvestigators: function() {
      if(this.allCards){
      const tempCoreInvestigators = []
      for(let i=1; i<6; i++){
        tempCoreInvestigators.push(this.allCards[i])
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
