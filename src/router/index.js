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
      name: 'Wallet',
      component: Wallet
    },
    {
      path: '/price',
      name: 'Price',
      component: Price
    },
    {
      path: '/trade',
      name: 'Trade',
      component: Trade
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
  ]
})
