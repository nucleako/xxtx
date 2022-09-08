<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   <Header/>

   <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in carousle_arr" :key="item">
      <el-image style="width: 100%; height: 100%" :src="item" />
    </el-carousel-item>
  </el-carousel>
  
  <div id="help">
    <div class="con">
      <div>
        <h3>公益资讯</h3>
        <div id="help_con">
          <div class="help_con_item">
            <el-image style="width: 300px; height: 200px" :src="url" />
            <div class="help_con_item_right">
              <h4>医保个人账户不再取现，意味着什么</h4>
              <p>1张晓明</p>
              <p>公益</p>
              <p>2022-09-05</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  },
  data:function(){
    return{
      carousle_arr:[
        'https://img95.699pic.com/photo/50073/5898.jpg_wh860.jpg',
        'https://img95.699pic.com/photo/50072/0616.jpg_wh860.jpg',
        'https://ts1.cn.mm.bing.net/th/id/R-C.c8e8f567924b300592abdf92ec9825ba?rik=SLrpXLkWjx%2bbbQ&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50086%2f1519.jpg_wh860.jpg&ehk=%2fvtxn3fT%2b1LJNx4XEPsDIqQo4LzcjbwsIBX0FTdeIY0%3d&risl=&pid=ImgRaw&r=0'
      ]
    }
  }
}
</script>
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
  #help_con{
    width: 600px;
    margin-left: 2px;
  }
 #help .help_con_item_right{
  float: right;
  }
  #help_con .el-image{
    float: left;
  }
</style>
