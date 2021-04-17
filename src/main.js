import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//mint-ui配置
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUI)

//axios配置
import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:3000"
Vue.prototype.axios=axios

//moment配置
import Moment from "moment"
Vue.prototype.moment=Moment

//echarts配置
import Echarts from "echarts"
Vue.prototype.echarts=Echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
