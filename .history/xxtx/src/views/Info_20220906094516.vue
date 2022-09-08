<template>

</template>

<script>
import {get} from'../utils/axios'

export default{
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
    }
}
</script>

<style>

</style>