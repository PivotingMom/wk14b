import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/HomeView.vue'
import LoginView from '@/components/LoginView.vue'

import AppFooter from '@/components/AppFooter'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path:'/',
      name: 'HomeView',
      component: HomeView
    },

    {
      path:'/',
      name: 'AppFooter',
      component: AppFooter
    },
    {
      path:'/login',
      name: 'LoginView',
      component: LoginView
    }
  ] 
})
