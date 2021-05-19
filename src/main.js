import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/**
 * @vue/composition-api
 * uni-composition-api
 */
import VueCompositionAPI from '@vue/composition-api'
import UniCompositionAPI from 'uni-composition-api'
Vue.use(VueCompositionAPI)
Vue.use(UniCompositionAPI)

/**
 * uview-ui
 */
import uView from 'uview-ui'
Vue.use(uView)

App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
