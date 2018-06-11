import Vue from 'vue'
import Router from 'vue-router'
import Wallet from '../module/wallet'
import Price from '../module/price'
import PriceDetail from '../module/priceDetail'
import PriceTrade from '../module/priceTrade'
import Trade from '../module/trade'
import Personal from '../module/personal'
import Login from '../module/login'
import Register from '../module/register'
import ForgetPassword from '../module/forgetPassword'
Vue.use(Router);

var router = new Router({
  routes: [
    {
      path: '/',
      name: '钱包',
      component: Wallet
    },
    {
      path: '/price',
      name: '行情',
      component: Price
    },
    {
      path: '/price-detail',
      name: '详情',
      component: PriceDetail
    },
    {
      path: '/price-trade',
      name: '交易',
      component: PriceTrade
    },
    {
      path: '/trade',
      name: '交易',
      component: Trade
    },
    {
      path: '/personal',
      name: '我的',
      component: Personal
    },
    {
      path: '/login',
      name: '登陆',
      component: Login
    },
    {
      path: '/register',
      name: '注册',
      component: Register
    },
    {
      path: '/forget-password',
      name: '忘记密码',
      component: ForgetPassword
    },
  ],
});
export default router;
