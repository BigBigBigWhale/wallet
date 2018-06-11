import Vue from 'vue'
import Router from 'vue-router'
import Wallet from '../module/wallet'
import Price from '../module/price'
import PriceDetail from '../module/priceDetail'
import PriceTrade from '../module/priceTrade'
import Trade from '../module/trade'
import PurchaseArea from '../module/purchaseArea'
import Personal from '../module/personal'
import Login from '../module/login'
import Register from '../module/register'
import ForgetPassword from '../module/forgetPassword'
import Agreement from '../module/agreement'//协议
import Company from '../module/company'//公司简介
import CusService from '../module/cusService'//客服
import Notice from '../module/notice'//公告
import Record from '../module/record'//反馈记录
import SetUp from '../module/setUp'//设置
import VersionUpdate from '../module/versionUpdate'//版本更新
import SafeCenter from '../module/safeCenter'//安全中心
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
      path: '/trade/purchase-area',
      name: '购买',
      component: PurchaseArea
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
      path: '/personal/agreement',
      name: '协议声明',
      component: Agreement
    },
    {
      path: '/personal/company',
      name: '公司简介',
      component: Company
    },
    {
      path: '/personal/cusService',
      name: '客服',
      component: CusService
    },
    {
      path: '/personal/notice',
      name: '官方公告',
      component: Notice
    },
    {
      path: '/personal/record',
      name: '反馈记录',
      component: Record
    },
    {
      path: '/personal/setUp',
      name: '设置中心',
      component: SetUp
    },
    {
      path: '/personal/versionUpdate',
      name: '版本更新',
      component: VersionUpdate
    },
    {
      path: '/personal/safeCenter',
      name: '安全中心',
      component: SafeCenter
    },
  ],
});
export default router;
