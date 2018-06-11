<template>
  <div class="trade">
    <div class="trade-nav">
      <span class="trade-nav-left"><img src="../assets/icon/icon-trade-right.png"></span>
      交易
      <span class="trade-nav-right"><img src="../assets/icon/icon-add.png"></span>
    </div>
    <div class="trade-top">
       <div class="trade-logo"></div>
        <div class="trade-top-list">
          <div class="trade-top-li"><div>80.12312</div><div>当前价</div></div>
          <div class="trade-top-li"><div>80.12312</div><div>当前价</div></div>
          <div class="trade-top-li"><div>80.12312</div><div>当前价</div></div>
        </div>
    </div>
      <div class="trade-graph">
          <div id="myChart" style="width: 100%;height: 4rem;background-color: #323464;"></div>

      </div>
      <div class="trade-btn-box">
          <button class="trade-btn trade-btn-buy" @click="goPurchase()">买入</button>
          <button class="trade-btn trade-btn-sell" @click="goSelling()">卖出</button>
      </div>
  </div>
</template>

<script>
    import '../style/trade.less'
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/line');
    export default{
        name: 'Trade',
        data: function () {
            return {}
        },
        methods:{
            goPurchase (){
                this.$router.push('/trade/purchase-area');
            },
            goSelling (){
                this.$router.push('/trade/selling-area');
            },
        },
        mounted (){
            let myChart = echarts.init(document.getElementById('myChart'));
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
                    color:'#369f81'
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
                                    color: 'rgb(49 , 80, 109)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(50, 53, 94)'
                                }])
                            }
                        },
                        data: [11,25,16,34,24,48,50,36,29]
                    }
                ]
            };
            myChart.setOption(option);
        }
    }
</script>
