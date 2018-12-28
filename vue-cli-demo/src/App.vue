<template>
  <div id="app">
    <router-view></router-view>
    <!--<img src="./assets/logo.png">-->
    全局状态值 <br>
    {{this.$store.getters.getNum}}
    <br>
    <button @click="changeGobal">通过mucations改变全局状态值</button>
    <br>
    <button @click="reduceGlobal">通过actions改变全局状态值</button>
    <list></list>
  </div>
</template>

<script>
import list from './components/List'
import Axios from 'axios'
import Vue from 'vue'
Vue.prototype.$http = Axios //将数据请求axios挂载到Vue原型上，可以全局调用(这里的 $http 可以随便命名)

export default {
  name: 'App',
  components: {
    list
  },
  methods:{
    changeGobal:function () {

      //通过Vuex的 mutation 进行数据操作
      this.$store.commit('addNum')

    },
    reduceGlobal(){

      //通过Vuex的 actins 进行数据操作
      this.$store.dispatch('reducenumAction')

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
