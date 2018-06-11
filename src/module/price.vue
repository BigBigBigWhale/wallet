<template>
  <div class="price">
      <div class="price-top">
          <lb @lookDetail="lookDetail" :list="lunboList"></lb>
      </div>
    <div class="price-list">
        <ul>
            <div class="price-li" v-for="(item,index) in list">
                <li @click="openEcharts(item)">
                    <div class="price-li-name"><img src="../assets/icon/icon-person-li-1.png" alt="">EOS</div>
                    <div class="price-li-value" :class="{'price-li-value-red':!item.state}">
                        <div class="price-li-value-left">
                            <div class="price-li-value-left-l">
                                <span>$</span><span>￥</span>
                            </div>
                            <div class="price-li-value-left-r">
                                <span>1222.42</span><span>4234.3432</span>
                            </div>
                        </div>
                        <div class="price-li-value-right"><button>+24.12%</button></div>
                    </div>
                </li>
                <div class="price-li-box" v-show="item.open">
                    <div class="price-li-box-top"><span>最高价  24.3523</span><span>最低价  24.3523</span></div>
                    <div class="price-li-echarts" :id="'echarts-'+index" style="width: 100%;height: 4rem;"></div>
                    <div class="price-li-box-btn"><router-link :to="'/price-detail?id='+'1'">去交易</router-link></div>
                </div>
            </div>

          <!--<li>-->
            <!--<div class="price-li-name"><img src="../images/icon/icon-person-li-1.png" alt="">EOS</div>-->
            <!--<div class="price-li-value price-li-value-red">-->
              <!--<div class="price-li-value-left">-->
                <!--<div class="price-li-value-left-l">-->
                  <!--<span>$</span><span>￥</span>-->
                <!--</div>-->
                <!--<div class="price-li-value-left-r">-->
                  <!--<span>1222.42</span><span>4234.3432</span>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="price-li-value-right"><button>+24.12%</button></div>-->
            <!--</div>-->
          <!--</li>-->
        </ul>
    </div>
  </div>
</template>

<script>
  import '../style/price.less'
  let echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/line');
  import lb from '../components/LBCpt.vue'
    export default{
        name: 'Price',
        components:{
            lb
        },
        data: function () {
            return {
                list:[{
                    state:true,
                    open:true,
                },{
                    state:false,
                    open:true,
                }],
                lunboList:[],//用于存放头部导航轮播图片

            }
        },
        methods:{
            openEcharts(item){
                item.open = !item.open;
            },
            lookDetail (){
                console.log('2')
            },
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
                                color: '#363767'
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
                                color: '#363767'
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
            for(let i in this.list){
                this.createEcharts('echarts-'+i,this.list[i].state);
                this.list[i].open = false;
            }
        }
    }
</script>
