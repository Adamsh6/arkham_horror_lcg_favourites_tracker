<template lang="html">
  <div>
 <h4><span :class="card.faction_code" v-on:click="handleClick">{{card.name}} : {{card.type_name}} ({{card.xp}})</span>
   <button v-on:click="handleButton">Add to Favourites</button>
   </h4>
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
  color: grey;
}
.seeker {
  color: gold;
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

button {
  display: inline;
}
</style>
