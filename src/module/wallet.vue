<template>
  <div class="wallet">
    <div class="w-header">
        <div class="w-h-middle">
          <div id="myChart" style="width: 4rem;height: 4rem;"></div>

        </div>
    </div>

  </div>
</template>

<script>
import '../style/wallet.less'
let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/pie');
export default {
  name: 'Wallet',
  components:{

  },
  data () {
    return {
        title:'标题'
    }
  },
  methods:{

  },
  mounted (){
    let myChart = echarts.init(document.getElementById('myChart'));
    myChart.setOption({
      tooltip: {
        show:false
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data:['资产']
      },
      series: [
        {
          name:'访问来源',
          type:'pie',
          radius: ['96%', '100%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {value:100, name:'资产'},
          ]
        }
      ],
      color: '#13CBFE'
    });
  }
}
</script>

