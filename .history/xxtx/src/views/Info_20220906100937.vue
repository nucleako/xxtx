<template>
<div>
    <Header ></Header>
    <div id="info_con">
        <div class="con">
            <h3>{{yx_info.tittle}}</h3>
            <p>
                <!-- 类目：{{yx_info.category.name}} -->
                时间：{{getDate(yx_info.publishTime)}}
            </p>
          <el-image class="left_img" :src="yx_info.cover" :fit="fit" />

            <div v-html="yx_info.content"></div>
        </div>
    </div>
</div>
</template>

<script>
import {get} from'../utils/axios'
import Header from '@/components/Header.vue'
import moment from 'moment'
export default{
  components: {
    Header
  },
    data() {
        return {
           yx_info:{}       //保存获取id对应游戏资讯 
        }
    },
    methods: {
        
    },
    created(){
        var id = this.$route.params.id
        get('/index/article/findById',{id}).then((res)=>{
            console.log(res);
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
img{
    width: auto;  
    height: auto;  
    max-width: 100%;  
    max-height: 100%; 
    min-width: 500px;
}
/* img{
    height: 100%;
    width: 100%;
} */
#info_con{
    line-height: 40px;
    text-align: center;
    padding: 30px 10px;
}
</style>