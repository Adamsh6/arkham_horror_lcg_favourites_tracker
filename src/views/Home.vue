<template>
  <div class="home">
    <div v-for="investigator in coreInvestigators">
      <img :src="url + investigator.imagesrc"/>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  data(){
    return {
      url: "https://arkhamdb.com"
    }
  },
  components: {

  },
  props: ['coreInvestigators']
}
</script>
