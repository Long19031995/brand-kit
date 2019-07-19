import Vue from 'vue'
import App from './App.vue'
import Box from './components/Box.vue'
import Tab from './components/Tab.vue'
import router from './router'

Vue.component('Box', Box)
Vue.component('Tab', Tab)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})

require('../src/assets/css/index.scss')