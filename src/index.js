import './pixels'
import Vue from 'vue'
import router from './router'
import './filters'
import App from './App'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'mustard-ui/src/scss/mustard-ui.scss'
import 'static/style/overrides.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
