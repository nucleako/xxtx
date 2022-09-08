<template>
  <div id="footer">
    <div class="con">
      <div class="footer_center">   
        <div >
          <p class='contactSign'>IF U WANNA CONTACT US:</p>
          <el-dropdown>
            <div class="cir el-dropdown-link" style="margin-left: 300px;"><div class="wechat_icon"></div></div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>      
                  <div class="wechatImg">
                    <img src="http://43.143.93.202/wechatcode" style="width:100%;height: 100%;" alt="">   
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>          
          <el-dropdown>
            <div class="cir el-dropdown-link" ><div class="link_icon"></div></div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>      
                  <div class="wechatImg">
                    <img src="http://43.143.93.202/wechatcode" style="width:100%;height: 100%;" alt="">   
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>          
          <el-dropdown>
            <div class="cir el-dropdown-link" ><div class="weibo_icon"></div></div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>      
                  <div class="wechatImg">
                    <img src="http://43.143.93.202/wechatcode" style="width:100%;height: 100%;" alt="">   
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div style="height: 55px;"></div>
        <p>
          <a href="../views/ContactUs.vue">关于 </a>|
          <a href=""> About Us </a>|
          <a href=""> 服务条款 </a>|
          <a href=""> 用户服务协议</a>|
          <a href=""> 隐私政策 </a>|
          <a href=""> 儿童隐私保护声明 </a>|
          <a href=""> 广告服务 </a>|
          <a href=""> 招贤纳士 </a>|
          <a href=""> 客服中心 </a>|
          <a href=""> 网站导航</a>
      </p>
      <p>
        <a href="">粤网文[2017]6138-1456号 </a>|
        <a href=""> 新出网证（粤）字010号 </a>|
        <a href=""> 备案号：粤B2-20090059 </a>
      </p>
      <p>COPYRIGHT © 1998 - 2019 TENCENT. ALL RIGHTS RESERVED.</p>
      <p>@nkkkkk</p>
      
    </div>
    </div>
  </div>
</template>


<style scoped>
#footer{
  background-color: #8f8f8f;
  font-size: 14px;
  height: 400px;
}
#footer p{
  display: block;
  text-align: center;
  color: #5d5d5d;
  margin: 5px 0;
}
#footer p a{
 text-decoration: none;
 color: #5d5d5d;
}
#footer p a:hover{
  color: #e1cece;
}
#footer i{
  width: 50px;
  height: 50px;
}
#footer .wechat_icon{    
    width: 31px;
    height: 25px;
    background-image: url(//mcdn.gtimg.com/bbcdn/gouhuo/website/img/2c79a1a.png);
    background-position: 0 -25px;
    left: 12px;
    position: relative;
    top: 14px;
  }
#footer .link_icon{    
    width: 41px;
    height: 41px;
    background-image: url(//mcdn.gtimg.com/bbcdn/gouhuo/website/img/2c79a1a.png);
    background-position: 0 -50px;
    left: 6px;
    top: 6px;
    position: relative;
}
#footer .weibo_icon{
    width: 30px;
    height: 25px;
    background-image: url(//mcdn.gtimg.com/bbcdn/gouhuo/website/img/2c79a1a.png);
    background-position: 0 0;
    left: 12px;
    position: relative;
    top: 14px;
}
#footer .footer_center{
  margin: 0 auto;
  display: inline;
}
.cir{
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: #323232;
  display: inline-block;
  margin: 0 90px;
}
#footer .contactSign{
  font-size:24px;
  padding-top: 70px;
  margin-bottom: 35px;
}
.wechatImg{
  /* display: none; */
  height: 200px;
  width: 200px;
}
</style>
