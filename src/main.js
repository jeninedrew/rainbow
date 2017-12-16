// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// vue-resource is needed too 
import VueResource from 'vue-resource'
Vue.use(VueResource)

// import vue-github-api 
import GitHubAPI from 'vue-github-api'
Vue.use(GitHubAPI, { token: '1a9d07b740e0a7d5c268dc117022bd3cd52f885c' })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
