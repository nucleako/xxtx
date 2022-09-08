<template>
    <div>
    <baidu-map class="bm-view" ak="5MpyMYtKfdB2Z1k6E0U18DoxECNW5zZb" center="西安">
    </baidu-map>
    </div>
</template>

<script>
    import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

    export default{
        components:{
            BaiduMap
        }
    }
</script>

<style>
    .bm-view {
      width: 100%;
      height: 300px;
    }
</style>