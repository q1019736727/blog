
import Vue from 'vue'
import router from 'vue-router'
import helloworld from '../components/HelloWorld'
import helloearth from  '../components/HelloEarth'

Vue.use(router)

export default new router({
  routes:[
      {
        name: 'helloworld', //定义name路由可以拿name跳转(路由传递参数这个必须写)
        path:'/helloworld/:worldParam',//跳转路径(可以通过路由传递参数)
        component: helloworld//跳转组件
      },
      {
        name: 'helloearth',
        path:'/helloearth/:earthParam',
        component:helloearth
      }
  ]
})
