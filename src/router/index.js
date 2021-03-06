import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const appRouter = new Router({
  routes: [
    // 0=>首页
    {
      path: "/",
      redirect: "/homePage"
    },
    {
      path: "/homePage",
      name: "homePage",
      component: () => import("@/components/index/newIndex")
    },
    // 关于我们
    {
        path: "/aboutUs",
        name: "aboutUs",
        component: () => import("@/components/aboutUs/index")
    },
    // 关于我们
    {
        path: "/contactUs",
        name: "contactUs",
        component: () => import("@/components/contactUs/index")
    },
      // 平台入口
      {
        path: "/platformEntrance",
        name: "platformEntrance",
        component: () => import("@/components/platformEntrance/index")
    },
    // 1=>产品
    {
      path: "/products:id",
      name: "products",
      component: () => import("@/components/products/product-detail")
    },
    // 2=>解决方案
    {
      path: "/solutions:id",
      name: "solutions",
      component: () => import("@/components/solutions/solution-detail")
    },
    //智慧楼宇场景
    {
      path: "/smart-building",
      name: "smart-building",
      component: () => import("@/components/solutions/smart-building")
    },
    //智慧园区
    {
      path: "/economic-park",
      name: "economic-park",
      component: () => import("@/components/solutions/E-park")
    },
    //智慧场馆场景
    {
      path: "/smart-stadium",
      name: "smart-stadium",
      component: () => import("@/components/solutions/smart-stadium")
    },
    //智慧城市场景
    {
      path: "/smart-city",
      name: "smart-city",
      component: () => import("@/components/solutions/smart-city")
    },
    //智慧商业场景
    {
      path: "/smart-commerce",
      name: "smart-commerce",
      component: () => import("@/components/solutions/smart-commerce")
    },
    //集智生活解决方案
    {
      path: "/jizhi-commerce",
      name: "jizhi-commerce",
      component: () => import("@/components/solutions/jizhi-commerce")
    },
    // 3=>合作
    {
      path: "/cooperate",
      name: "cooperate",
      component: () => import("@/components/cooperate/cooperate-submit")
    },
    // 4=>新闻与动态
    {
      path: "/news",
      name: "新闻列表",
      component: () => import("@/components/news/newsList")
    },
    {
      path: "/newsDetail:id",
      name: "新闻详情",
      component: () => import("@/components/news/newsDetail")
    },
    // 6=>开发者社区
    {
      path: "/developer",
      name: "developerCommunity",
      component: () =>
        import("@/components/developerCommunity/developerCommunity")
    },
    // 7=>产品与方案
    {
      path: "/solutions",
      name: "产品与方案",
      component: () =>
        import("@/components/productsSolutions/solutions")
    },
    //8=>案例分析
    {
      path: "/caseAnalysis",
      name: "案例分析",
      component: () =>
        import("@/components/caseAnalysis/caseanalysis")
    },
    //9=>新闻中心
    {
      path: "/newsCenter",
      name: "新闻中心",
      component: () =>
        import("@/components/newcenterlist/newsCenter")
    },
    {
      path: "/inlineDetail:id",
      name: "新闻详情",
      component: () => import("@/components/newcenterlist/inlineDetail")
    },
    // {
    //   path: "/caseAnalysis",
    //   name: "案例分析",
    //   component: () =>
    //     import("@/components/caseAnalysis/caseanalysis")
    // },
    // 产品
    // 安防管理平台
    {
      path: "/security-platform",
      name: "security-platform",
      component: () => import("@/components/products/security-platform")
    },
    // 出行管理
    {
      path: "/trip-platform",
      name: "trip-platform",
      component: () => import("@/components/products/trip-platform")
    },
    // 能源管理
    {
      path: "/energy-platform",
      name: "energy-platform",
      component: () => import("@/components/products/energy-platform")
    },
    //企业管理平台
    {
      path: "/enterprise-platform",
      name: "enterprise-platform",
      component: () => import("@/components/products/enterprise-platform")
    },
    //资产管理平台
    {
      path: "/asset-platform",
      name: "asset-platform",
      component: () => import("@/components/products/asset-platform")
    },
    {
      path: "/loan-platform",
      name: "loan-platform",
      component: () => import("@/components/products/loan-platform")
    }
  ]
});
appRouter.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
export default appRouter;
