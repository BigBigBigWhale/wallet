<template>
    <div class="priceDetail">
        <top-nav-cpt></top-nav-cpt>
        <div class="priceDetail-top">
            <div>EOS 现价 <span class="greenColor">$1223.23 <span class="greenColor">￥344.3422</span></span></div>
            <div><div>涨幅&nbsp;&nbsp;&nbsp;&nbsp;<span class="greenColor">+3.23%</span></div><div>最高&nbsp;&nbsp;&nbsp;&nbsp;2525.2342</div></div>
            <div><div>成交量&nbsp;&nbsp;&nbsp;&nbsp;98754</div><div>最低&nbsp;&nbsp;&nbsp;&nbsp;2525.2342</div></div>
        </div>
        <div class="priceDetail-time">
            <span>15分</span><span>30分</span><span>1时</span><span>2时</span><span>4时</span>
        </div>
        <div class="priceDetail-echarts">
            <div id="echarts-a"  style="width: 100%;height: 6rem;"></div>
            <div class="priceDetail-echarts-text">MOUNTAIN TREND</div>
            <div id="echarts-b"  style="width: 100%;height: 6rem;"></div>
        </div>
        <div class="priceDetail-btn"><router-link to="/">买入</router-link><router-link to="/">卖出</router-link></div>
    </div>
</template>

<script>
import '../style/priceDetail.less'
import topNavCpt from '../components/topNavCpt'
import getUrlParam from '../components/getUrlParam'
let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');
export default{
    data: function () {
        return {

        }
    },
    components:{topNavCpt},
    methods:{
        createEcharts (id,colorState){
            let color = colorState?'#369f81':'#f2183d';
            let shadowColor = colorState?['#205066','#24334e']:['#611b42','#391f3c'];
            let myChart = echarts.init(document.getElementById(id));
            let option = {
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                title: {
                    show:false
                },
                toolbox: {
                    show:false
                },
                lineStyle:{
                    color: color,
                },
                itemStyle:{

                },
                xAxis: {
                    name:'KM',
                    type: 'category',
                    nameTextStyle:{
                        color:"#aaa"
                    },
                    axisLabel:{
                        color:'#fff'
                    },
                    boundaryGap: false,
                    data: [1,2,3,4,5,6,7,8,9],
                    //控制y轴线是否显示
                    axisLine: {show: false},
                    // 控制网格线是否显示
                    splitLine: {
                        show: true,
                        lineStyle:{
                            color: '#262146'
                        }
                    },
                    // 去除y轴上的刻度线
                    axisTick: {
                        show: false
                    }
                },
                yAxis: {
                    name:'KMH',
                    nameTextStyle:{
                        color:"#aaa"
                    },
                    axisLabel:{
                        color:'#fff'
                    },
                    type: 'value',
                    boundaryGap: [0, '100%'],
                    //控制y轴线是否显示
                    axisLine: {show: false},
                    // 控制网格线是否显示
                    splitLine: {
                        show: true,
                        lineStyle:{
                            color: '#262146'
                        }
                    },
                    // 去除y轴上的刻度线
                    axisTick: {
                        show: false
                    }
                },
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 10
                }, {
                    start: 0,
                    end: 10,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
                series: [
                    {
                        name:'模拟数据',
                        type:'line',
                        smooth:true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: 'rgb(255, 70, 131)'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: shadowColor[0]
                                }, {
                                    offset: 1,
                                    color: shadowColor[1]
                                }])
                            }
                        },
                        data: [11,25,16,34,24,48,50,36,29]
                    }
                ]
            };
            myChart.setOption(option);
        }
    },
    mounted(){
        this.createEcharts('echarts-a',true);
        this.createEcharts('echarts-b',false);
    }
}
</script>