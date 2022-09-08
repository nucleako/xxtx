<template>
  <div class="home">
    <div id="head">
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
  #head{
    height: 80px;
    
  }
</style>