import Vue from 'vue'
import Router from 'vue-router'

import { Home, Games, Projects, Extras, About } from 'pages'

Vue.use(Router)

const routes = [
  {
    path: '*',
    name: 'Home',
    component: Home
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/extras',
    name: 'Extras',
    component: Extras
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

export default new Router({
  routes
})
