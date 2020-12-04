import Vue from 'vue'
import { filterNumber } from '@/filters/index'

import components from '@/utils/components.js'
Vue.use(components)

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import yongzhou from '@/assets/city/431100.json'
echarts.registerMap('永州市', yongzhou)

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/assets/font-awesome-4.7.0/css/font-awesome.css'
import '@/assets/iconfont/iconfont.css'

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon

import { handleConfirm, msgSuccess, msgError } from './utils/message'
Vue.prototype.$msgSuccess = msgSuccess
Vue.prototype.$msgError = msgError
Vue.prototype.$msgConfirm = handleConfirm
Vue.prototype.$msgInfo = function(msg) {
  this.$message.info(msg)
}
Vue.use(Element, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})

Vue.config.productionTip = false

Vue.filter('filterNumber', filterNumber)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
