<template>
<div>
    <Header ></Header>
    <div id="info_con">
        <div class="row">
          <div class="c"></div>
          <div id="top_menu">
            <a href="">首页</a>&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;
            <a href="">{{yx_info.category.name}}</a>&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;
            <p>{{yx_info.title}}</p>
          </div>
          <div class="row_left">
            <el-image class="left_img" :src="yx_info.cover" :fit="fit" /> 
              <h3 style="text-align: center">{{yx_info.title}}</h3>
              <p style="float:right;">
                  类目：{{yx_info.category.name}}
                  时间：{{getDate(yx_info.publishTime)}}
              </p>
              <div class="c"></div>
                <div v-html="yx_info.content">
                </div>
            </div>
            <div class="row_right" style="line-height:31px;">
              <div class="">
                  <p>更多{{data_list[1][0].category.name}}：</p>
                <div v-for="item in data_list[0]" :key="item">
                  <p >⚪{{item.title}}</p>
                </div>
              </div>            
              <div class="">
                <div v-for="item in data_list[1]" :key="item">
                  <p >⚪{{item.title}}</p>
                </div>
              </div>  
          </div>  
        </div>
    </div>
</div>
<Footer></Footer> 
</template>

<script>
import {get} from'../utils/axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import moment from 'moment'
export default{
  components: {
    Footer,
    Header
  },
    data() {
        return {
           yx_info:{},       //保存获取id对应游戏资讯 
           data_list:[[],[],[]], //游戏资讯的数组
        }
    },
    methods: {
      getinfo(s){  //获取资讯
               //两个参数：url，参数对象
            get('/index/article/pageQuery',s).then((res)=>{
              console.log(res);
              this.data_list[s.categoryId-8] = res.data.list
              console.log(this.data_list[s.categoryId-8]);
            })
          },
        },

    created(){
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
        var id = this.$route.params.id
        get('/index/article/findById',{id}).then((res)=>{
            // console.log(res);
            this.yx_info = res.data
        })
    },    
    computed:{
      getDate(){
        return function (time) {
          return moment(time).format('YYYY年MM月DD日 hh:mm:ss')
        }
      },
    },
}
</script>

<style>

/* img{
    width: auto;  
    height: auto;  
    max-width: 100%;  
    max-height: 100%; 
    min-width: 500px;
} */
#top_menu{
  font-size: 14px;
}
#top_menu a{
  font-size: 14px;
  color: rgb(202, 136, 70);
  display: inline-block;
}
#top_menu p{
  display: inline-block;
}
img{
    height: 100%;
    width: 100%;
}
#info_con{
    line-height: 40px;
    padding: 30px 10px;
}
.row{
  width: 1140px;
  margin: 0 auto;
}
.row_left{
  width: 735px;
  display: inline-block;
}
.row_right{
  padding: 11px;
  width: 300px;
  /* height: 1000px; */
  overflow: auto;
  display: inline-block;
  float:right;
}

</style>