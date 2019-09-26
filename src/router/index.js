import Vue from 'vue'
import Router from 'vue-router'
import blogPosts from 'static/blog/posts'

import { Home, Games, Blog, About } from 'pages'

Vue.use(Router)

console.log(blogPosts)

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
    path: '/blog',
    name: 'Blog',
    component: Blog
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
