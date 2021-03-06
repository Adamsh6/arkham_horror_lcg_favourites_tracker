import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Investigator from './views/Investigator.vue'
import Statistics from './views/Statistics.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/investigator/:code',
      name: 'investigator',
      component: Investigator
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics
    }
  ]
})
