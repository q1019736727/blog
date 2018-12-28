
import Vue from 'vue'
import App from './App'
import rt from './router/index'
import store from './state/index'


// 下面是main.js中写router的例子
// import router from 'vue-router'
// import helloworld from './components/HelloWorld'
// Vue.use(router)
// let rt = new router({
//   routes:[{
//     path:'/hello',
//     component: helloworld
//   }]
// })


// //这儿是直接在main.js写vuex的例子
// Vue.use(Vuex)
// //vuex状态管理
// ///创建状态仓库，注意Store,state不能改
// //直接通过this.$sore.state.XXX拿到全局状态
// var store = new Vuex.Store({
//   state:{
//     num:100
//   }
// })

Vue.config.productionTip = false



new Vue({
  el: '#app',
  router: rt, //在ES6语法中如果这里的键和值一样,键就可以不写,直接写router
  store,
  components: { App },
  template: '<App/>'
})
