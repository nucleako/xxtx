<template>

<div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   <Header ></Header>
   <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in carousle_arr" :key="item">
      <el-image style="width: 100%; height: 100%" :src="item" />
    </el-carousel-item>
  </el-carousel>
  </div>
</div>
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