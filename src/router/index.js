import Vue from 'vue'
import Router from 'vue-router'
import Wallet from '../module/wallet'//钱包
import Price from '../module/price'//行情
import PriceDetail from '../module/priceDetail'//行情详情
import PriceTrade from '../module/priceTrade'//
import Trade from '../module/trade'//交易
import PurchaseArea from '../module/purchaseArea'//买单区
import SellingArea from '../module/sellingArea'//卖单区
import Purchase from '../module/purchase'//买单
import Selling from '../module/selling'//卖单
import Payment from '../module/payment'//付款聊天
import PaymentSeller from '../module/paymentSeller'//付款聊天-卖家版
import Personal from '../module/personal'//我的
import Login from '../module/login'//登录
import Register from '../module/register'//注册
import ForgetPassword from '../module/forgetPassword'//忘记密码
import Agreement from '../module/agreement'//协议
import Company from '../module/company'//公司简介
import CusService from '../module/cusService'//客服
import Notice from '../module/notice'//公告
import Record from '../module/record'//反馈记录
import SetUp from '../module/setUp'//设置
import VersionUpdate from '../module/versionUpdate'//版本更新
import SafeCenter from '../module/safeCenter'//安全中心
import LoginEditpwd from '../module/loginEditpwd'//登录密码设置
import GoogleCode from '../module/googleCode'//谷歌验证设置
import CapitalEditpwd from '../module/capitalEditpwd'//资金密码设置
import EditPhone from '../module/editPhone'//修改手机号
import BindingPhone from '../module/bindingPhone'//绑定手机号
import EditEmail from '../module/editEmail'//修改邮箱
import BindingEmail from '../module/bindingEmail'//绑定邮箱
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
      path: '/trade/selling-area',
      name: '出售',
      component: SellingArea
    },
    {
      path: '/trade/purchase',
      name: '购买',
      component: Purchase
    },
    {
      path: '/trade/selling',
      name: '出售',
      component: Selling
    },
    {
      path: '/trade/pay',
      name: '购买',
      component: Payment
    },
    {
      path: '/trade/pay-seller',
      name: '出售',
      component: PaymentSeller
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
    {
      path: '/personal/loginEditpwd',
      name: '登录密码设置',
      component: LoginEditpwd
    },
    {
      path: '/personal/googleCode',
      name: '谷歌验证设置',
      component: GoogleCode
    },
    {
      path: '/personal/capitalEditpwd',
      name: '资金密码设置',
      component: CapitalEditpwd
    },
    {
      path: '/personal/editPhone',
      name: '手机号',
      component: EditPhone
    },
    {
      path: '/personal/bindingPhone',
      name: '手机号',
      component: BindingPhone
    },
    {
      path: '/personal/editEmail',
      name: '邮箱',
      component: EditEmail
    },
    {
      path: '/personal/bindingEmail',
      name: '邮箱',
      component: BindingEmail
    }
  ]
});
export default router;
