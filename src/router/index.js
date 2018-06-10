import Vue from 'vue'
import Router from 'vue-router'
import Wallet from '../module/wallet'
import Price from '../module/price'
import PriceDetail from '../module/priceDetail'
import Trade from '../module/trade'
import Personal from '../module/personal'
import Login from '../module/login'
import Register from '../module/register'
import ForgetPassword from '../module/forgetPassword'
import Notice from '../module/notice'
import CusService from '../module/cusService'
import Record from '../module/record'
import VersionUpdate from '../module/versionUpdate'
import Company from '../module/company'
import Agreement from '../module/agreement'
import SetUp from '../module/setUp'
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
    {
      path: '/notice',
      name: '官方公告',
      component: Notice
    },
    {
      path: '/cusService',
      name: '客服',
      component: CusService
    },
    {
      path: '/record',
      name: '反馈记录',
      component: Record
    },
    {
      path: '/versionUpdate',
      name: '版本更新',
      component: VersionUpdate
    },
    {
      path: '/company',
      name: '版本更新',
      component: Company
    },
    {
      path: '/agreement',
      name: '协议声明',
      component: Agreement
    },
    {
      path: '/setUp',
      name: '设置中心',
      component: SetUp
    }
  ],
});
export default router;
