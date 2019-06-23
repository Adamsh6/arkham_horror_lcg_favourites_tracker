<template>
  <div class="home">
    <div class="investigator" v-for="investigator in coreInvestigators">
      <router-link  :to="{ name: 'investigator', params: {code: investigator.code} }">
        <img v-if="investigator.imagesrc" v-on:click="handleClick(investigator)" :src="url + investigator.imagesrc" :alt="investigator.name"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'home',
  data(){
    return {
      url: "https://arkhamdb.com"
    }
  },
  components: {

  },
  props: ['coreInvestigators', 'selectedInvestigator'],
  mounted() {
  },
  methods: {
    handleClick(investigator) {
     eventBus.$emit('investigator-selected', investigator)
   }
  }
}
</script>

<style lang="css" scoped>
.home {
  display: flex;
  flex-wrap: wrap;
}
  img {
    width: 300px;
    margin: 5px;
    border: solid 1px white;
    border-radius: 0.5em;
  }
</style>
