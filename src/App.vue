<template>
  <div id="app">
    <nav class="nav" v-if="hasNav">
        <span class="nav-back" @click="backBtn()" v-if="nav.show"><img src="./assets/icon/back.svg">返回</span>
        {{nav.title}}
    </nav>

    <router-view class="Children" :class="{'hasNav':hasNav,'hasFooter':hasFooter}"/>

    <footer class="footer" v-if="hasFooter">
        <ul>
          <li v-if="footerOpt=='/'" class="active" @click="choiceFooterOpt('/')"><BaseButton><router-link to="/"><img src="./assets/icon/icon-wallet-actv.png" alt="钱包">钱包</router-link></BaseButton></li>
          <li v-else @click="choiceFooterOpt('/')"><BaseButton><router-link to="/"><img src="./assets/icon/icon-wallet.png" alt="钱包">钱包</router-link></BaseButton></li>

            <li v-if="footerOpt=='/price'" class="active" @click="choiceFooterOpt('/price')"><BaseButton><router-link to="/price"><img src="./assets/icon/icon-price-actv.png" alt="行情">行情</router-link></BaseButton></li>
          <li v-else class="" @click="choiceFooterOpt('/price')"><BaseButton><router-link to="/price"><img src="./assets/icon/icon-price.png" alt="行情">行情</router-link></BaseButton></li>

          <li v-if="footerOpt=='/trade'||footerOpt=='/trade2'" class="active" @click="choiceFooterOpt('/trade')"><BaseButton><router-link to="/trade"><img src="./assets/icon/icon-trade-actv.png" alt="交易">交易</router-link></BaseButton></li>
          <li v-else class="" @click="choiceFooterOpt('/trade')"><BaseButton><router-link to="/trade"><img src="./assets/icon/icon-trade.png" alt="交易">交易</router-link></BaseButton></li>

          <li v-if="footerOpt=='/personal'" class="active" @click="choiceFooterOpt('/personal')"><BaseButton><router-link to="/personal"><span class="footer-news"></span><img src="./assets/icon/icon-user-actv.png" alt="我的">我的</router-link></BaseButton></li>
          <li v-else class="" @click="choiceFooterOpt('/personal')"><BaseButton><router-link to="/personal"><span class="footer-news"></span><img src="./assets/icon/icon-user.png" alt="我的">我的</router-link></BaseButton></li>
        </ul>
    </footer>
  </div>
</template>

<script>
import './style/app.less'
import './style/default.less'
import globalDate from './router/globalDate'
import BaseButton from './components/baseButtonCpt'
import Storage from './components/Storage'

var hasFooter = {'/':true,'/price':true,'/trade':true,'/trade2':true,'/personal':true};
var hasNav = {'/personal':true,'/trade/purchase-area':true,'/trade/selling-area':true,'/personal/agreement':true,'/personal/company':true,
    '/trade/purchase':true,'/trade/selling':true,'/trade/pay-seller':true,'/trade/pay':true, '/personal/notice':true,'/personal/record':true,
    '/personal/setUp':true, '/personal/versionUpdate':true, '/personal/safeCenter':true,'/personal/loginEditpwd':true,'/personal/googleCode':true,
  '/personal/capitalEditpwd':true,'/personal/editPhone':true,'/personal/bindingPhone':true,'/personal/editEmail':true,'/personal/bindingEmail':true,
    '/trade2/releaseTrade':true,'/personal/accountInfo':true,'/personal/calcDetail':true,'/personal/order':true,'/personal/authentication':true,
    '/personal/assets':true,'/personal/c2cRecord':true,'/personal/spotGoods':true,'/personal/bill':true,'/personal/withdraw':true,'/personal/charge':true,
    '/personal/buyAd':true,'/personal/buyAded':true,'/personal/sellAd':true,'/personal/sellAded':true,'/personal/c2cDetail':true};
var noNavBtn = {'/personal':true,'/trade2/releaseTrade':true};
var unwantedLogin= {'/login':true,'/register':true,'/forget-password':true,'/':true,'/price':true,'/trade':true,'/personal':true};
export default {
  name: 'App',
  components:{
      BaseButton
  },
  data:function () {
      return{
          nav:{
            title:'',
            show:true,
          },
          footerOpt:'wallet',
          hasNav: false,
          hasFooter: false,
      }
  },
  watch: {
    '$route': function(to,from){//监控页面地址是否需要头部、底部导航栏和登陆状态的实时检测
      this.hasFooter = !!hasFooter[to.path];
      this.hasNav = !!hasNav[to.path];
      this.checkLogin(to.path,from.path);
      this.checkStatus(to);
      console.log(to)
//            console.log('val1',to);
//            console.log('val2',from);
    }
  },
  methods:{
    checkLogin (toPath,FromPath){//检查登陆状态
      if(!!!unwantedLogin[toPath]&&!globalDate.user){//未登录的跳转到登陆页面
        this.$router.push("/login");
        return;
      }
//      if(!!unwantedLogin[toPath]&&globalDate.user){//登录的跳转到首页
//        if(FromPath){//用于判断从哪个页面来的
//          this.$router.push(FromPath);
//        }else{
////          this.$router.push("/");
//        }
//      }
    },
    checkStatus (item){
      this.hasFooter = !!hasFooter[item.path];
      this.hasNav = !!hasNav[item.path];
      if(this.hasFooter){
          this.choiceFooterOpt(item.path);
      }
      if(this.hasNav){
        this.nav.title = item.name;
        this.nav.show = !noNavBtn[item.path];
      }
    },
    choiceFooterOpt (opt){//底部导航的选择事件
      this.footerOpt = opt;
    },
    backBtn (){//头部导航的返回按钮
      this.$router.back();
    }
  },
  beforeCreate (){

  },
  created (){//第一次加载时router没有监控到，检测登陆、底部导航栏、头部导航栏
    let storage = new Storage('login', window.localStorage);
    globalDate.user = storage.get('user') || null;
    this.checkLogin(this.$route.path);
    this.checkStatus(this.$route);
  },
  mounted (){
//      console.log(this.$route.path)
  }
}
</script>
