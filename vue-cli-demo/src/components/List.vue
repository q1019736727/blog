<template>
  <div class="hello">
    <ul>
      <li>
        <!--<router-link to="/helloworld">Hello World</router-link>-->
        <!-- 这儿要注意,使用对象跳转to前面要加: -->
        <router-link :to="{name:'helloworld',params:{worldParam:'你好世界'}}">Hello World</router-link>
      </li>
      <li>
        <!--<router-link to="helloearth">Hello Earth</router-link>-->
        <router-link :to="{name:'helloearth',params:{earthParam:'你好地球'}}">Hello Earth</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'List',//唯一标识,出错的时候好找到
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
