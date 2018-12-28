<template>
  <div class="hello">
    <h1>HelloWorld</h1>
    <p>{{msg}}</p>
    <!-- 这里通过路由传递的参数-->
    {{$route.params.worldParam}}
    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld ',
  data () {
    return {
      msg: 'Welcome to Your HelloWorld'
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
