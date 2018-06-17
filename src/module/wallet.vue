<template>
  <div class="wallet">
    <div class="w-header">
        <div class="w-h-top w-h-left" @click="scan()"></div>
        <div class="w-h-top w-h-right"></div>
        <div class="w-h-middle">
          <div id="myChart" style="width: 4rem;height: 4rem;"></div>
        </div>
        <div class="w-h-b-left"><div class="w-h-b-l-icon" @click="openCode()"></div><div>asjfijaf.....asdasd</div></div>
    </div>
      <div class="w-content">
          <div class="w-c-li">
              <div><img src="../assets/icon/icon_wallet.png" alt="">Wallet</div>
              <div class="w-c-li-middle"><span>$134234.234</span><span>￥1344.234</span></div>
              <div>4.343434 <span></span></div>
          </div>
          <div class="w-c-li">
              <div><img src="../assets/icon/icon_vitality.png" alt="">Wallet</div>
              <div>4.343434 <span></span></div>
          </div>
          <div class="w-c-li">
              <div><img src="../assets/icon/icon_link1.png" alt="">Wallet</div>
              <div>4.343434 <span></span></div>
          </div>
          <div class="w-c-li">
              <div><img src="../assets/icon/icon_link2.png" alt="">Wallet</div>
              <div>4.343434 <span></span></div>
          </div>
          <div class="w-c-li">
              <div><img src="../assets/icon/icon_eth.png" alt="">Wallet</div>
              <div class="w-c-li-middle"><span>$134234.234</span><span>￥1344.234</span></div>
              <div>4.343434 <span></span></div>
          </div>
          <div class="w-c-li">
              <div><img src="../assets/icon/icon_eth.png" alt="">Wallet</div>
              <div class="w-c-li-middle"><span>$134234.234</span><span>￥1344.234</span></div>
              <div>4.343434 <span></span></div>
          </div>
          <div class="w-c-li">
              <div><img src="../assets/icon/icon_eth.png" alt="">Wallet</div>
              <div class="w-c-li-middle"><span>$134234.234</span><span>￥1344.234</span></div>
              <div>4.343434 <span></span></div>
          </div>
          <div class="w-c-li">
              <div><img src="../assets/icon/icon_eth.png" alt="">Wallet</div>
              <div class="w-c-li-middle"><span>$134234.234</span><span>￥1344.234</span></div>
              <div>4.343434 <span></span></div>
          </div>
      </div>
      <Cover ref="cover">
          <div class="w-cover-content">
              <div class="w-c-c-close" @click.stop="closeCode()"></div>
            <div class="w-c-c-content">
                <img src="../assets/icon/icon-logo.png" class="w-c-c-c-logo" alt="">
                <div class="w-c-c-c-background"><img src="" alt="">
                    <img :src="imgDataUrl" alt="">
                </div>
                <div class="w-c-c-c-title">充币地址</div>
                <input type="text" id="code" class="w-c-c-c-address" readonly :value="qrcode">
                <button class="w-c-c-c-btn" v-clipboard="qrcode">复制</button>
            </div>
          </div>
      </Cover>
      <input type="file" id="file" name="file" style="display: none;" @change="uploadChange" accept="image/jpeg">
  </div>
</template>

<script>
import '../style/wallet.less';
import Cover from '../components/cover.vue';
import getBase64 from '../components/getBase64';
let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/pie');
import $ from 'jquery'
export default {
  name: 'Wallet',
  components:{
      Cover
  },
  data () {
    return {
        title:'标题',
        qrcode:'hgpahfsf4sfs5465sf4eahfsf4sfs5465sf4eahfsf4sfs5465sf4esf6fa89safesfsafs5f6e',
        imgDataUrl:''
    }
  },
  methods:{
      openCode (){
          this.$refs.cover.show();
      },
      closeCode (){
          this.$refs.cover.hide();
      },
      scan (){
          $('#file').click();
      },
      uploadChange(event){
          if(event.target.files.length>0){
//              this.files = event.target.files[0];  //提交的图片
              this.getBase64(event.target,(url)=>{
                  this.imgDataUrl = 'data:image/png;base64,'+url;   //显示的图片
              });
          }
      },
      getBase64 :getBase64,
  },
  mounted (){
//    let myChart = echarts.init(document.getElementById('myChart'));
//    myChart.setOption({
//      tooltip: {
//        show:false
//      },
//      legend: {
//        orient: 'vertical',
//        x: 'left',
//        data:['资产']
//      },
//      series: [
//        {
//          name:'访问来源',
//          type:'pie',
//          radius: ['96%', '100%'],
//          avoidLabelOverlap: false,
//          label: {
//            normal: {
//              show: false,
//            },
//          },
//          labelLine: {
//            normal: {
//              show: false
//            }
//          },
//          data:[
//            {value:100, name:'资产'},
//          ]
//        }
//      ],
//      color: '#13CBFE'
//    });
  }
}
</script>

