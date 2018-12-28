<template>
  <div class="hello">
    <h1>HelloWorld</h1>
    <p>{{msg}}</p>
    <!-- 这里通过路由传递的参数-->
    {{$route.params.worldParam}}
    <button @click="getData">获取数据</button>
    <ul>
      <li v-for="item in titleArray">{{item.title}}</li>
    </ul>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your HelloWorld',
      titleArray:[]
    }
  },
  methods:{
    getData:function () {
      this.$http.get('https://cnodejs.org/api/v1/topics',{
        page:1,
        limit:10
      })
        .then((respponse)=>{
          this.titleArray = respponse.data.data
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  color: red;
}
</style>
