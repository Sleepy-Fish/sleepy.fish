import Vue from 'vue'
import Router from 'vue-router'

import { Home, Games, Blog, Post, About } from 'pages'

Vue.use(Router)

const routes = [
  {
    path: '*',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:id',
    name: 'Post',
    component: Post
  }
]

export default new Router({
  routes
})
