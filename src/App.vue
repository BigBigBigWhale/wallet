<template>
  <div id="app">
    <nav class="nav" v-if="hasNav">
        <span class="nav-back" @click="backBtn()"><img src="./assets/icon/back.svg">返回</span>
        {{title}}
    </nav>

    <router-view/>

    <footer class="footer" v-if="hasFooter">
        <ul>
          <li :class="footerOpt=='/'?'active':''" @click="choiceFooterOpt('/')"><BaseButton><router-link to="/"><img src="./assets/icon/wallet.svg" alt="钱包">钱包</router-link></BaseButton></li>
          <li :class="footerOpt=='/price'?'active':''" @click="choiceFooterOpt('/price')"><BaseButton><router-link to="/price"><img src="./assets/icon/price.svg" alt="行情">行情</router-link></BaseButton></li>
          <li :class="footerOpt=='/trade'?'active':''" @click="choiceFooterOpt('/trade')"><BaseButton><router-link to="/trade"><img src="./assets/icon/trade.svg" alt="交易">交易</router-link></BaseButton></li>
          <li :class="footerOpt=='/personal'?'active':''" @click="choiceFooterOpt('/personal')"><BaseButton><router-link to="/personal"><img src="./assets/icon/personal.svg" alt="我的">我的</router-link></BaseButton></li>
        </ul>
    </footer>
  </div>
</template>

<script>
import './style/app.less'
import globalDate from './router/globalDate'
import BaseButton from './components/baseButton'
import Storage from './components/Storage'

var hasFooter = {'/':true,'/price':true,'/trade':true,'/personal':true};
var hasNav = {};
var unwantedLogin= {'/login':true,'/register':true,'/forget-password':true};
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
      this.checkLogin(to.path,from.path);
      this.checkStatus(to.path);
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
      if(!!unwantedLogin[toPath]&&globalDate.user){//登录的跳转到首页
        if(FromPath){//用于判断从哪个页面来的
          this.$router.push(FromPath);
        }else{
          this.$router.push("/");
          return;
        }
      }
    },
    checkStatus (path){
      this.hasFooter = !!hasFooter[path];
      this.hasNav = !!hasNav[path];
      if(this.hasFooter){
          this.choiceFooterOpt(path);
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
    this.checkStatus(this.$route.path);
  },
  mounted (){
      console.log(this.$route.path)
  }
}
</script>
