<template>
  <div class="home">
    <div id="header">
      <h1>大标题</h1>
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
    height: 80px;
    color: aqua;
    font: 400;
    /* display: inline-block; */
    height: 80px;
    background-color: rgb(164, 164, 164);
  }

</style>