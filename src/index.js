import Vue from 'vue'
import App from './App.vue'
import Box from './components/Box.vue'
import router from './router'

Vue.component('Box', Box)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})

require('../src/assets/css/index.scss')