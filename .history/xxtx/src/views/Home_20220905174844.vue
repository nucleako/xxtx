<template>

<div class="home">
   <Header ></Header>
   <div class="row">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in carousle_arr" :key="item">
        <el-image style="width: 100%; height: 100%" :src="item" />
      </el-carousel-item>
    </el-carousel>
  </div>
 

  <div id="yxzx" style="border-top:  1px solid #f1f1f1;">
    <div class="con">
      <h3 >游戏资讯</h3>
      <div id="yxzx_con">
        <div class="yxzx_con_item" v-for="item in data_list" :key="item">
          
          <el-image class="left_img" style="width: 375px; height: 150px" :src="item.cover" :fit="fit" />
          
          <div class="yxzx_con_item_r">
            <p class="yxzx_con_item_uther">{{item.title}}</p>
            <p class="yxzx_con_item_uther">时间：{{getDate(item.publishTime)}}</p>
            <p class="yxzx_con_item_uther">作者：齋藤モゲ  2天前</p>
            <!-- <p class="yxzx_con_item_text">简介：{{item.content}}</p> -->
          </div> 
        </div>
      </div>

      <!-- <div class="yxzx_con">
        <div class="yxzx_con_item">
          <el-image class="left_img" style="width: 375px; height: 150px" :src="'https://p.qpic.cn/mwegame/0/8720862d6694642b26a4eec47e56bbe3/'" :fit="fit" />
          <div class="yxzx_con_item_r">
            <h4>《神领编年史》试玩版 Fami 通评测：站在前辈们肩膀上的经典 SRPG</h4>
            <p class="yxzx_con_item_uther">作者：齋藤モゲ  2天前</p>
            <p class="yxzx_con_item_text">Square Enix 开发的多平台 SRPG 完全新作《神领编年史》预计将于 2022 年 9 月 22 日登陆 NS/PS5/PS4/XSX/Xbox One/PC（Steam）平台。目前本作的试玩版已经在全平台上线（Steam 版 8 月 11 日推出）。下文将为大家带来笔者抢先体验了本作 Steam 试玩版之后的评测内容。由于试玩版的存档能够直接继承到正式版中，因此感兴趣的玩家大可趁此机会亲自上手感受感受。</p>
          </div>
        </div>
      </div> 

      <div class="yxzx_con">
        <div class="yxzx_con_item">
          <el-image class="left_img" style="width: 375px; height: 150px" :src="'https://p.qpic.cn/mwegame/0/8720862d6694642b26a4eec47e56bbe3/'" :fit="fit" />
          <div class="yxzx_con_item_r">
            <h4>《神领编年史》试玩版 Fami 通评测：站在前辈们肩膀上的经典 SRPG</h4>
            <p class="yxzx_con_item_uther">作者：齋藤モゲ  2天前</p>
            <p class="yxzx_con_item_text">Square Enix 开发的多平台 SRPG 完全新作《神领编年史》预计将于 2022 年 9 月 22 日登陆 NS/PS5/PS4/XSX/Xbox One/PC（Steam）平台。目前本作的试玩版已经在全平台上线（Steam 版 8 月 11 日推出）。下文将为大家带来笔者抢先体验了本作 Steam 试玩版之后的评测内容。由于试玩版的存档能够直接继承到正式版中，因此感兴趣的玩家大可趁此机会亲自上手感受感受。</p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
  </div>

<router-view/>


</template>

<script>
// @ is an alias to /src


import Header from '@/components/Header.vue'
import {get} from'../utils/axios'
import moment from 'moment'
export default {
  name: 'Home',
  components: {
    Header
  },
    data:function(){
      return {
        carousle_arr:[    //大轮播图数组
          'https://p.qpic.cn/mwegame/0/797893da21b053b9327d6ac001706c13/',
          'https://mcdn.gtimg.com/bbcdn/gouhuo/website/img/lazy-img.jpg',
          'https://p.qpic.cn/mwegame/0/761165725c09ac460b3253807722532b/'
        ],
          data_list:[], //游戏资讯的数组
      }
    },
    methods:{
      getinfo(){  //获取资讯
        var s = {
          page :1,
          pageSize:20,
          categoryId:8
        }
           //两个参数：url，参数对象
        get('/index/article/pageQuery',s).then((res)=>{
          console.log(res);
          this.data_list = res.data.list
        })
      }
    },
    created() {   //一般获取数据都在实例创建之后进行 生命周期函数
      this.getinfo()
    },
    computed:{
      getDate(){
        return function (time) {
          return moment(time).format('YYYY年MM月DD日 hh:mm:ss')
        }
      },
      // get4show(){      //获取简介
      //   return function(){

      //   }
      // }
    }
  }

</script>
<style>
.con h3{
    line-height: 60px;
    margin-left: 10px;
}
.el-carousel-item h3{
  color: #475669;
  line-height: 300px;
  text-align: center;
  opacity: 0.75;
}
.yxzx_con_item_r{
  /* float: right; */
  /* height: 150px; */
}
#yxzx_con{
  border-top:  1px solid #f1f1f1;
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
}

.con{
  width: 1140px;
  margin: 0 auto;
}

</style>
<style scoped>
  .el-carousel{
    width: 100%;
    height: 10000px;
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
</style>