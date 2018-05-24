import Vue from 'vue'
import Router from 'vue-router'
import Wallet from '../module/wallet'
import Price from '../module/price'
import Trade from '../module/trade'
import Personal from '../module/personal'

Vue.use(Router);

export default new Router({
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
      path: '/trade',
      name: '交易',
      component: Trade
    },
    {
      path: '/personal',
      name: '我的',
      component: Personal
    },
  ]
})
