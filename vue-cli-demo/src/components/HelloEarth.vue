<template>
  <div class="hello">
    <h1>HelloEarth</h1>
    <p>{{msg}}</p>
    {{$route.params.earthParam}}
    <hr>
  </div>
</template>

<script>
  export default {
    name: 'HelloEarth',//唯一标识,出错的时候好找到
    data () {
      return {
        msg: 'Welcome to Your HelloEarth'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div{
    color: blue;
  }
</style>
