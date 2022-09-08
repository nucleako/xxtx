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
      <h3 class="small_tittle">游戏资讯</h3>
      <div class="yxzx_con">
        <div class="yxzx_con_item">
          <el-image style="width: 375px; height: 150px" :src="'https://p.qpic.cn/mwegame/0/8720862d6694642b26a4eec47e56bbe3/'" :fit="fit" />
          <div class="yxzx_con_item_r">
            <h4>《神领编年史》试玩版 Fami 通评测：站在前辈们肩膀上的经典 SRPG</h4>
            <p class="yxzx_con_item_uther">作者：齋藤モゲ  2天前</p>
            <p class="yxzx_con_item_text">Square Enix 开发的多平台 SRPG 完全新作《神领编年史》预计将于 2022 年 9 月 22 日登陆 NS/PS5/PS4/XSX/Xbox One/PC（Steam）平台。目前本作的试玩版已经在全平台上线（Steam 版 8 月 11 日推出）。下文将为大家带来笔者抢先体验了本作 Steam 试玩版之后的评测内容。由于试玩版的存档能够直接继承到正式版中，因此感兴趣的玩家大可趁此机会亲自上手感受感受。</p>
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
    Header
  },
    data:function(){
    return {
      carousle_arr:[
        'https://img95.699pic.com/photo/50073/5898.jpg_wh860.jpg',
        'https://img95.699pic.com/photo/50072/0616.jpg_wh860.jpg',
        'https://ts1.cn.mm.bing.net/th/id/R-C.c8e8f567924b300592abdf92ec9825ba?rik=SLrpXLkWjx%2bbbQ&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50086%2f1519.jpg_wh860.jpg&ehk=%2fvtxn3fT%2b1LJNx4XEPsDIqQo4LzcjbwsIBX0FTdeIY0%3d&risl=&pid=ImgRaw&r=0'
        ]
     }
    }
  }

</script>
<style>
.small_tittle{
    line-height: 80px;
  }
#yxzx_con{
border-top:  1px solid #f1f1f1;
padding: 10px 0;
}
#yxzx_con el-img{
  float: left;
}

.con{
  width: 1140px;
  margin: 0 auto;
}
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