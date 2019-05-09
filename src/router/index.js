import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [ 
        {
            path: '/', 
            name: 'homePage',
            redirect:'/homePage'
        
        },
        {
            path: '/homePage',
            name: 'homePage',
            component:  () => import ('@/components/index/index')
        },
    ]
})
