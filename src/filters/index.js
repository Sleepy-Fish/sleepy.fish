import Vue from 'vue'
import moment from 'moment'

Vue.filter('date', function (value) {
  if (value) {
    return moment(value).format('MM/DD/YYYY')
  }
})

Vue.filter('classify', function (value) {
  if (typeof value === 'string') {
    return value.toLowerCase().trim().replace(/\s/g, '-')
  }
})
