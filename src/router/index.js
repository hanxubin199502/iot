import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [ 
        // 0=>首页
        {
            path: '/', 
            redirect:'/homePage'
        
        },
        {
            path: '/homePage',
            name: 'homePage',
            component:  () => import ('@/components/index/index'),
        },
        // 1=>产品
        {
            path: '/products:id',
            name: 'products',
            component:  () => import ('@/components/products/product-detail'),
            
        },
        // 2=>解决方案
        {
            path: '/solutions:id',
            name: 'solutions',
            component:  () => import ('@/components/solutions/solution-detail'),
        },
        //智慧楼宇场景
        {
            path: '/smart-building',
            name: 'solutions',
            component:  () => import ('@/components/solutions/smart-building'),
        },
        {
            path: '/economic-park',
            name: 'solutions',
            component:  () => import ('@/components/solutions/E-park'),
        },
        // 3=>合作
        {
            path: '/cooperate',
            name: 'cooperate',
            component:  () => import ('@/components/cooperate/cooperate-submit'),
            
        },
        // 4=>新闻与动态
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
        // 6=>开发者社区
        {
            path: '/developer',
            name: 'developerCommunity',
            component:  () => import ('@/components/developerCommunity/developerCommunity'),
            
        },
    ]
})
