import Vue from 'vue'
import App from './App'
import { all } from 'vue-client'

all()

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
