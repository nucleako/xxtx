import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
    path: '/china',
    name: 'China',

    component: () => import(/* webpackChunkName: "about" */ '../views/China.vue')
  },  
  {
    path: '/antv',
    name: 'Antv',

    component: () => import(/* webpackChunkName: "about" */ '../views/Antv.vue')
  },  
  {
    path: '/baidu',
    name: 'Baidu',

    component: () => import(/* webpackChunkName: "about" */ '../views/Baidu.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
