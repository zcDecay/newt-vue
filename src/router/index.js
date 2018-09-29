import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/home/HomePage.vue'

Vue.use(Router)
Vue.component('HomePage',HomePage)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
