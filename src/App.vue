<template>
  <div id="app">
    <nav class="nav">
        {{title}}
    </nav>

    <router-view/>
    <BaseButton>btn</BaseButton>
    <footer class="footer">
        <ul>
          <li class="active"><BaseButton><router-link to="/"><img src="./assets/icon/wallet.svg" alt="钱包">钱包</router-link></BaseButton></li>
          <li><BaseButton><router-link to="/price"><img src="./assets/icon/price.svg" alt="行情">行情</router-link></BaseButton></li>
          <li><BaseButton><router-link to="/trade"><img src="./assets/icon/trade.svg" alt="交易">交易</router-link></BaseButton></li>
          <li><BaseButton><router-link to="/personal"><img src="./assets/icon/personal.svg" alt="我的">我的</router-link></BaseButton></li>
        </ul>
    </footer>
  </div>
</template>

<script>
  import BaseButton from './components/baseButton'
export default {
  name: 'App',
  components:{
    BaseButton
  },
  data:function () {
      return{
        title:'标题',

      }
  },
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #3B4A82;
    min-height:100%;
    color: #D2D5E2;
  }
  html,body{
    height:100%;
    margin: 0;
  }
  .nav{
      height: 1rem;
      color: #fff;
      font-size: 0.36rem;
      line-height: 1rem;
      background-color: #4b5a96;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    background-color: #2E3A67;
  }
  .footer ul{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
  .footer ul li{
    display: inline-block;
    width: 25%;
    height: 100%;
        box-sizing: border-box;
  }
  .footer ul a{
    text-decoration: none;
    color: #3B4980;
    font-size: 0.16rem;
    display: flex;
    flex-flow: column;
  }
  .footer ul li img{
    width: auto;
    height: 0.4rem;
  }
  .footer .active a{
    color: #12B1BF;
  }
</style>
