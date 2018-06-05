<template>
  <div class="trade">
    <div class="trade-nav">
      <span class="trade-nav-left"><img src="../assets/icon/icon-trade.png"></span>
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
          <div id="myChart" style="width: 90%;height: 4rem;"></div>

      </div>
      <div class="trade-btn-box">
          <button class="trade-btn trade-btn-buy">买入</button>
          <button class="trade-btn trade-btn-sell">卖出</button>
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
        mounted (){
            let myChart = echarts.init(document.getElementById('myChart'));
            let option = {
                title:{show:false,},
                legend:{show:false,},
                tooltip:{show:false,},
                toolbox:{show:false,},
                grid:{
                    right:0,
                    top:30,
                    bottom:20,
                    left:50
                },
                xAxis: {
                    type: 'category',
                    axisLine:{
                        lineStyle:{
                            color :'#fff',
                        }
                    },
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                },
                yAxis: {
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color :'#fff',
                        }
                    },
                },
                series:{
                    type: 'line',
                    smooth: true,
                    symbolSize:4,
                    data: [820, 932, 901, 934, 20, 1330, 1320],
                    itemStyle:{
                        color: '#2d9e8c',
                    },
                    lineStyle:{
                        color: '#2d9e8c',
                    }
                }

            };
            myChart.setOption(option);
        }
    }
</script>
