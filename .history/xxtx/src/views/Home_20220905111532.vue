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

  <div class="yxzx">
    <div class="con">
      <h3></h3>
      <div class="yxzx_con">
        <div class="yxzx_con_item">
          <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
          <div class="yxzx_con_item_r">
            <h4></h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
<router-view/>

  <!-- <div class="bigshow">
    <div class="row">
      <div class="swiper">
        <img src="" alt="" class="bigImg">
        <button>&lt;</button>
        <button>&gt;</button>
        
        
      </div>
    </div>
  </div> -->

</template>

<script>
// @ is an alias to /src


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