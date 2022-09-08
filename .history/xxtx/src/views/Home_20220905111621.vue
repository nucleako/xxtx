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
        'https://img95.699pic.com/photo/50073/5898.jpg_wh860.jpg',
        'https://img95.699pic.com/photo/50072/0616.jpg_wh860.jpg',
        'https://ts1.cn.mm.bing.net/th/id/R-C.c8e8f567924b300592abdf92ec9825ba?rik=SLrpXLkWjx%2bbbQ&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50086%2f1519.jpg_wh860.jpg&ehk=%2fvtxn3fT%2b1LJNx4XEPsDIqQo4LzcjbwsIBX0FTdeIY0%3d&risl=&pid=ImgRaw&r=0'
      
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
<style scoped>
  .el-carousel{
    width: 100%;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>