<template lang="html">
  <div>
  <img :src="url + card.imagesrc" >
</div>
</template>

<script>
export default {
  name: 'card-details',
  data() {
    return {
      url: "https://arkhamdb.com"
    }
  },
  props: ['card']
}
</script>

<style lang="css" scoped>
img {
  border: white 1px solid;
  border-radius: 0.5em;
}
</style>
