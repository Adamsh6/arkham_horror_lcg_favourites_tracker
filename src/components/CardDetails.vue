<template lang="html">
  <div>
    <!-- <p>Faction: {{card.faction_name}} | Cost: {{card.cost}} | XP: {{card.xp}}</p>
  <p>{{card.real_text}}</p> -->
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
</style>
