<template lang="html">
  <div>
    <img  :src="url + selectedInvestigator.imagesrc"/>
  </div>
</template>


<script>
import {eventBus} from '@/main.js'

export default {
  name: 'investigator',
  props: ['coreInvestigators', 'selectedInvestigator'],
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
</style>
