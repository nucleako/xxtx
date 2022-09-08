<template>
    <div id="map" style="width:800px;height: 500px;"></div>
  </template>
  
  <script>
  import Highcharts from 'highcharts/highstock';
  import Highmaps from 'highcharts/modules/map'
  Highmaps(Highcharts);
  import china from '../utils/china'
  export default{
    data() {
        return {
            map_data:[{"name":"北京","value":37},{"name":"天津","value":98},{"name":"河北","value":73},{"name":"山西","value":42},{"name":"内蒙古","value":34},{"name":"辽宁","value":100},{"name":"吉林","value":26},{"name":"黑龙江","value":14},{"name":"上海","value":46},{"name":"江苏","value":96},{"name":"浙江","value":65},{"name":"安徽","value":79},{"name":"福建","value":46},{"name":"江西","value":75},{"name":"山东","value":32},{"name":"河南","value":95},{"name":"湖北","value":14},{"name":"湖南","value":66},{"name":"广东","value":19},{"name":"广西","value":67},{"name":"海南","value":91},{"name":"重庆","value":11},{"name":"四川","value":57},{"name":"贵州","value":47},{"name":"云南","value":66},{"name":"西藏","value":27},{"name":"陕西","value":23},{"name":"甘肃","value":56},{"name":"青海","value":40},{"name":"宁夏","value":97},{"name":"新疆","value":96},{"name":"台湾","value":9},{"name":"香港","value":97},{"name":"澳门","value":72},{"name":"南海诸岛","value":100},{"name":"南海诸岛","value":23}]
        }
    },
    methods: {
        getmap(){
            new Highcharts.Map('map', {
                title: {
                    text: '中国地图'
                },
                colorAxis: {
                    min: 0,
                    minColor: 'rgb(255,255,255)',
                    maxColor: '#006cee'
                },
                series: [{
                    data: this.map_data,
                    name: '随机数据',
                    mapData: china,
                    joinBy: 'name' // 根据 name 属性进行关联
                }]
            })
        }
    }, 
    mounted() {
        this.getmap()
    }
  }     
  
  </script>