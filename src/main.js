import Vue from 'vue'
import App from './App'
import { all } from 'vue-client'

all()
require('./bootstrap/less/bootstrap.less')

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
