import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../app/views/Home.vue'
import Form from '../app/views/Form.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/form',
    name: 'form',
    component:Form
  }
]

const router = new VueRouter({
  routes
})


export default router
