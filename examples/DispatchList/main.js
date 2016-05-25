import Vue from 'vue'
import App from './App'
import { all } from 'vue-client'

import Init from './Init'
import Test from './Test'

all()
require('../../src/bootstrap/less/bootstrap.less')

Vue.component('init', Init)
Vue.component('test', Test)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
