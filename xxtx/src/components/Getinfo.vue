
<script>
    import {get} from'../utils/axios'
    export default {
        data:function(){
          return {
            data_list:[], //游戏资讯的数组
          }
        },
        methods:{
          getinfo(){  //获取资讯
            var s = {
              page :1,
              pageSize:8,
              categoryId:8
            }
               //两个参数：url，参数对象
            get('/index/article/pageQuery',s).then((res)=>{
              console.log(res);
              this.data_list = res.data.list
            })
          },
        },
        created() {   //一般获取数据都在实例创建之后进行 生命周期函数
          this.getinfo()
        },
    }
    </script>