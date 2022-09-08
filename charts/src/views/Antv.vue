<template>
    <div id="container" style="width:1200px;height: 500px;">
        
    </div>
</template>
<script>
import { Line } from '@antv/g2plot';

export default{    
    data(){
        return {
            line_data : [
            { year: '1991', value: 3 },
            { year: '1992', value: 4 },
            { year: '1993', value: 3.5 },
            { year: '1994', value: 5 },
            { year: '1995', value: 4.9 },
            { year: '1996', value: 6 },
            { year: '1997', value: 7 },
            { year: '1998', value: 9 },
            { year: '1999', value: 13 },
            ]
        }
    },
    methods: {
        getline(){
            const line = new Line('container', {
            data:this.line_data,
            xField: 'year',
            yField: 'value',
            });
            //渲染
            line.render();
        }
    },
    mounted() {
        this.getline()
    },
}
</script>