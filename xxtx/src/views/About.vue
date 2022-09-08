<template>
  <Header />
  <router-view/>
      <div>
        <div>
          <el-carousel-item v-for="item in carousle_arr" :key="item" style="width: 100%; height: 500px">
            <el-image style="width: 100%; height: 500px" :src="item" />
          </el-carousel-item>
        </div>
      </div>
<Footer></Footer> 

  </template>
  
  <script>
  // @ is an alias to /src
  
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  
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
      }
    },
  }
  </script>
  <style>
  
  </style>



  