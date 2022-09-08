<template>
<Header />
<router-view/>

  <div class="bigshow">
    <div class="row">
      <div class="swiper">
        <img src="" alt="" class="bigImg">
        <button>&lt;</button>
        <button>&gt;</button>
        
        <div class="block text-center" m="t-4">
    <span class="demonstration">Switch when indicator is clicked</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
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
    Header,
    data:function(){
    return {
        carousel_arr:[
          '',
          '',
          ''  //轮播图位
        ]
     }
    }
  }
}
</script>
<style>

.swiper{
  width: 100%;
  height: 360px;
}
</style>