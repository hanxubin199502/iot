// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import HttpPlugIn from './plugins/http.js'
import ApiProvider from './services/api.provider.js'
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = HttpPlugIn
Vue.prototype.$api = ApiProvider
Vue.prototype.$moment = moment
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
