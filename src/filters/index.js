import Vue from 'vue'
import moment from 'moment'

Vue.filter('date', function (value) {
  if (value) {
    return moment(value).format('MM/DD/YYYY hh:mm')
  }
})
