import './pixels'
import Vue from 'vue'
import router from './router'
import App from './App'

import 'mustard-ui/src/scss/mustard-ui.scss'
import 'static/style/overrides.scss'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
