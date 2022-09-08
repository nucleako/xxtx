<template>
    <div id="Header">
      <div class="row">
        <h1 class=""><a href="http://172.16.8.92:8080/">主页</a></h1>
        <h1 class=""><a href="http://172.16.8.92:8080/">主页</a></h1>
        <h1 class=""><a href="http://172.16.8.92:8080/">主页</a></h1>
        <h1 class=""><a href="http://172.16.8.92:8080/">主页</a></h1>

        <a href="http://172.16.8.92:8080/#/about">关于</a>
        <a href="">联系我们</a>
        <div id="nav">
          <!-- <router-link href="">111111</router-link>
          <router-link >11111</router-link> -->
        </div>
      </div>
    </div>
  </template>


<style>
  #Header{
    height: 60px;
    color: aqua;
    font: 300;
    /* display: inline-block; */
    height: 60px;
    background-color: #ccc;
  }
  .row{
    width: 1140px;
    margin: 0 auto ;
  }
  #Header h1{
    float: left;
    height: 80px;
    font-size: 20px;
    margin-left: 10px;
    margin-top: 15px;
  }
  #Header a{
    float: right;
    
    margin-top: 15px;
    color: aquamarine;
    margin: auto 0;
  }
  #Header a[float=left]{
    font-size: 20px;
    margin-right: 15px;
  }

</style>
