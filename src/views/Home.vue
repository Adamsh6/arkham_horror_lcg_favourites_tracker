<template>
  <div class="home">
    <div v-for="investigator in coreInvestigators">
      <router-link  :to="{ name: 'investigator', params: {code: investigator.code} }">
        <img v-on:click="handleClick(investigator)" :src="url + investigator.imagesrc"/>
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
