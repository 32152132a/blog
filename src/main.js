import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './lib/config/config.js'
import Axios from 'axios';
import echarts from 'echarts'
import echartswordcloud from 'echarts-wordcloud'
 //增加全局属性，在其他vue文件中，可以通过this.$echarts引用
 Vue.prototype.$echarts = echarts; 
Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = '//www.96qufei.cn/api'
// Axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.use(config)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)



// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')