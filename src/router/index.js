import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [ 
        {
            path: '/', 
            redirect:'/homePage'
        
        },
        {
            path: '/homePage',
            name: 'homePage',
            component:  () => import ('@/components/index/index'),
        },
        {
            path: '/news',
            name: '新闻列表',
            component:  () => import ('@/components/news/newsList'),
        },
        {
            path: '/newsDetail:id',
            name: '新闻详情',
            component:  () => import ('@/components/news/newsDetail'),
        },
    ]
})
