import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

require('../filenames.js').forEach((filename) => require(`./assets/css/${filename}.scss`))