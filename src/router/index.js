import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'homePage',
      component:  () => import ('@/components/index/index')
    },
    {
        path: '/', 
        name: 'homePage',
        redirect:'/index'
     
      }
  ]
})
