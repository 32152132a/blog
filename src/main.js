import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './lib/config/config.js'
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
