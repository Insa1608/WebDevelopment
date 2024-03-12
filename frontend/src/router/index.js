import Vue from 'vue'
import VueRouter from 'vue-router'
import ShiftPlan from '../views/ShiftPlan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shiftplan',
    component: ShiftPlan
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/add',
    name: 'addemployee',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddEmployee.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
