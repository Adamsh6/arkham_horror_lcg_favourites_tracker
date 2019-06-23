<template lang="html">
  <div>
 <h4><span :class="card.faction_code" v-on:click="handleClick"><span v-if="card.cost > -1">{{card.cost}}📦</span> {{card.name}} : {{card.type_name}} ({{card.xp}})</span></h4>
 <card-details v-if="selected" :card="card" />
</div>
</template>

<script>
import CardDetails from './CardDetails'
import {eventBus} from '@/main.js'

export default {
  name: 'list-item',
  data() {
    return {
      selected: false
    }
  },
  props: ['card'],
  components: {
    'card-details': CardDetails
  },
  methods: {
    handleClick() {
      this.selected = !(this.selected)
    },
    handleButton() {
      eventBus.$emit('add-card', this.card)
    }
  }
}
</script>

<style lang="css" scoped>
.guardian {
  color: blue;
}
.neutral {
  color: dimgray;
}
.seeker {
  color: goldenrod;
  text-shadow: 0px 0px 8px black;
}
.mystic {
  color: purple;
}
.survivor {
  color: red;
}
.rogue {
  color: green;
}

h4 {
  text-shadow: 0px 0px 8px white ;
  background-color: #E6E6FA80 ;
  background-blend-mode: difference;
  width: auto;
  padding: 0;
}
</style>
