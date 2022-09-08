<template>
<Header />
<router-view/>

  <div class="bigshow">
    <div class="row">
      <div class="swiper">
        <img src="" alt="" class="bigImg">
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
home_bigImg=[]
swiper=document.getElementsByClassName(swiper)
window.onload =function () {
  setTimeout((i=0) => {
    swiper.src=home_bigImg[i+1]
}, 2000);
}

import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
<style>

.swiper{
  width: 100%;
  height: 360px;
}
</style>