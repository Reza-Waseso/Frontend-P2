import Vue from 'vue'
import VueRouter from 'vue-router'

//import halaman
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Perkawinan from '../views/Perkawinan.vue'
import Perceraian from '../views/Perceraian.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/perkawinan',
    name: 'Perkawinan',
    component: Perkawinan
  },
  {
    path: '/perceraian',
    name: 'Perceraian',
    component: Perceraian
  },
  {
    path: '/register',
    name: 'Register',
    component: Register

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
