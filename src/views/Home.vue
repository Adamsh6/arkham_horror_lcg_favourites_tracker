<template>
  <div class="home">
    <div v-for="investigator in coreInvestigators">
      <router-link v-on:click="handleClick" :to="{ name: 'investigator', params: {code: investigator.code} }">
        <img  :src="url + investigator.imagesrc"/>
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
  methods: {
    handleClick() {
     eventBus.$emit('investigator-selected', "HELLLO")
   }
  }
}
</script>
