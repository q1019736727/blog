// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import rt from './router/index'
// import router from 'vue-router'
import helloworld from './components/HelloWorld'

Vue.config.productionTip = false
// Vue.use(router)

// let rt = new router({
//   routes:[{
//     path:'/hello',
//     component: helloworld
//   }]
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: rt,
  components: { App },
  template: '<App/>'
})
