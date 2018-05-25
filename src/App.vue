<template>
  <div id="app">
    <nav class="nav" v-if="hasNav">
        <span class="nav-back" @click="backBtn()"><img src="./assets/icon/back.svg">返回</span>
        {{title}}
    </nav>

    <router-view/>

    <footer class="footer" v-if="hasFooter">
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
import globalDate from './router/globalDate'
import BaseButton from './components/baseButton'
var hasFooter = {'/':true,'/price':true,'/trade':true,'/personal':true};
var hasNav = {};
var unwantedLogin= {'/login':true,'/register':true};
export default {
  name: 'App',
  components:{
      BaseButton
  },
  data:function () {
      return{
          title:'标题',
          footerOpt:'wallet',
          hasNav: false,
          hasFooter: false,
      }
  },
  watch: {
    '$route': function(to,from){//监控页面地址是否需要头部、底部导航栏和登陆状态的实时检测
      this.hasFooter = !!hasFooter[to.path];
      this.hasNav = !!hasNav[to.path];
      this.checkLogin(to.path);
//            console.log('val1',to);
//            console.log('val2',from);
    }
  },
  methods:{
    checkLogin (path){//检查登陆状态
      if(!!!unwantedLogin[path]&&!globalDate.user){//未登录的跳转到登陆页面
        this.$router.push("/login");
        return;
      }
      if(!!unwantedLogin[path]&&globalDate.user){//登录的跳转到首页
        this.$router.push("/");
        return;
      }
    },
    checkFooterOpt (opt){//底部导航的选择事件
      this.footerOpt = opt;
    },
    backBtn (){//头部导航的返回按钮
      this.$router.back();
    }
  },
  beforeCreate (){

  },
  created (){//第一次加载时router没有监控到，检测登陆、底部导航栏、头部导航栏
    this.checkLogin(this.$route.path);
    this.hasFooter = !!hasFooter[this.$route.path];
    this.hasNav = !!hasNav[this.$route.path];
  },
  mounted (){
      console.log(this.$route.path)
  }
}
</script>
