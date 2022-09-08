<template>

<div class="home">

   <Header></Header>

   <div class="row">
    <el-icon :size="size" :color="color">
      <Edit />
    </el-icon>
    <el-carousel :interval="5000" arrow="" type="" direction="vertical"  >
      <el-carousel-item v-for="item in carousle_arr" :key="item" style="width: 100%; height: 500px">
        <el-image style="width: 100%; height: 500px" :src="item" />
      </el-carousel-item>
    </el-carousel>
  </div>
 

  <div id="yxzx" style="border-top:  1px solid #f1f1f1;">
    <div class="con">
      <h2 >热点聚焦</h2>
      <div id="yxzx_con">
        <div class="yxzx_con_item" 
        @click="goinfo(item.id)"
        v-for="item in data_list[0]" :key="item">
          
          <el-image class="left_img" style="width: 345px; height: 170px" :src="item.cover" :fit="fit" />
          
          <div class="yxzx_con_item_r" style="height: 10em;overflow: hidden;">
            <h4 >{{item.title}}</h4>
            <p style="line-height: 1.5em;">时间：{{getDate(item.publishTime)}}</p>
            <p  style="line-height: 1.5em;">作者：齋藤モゲ  2天前</p>
            <p  style="line-height: 1.5em;">简介：{{getContent(item.content)}}</p >          
          </div> 
        </div>
      </div>
    </div>
  </div>


  <div id="recommend">
    <div class="row">
      <h2>销量安利</h2>
      <div style="border-top:  1px solid #ccc;"></div>
      <div class="bigblock">
        <img src="https://www.3dmgame.com/uploads/images/thumbpicfirst/20210629/1624932642_309028.jpg" >
      </div>
      <div class="smallblock">
        <img src="https://cdn.max-c.com/heybox/game/header/1262580_hs5Rv.jpg" alt="">
      </div>
      <div class="smallblock">
        <img src="https://cdn.max-c.com/heybox/game/header/1293830_MYqmW.jpg" alt="">
      </div>
      <div class="smallblock">
        <img src="https://cdn.max-c.com/heybox/game/header/1237970_bKETW.jpg" alt="">
      </div>
      <div class="smallblock">
        <img src="https://cdn.max-c.com/heybox/game/header/289070_IZNMD.jpg" alt="">
      </div>
      <h3 style="font-size:22px;top:-50px;left:600px;">极限竞速：地平线5</h3>
      <h3 style="top:-200px;left:-180px;">极品飞车20：复仇</h3>
      <h3 style="top:-200px;left:-47px;">极限竞速：地平线4</h3>
      <h3 style="top:-40px;left:-494px;">泰坦陨落2</h3>
      <h3 style="top:-36px;left:-291px;">文明6</h3>
    </div>
  </div>

  <div id="yxzx" style="border-top:  1px solid #f1f1f1;">
    <div class="con">
      <h2 >热点聚焦</h2>
      <div id="yxzx_con">
        <div class="yxzx_con_item" 
        @click="goinfo(item.id)"
        v-for="item in data_list[1]" :key="item">
          
          <el-image class="left_img" style="width: 345px; height: 170px" :src="item.cover" :fit="fit" />
          
          <div class="yxzx_con_item_r" style="height: 10em;overflow: hidden;">
            <h4 >{{item.title}}</h4>
            <p style="line-height: 1.5em;">时间：{{getDate(item.publishTime)}}</p>
            <p  style="line-height: 1.5em;">作者：齋藤モゲ  2天前</p>
            <p  style="line-height: 1.5em;">简介：{{getContent(item.content)}}</p >          
          </div> 
        </div>
      </div>
    </div>
  </div>
</div>

<Footer></Footer> 

<router-view/>
</template>

<script>
// @ is an alias to /src

// import { Delete, Edit} from '@element-plus/icons-vue'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import {get} from'../utils/axios'
import moment from 'moment'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
  },
    data:function(){
      return {
        carousle_arr:[    //大轮播图数组
          'https://p.qpic.cn/mwegame/0/797893da21b053b9327d6ac001706c13/',
          'https://p.qpic.cn/mwegame/0/a8bc64b986c88f5feb53be0cab832f90/',
          'https://p.qpic.cn/mwegame/0/761165725c09ac460b3253807722532b/'
        ],
        data_list:[[],[],[]], //游戏资讯的数组
      }
    },
    methods:{
      getinfo(s){  //获取资讯
               //两个参数：url，参数对象
        get('/index/article/pageQuery',s).then((res)=>{
          console.log(res);
          this.data_list[s.categoryId-8] = res.data.list
           console.log(this.data_list[s.categoryId-8]);
        })
      },    
    goinfo(id){
      this.$router.push('/info/'+id)
    },    
    getContent(str){
        var s = ""
        var result = str.match(/[\u4e00-\u9fa5]{1,100}/g); 
        //必须得序列化反序列化
        s += result
        return s.split(',').join("")
    },
    show () {
      // $('wechatImg').css("display:block")
      //  var a2 = document.getElementsByClassName('wechatImg')
      // a2.style.display = 'block'
      // console.log(wechatImg);
    }
    },

    created() {   //一般获取数据都在实例创建之后进行 生命周期函数
      var s = {
              page :1,
              pageSize:8,
              categoryId:8
            }
      this.getinfo(s,s.categoryId)      
      var s1 = {
              page :1,
              pageSize:5,
              categoryId:9
            }
      this.getinfo(s1,s1.categoryId)     
    },
    computed:{
      getDate(){
        return function (time) {
          return moment(time).format('YYYY年MM月DD日 hh:mm:ss')
        }
      },
    }
}


</script>
<style>
body{
  background-color: #f1f1f1;
}
h2{
    line-height: 60px;
    margin-left: 10px;
}
.el-carousel-item h2{
  color: #475669;
  line-height: 300px;
  text-align: center;
  opacity: 0.75;
}

#yxzx_con{
  border-top:  1px solid #ccc;
  padding: 10px 0;
}
#yxzx_con::after{
  display: block;
  content: '';
  clear: both;
}
#yxzx_con p{
  line-height: 20px;
}
#yxzx_con h4{
  line-height: 40px;
}
.left_img{
  float: left;
  margin-right: 15px;
}
.yxzx_con_item{
  margin:10px 0 25px 0 ;
  cursor: pointer;
}

.con{
  width: 1140px;
  margin: 0 auto;
}
#recommend .bigblock{
  height: 300px;
  width: 556px;
  float: right;
  margin-top: 14px;
  background-color: #475669;
}
#recommend .smallblock{
  height: 143px;
  width: 277px;
  margin-right: 15px;
  background-color: aqua;
  display: inline-block;
  margin-top: 14px;
}

#recommend h3{
  color: white;
  position: relative;
  display: inline-block;
}
</style>
<style scoped>
  .el-carousel{
    width: 100%;
    height: 500px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .yxzx_con_item:after{
   content: '';
   display: block;
   visibility: hidden;
   clear: both;
  } 
img{
    width: auto;  
    height: auto;  
    max-width: 100%;  
    max-height: 100%; 
    width: 100%;
    height: 100%;
}


</style>