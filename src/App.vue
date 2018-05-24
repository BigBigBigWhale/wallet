<template>
  <div id="app">
    <nav class="nav">
        <span class="nav-back"><img src="./assets/icon/back.svg">返回</span>
        {{title}}
    </nav>

    <router-view/>

    <footer class="footer">
        <ul>
          <li :class="footerOpt=='wallet'?'active':''" @click="checkFooterOpt('wallet')"><BaseButton><router-link to="/"><img src="./assets/icon/wallet.svg" alt="钱包">钱包</router-link></BaseButton></li>
          <li :class="footerOpt=='price'?'active':''" @click="checkFooterOpt('price')"><BaseButton><router-link to="/price"><img src="./assets/icon/price.svg" alt="行情">行情</router-link></BaseButton></li>
          <li :class="footerOpt=='trade'?'active':''" @click="checkFooterOpt('trade')"><BaseButton><router-link to="/trade"><img src="./assets/icon/trade.svg" alt="交易">交易</router-link></BaseButton></li>
          <li :class="footerOpt=='personal'?'active':''" @click="checkFooterOpt('personal')"><BaseButton><router-link to="/personal"><img src="./assets/icon/personal.svg" alt="我的">我的</router-link></BaseButton></li>
        </ul>
    </footer>
  </div>
</template>

<script>
import './style/app.less'
import BaseButton from './components/baseButton'
export default {
  name: 'App',
  components:{
      BaseButton
  },
  data:function () {
      return{
          title:'标题',
          footerOpt:'wallet',
      }
  },
  watch: {
    '$route': function(val1,val2){
            console.log('val1',val1);
            console.log('val2',val2);
    }
  },
  methods:{
    checkFooterOpt (opt){
      this.footerOpt = opt;
    }
  }
}
</script>
