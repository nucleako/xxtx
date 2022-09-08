<template>
  <div class="home">
    <div id="header">
      <h1 class="">大标题</h1>
      <h1>大标题</h1>
      <a href="">关于</a>
      <a href="">联系我们</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style>
  #header{
    height: 60px;
    color: aqua;
    font: 400;
    /* display: inline-block; */
    height: 80px;
    background-color: rgb(164, 164, 164);
  }
  #header h1{
    float: left;
    height: 80px;
    font-size: 30px;
    margin-left: 10px;
    margin-top: 15px;
  }
  #header a{
    float: right;
    font-size: 20px;
    margin-right: 15px;
    color: aquamarine;
    margin: auto 0;
  }
</style>