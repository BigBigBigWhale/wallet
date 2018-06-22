import Vue from 'vue'
import Router from 'vue-router'
import Wallet from '../module/wallet'//钱包
import Price from '../module/price'//行情
import PriceDetail from '../module/priceDetail'//行情详情
import PriceTrade from '../module/priceTrade'//
import Trade from '../module/trade'//交易
import Trade2 from '../module/trade2'//交易2
import ReleaseTrade from '../module/releaseTrade'//交易2
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
import AccountInfo from '../module/accountInfo'//账户信息
import CalcDetail from '../module/calcDetail'//算力明细
import Invite from '../module/invite'//邀请
import Order from '../module/order'//我的订单
import Authentication from '../module/authentication'//身份认证
import Assets from '../module/assets'//资产
import C2C from '../module/c2c'//资产
import C2cRecord from '../module/c2cRecord'//交易记录
import C2cDetail from '../module/c2cDetail'//付款详情
import SpotGoods from '../module/spotGoods'//现货资产
import Bill from '../module/bill'//现货账单
import Withdraw from '../module/withdraw'//提币
import Charge from '../module/charge'//充币
import BuyAd from '../module/buyAd' //购买广告
import SellAd from '../module/sellAd'//出售广告
import BuyAded from '../module/buyAded'//已购买广告
import SellAded from '../module/sellAded'//已出售广告
import Mine from '../module/mine'//采矿
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
      path: '/trade2',
      name: '交易2',
      component: Trade2
    },
    {
      path: '/trade2/releaseTrade',
      name: '发布广告',
      component: ReleaseTrade
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
    },
    {
      path: '/personal/accountInfo',
      name: '账户信息',
      component: AccountInfo
    },
    {
      path: '/personal/calcDetail',
      name: '算力明细',
      component: CalcDetail
    },
    {
      path: '/personal/authentication',
      name: '身份认证',
      component: Authentication
    },
    {
      path: '/personal/order',
      name: '我的订单',
      component: Order
    },
    {
      path: '/personal/invite',
      name: '邀请',
      component: Invite
    },
    {
      path: '/personal/assets',
      name: '资产',
      component: Assets
    },
    {
      path: '/personal/c2c',
      name: 'C2C交易',
      component: C2C
    },
    {
      path: '/personal/c2cRecord',
      name: 'C2C交易记录',
      component: C2cRecord
    },
    {
      path: '/personal/c2cDetail',
      name: 'C2C交易记录',
      component: C2cDetail
    },
    {
      path: '/personal/spotGoods',
      name: '现货资产',
      component: SpotGoods
    },
    {
      path: '/personal/bill',
      name: '账单BTC',
      component: Bill
    },
    {
      path: '/personal/withdraw',
      name: '提币BTC',
      component: Withdraw
    },
    {
      path: '/personal/charge',
      name: '充币BTC',
      component: Charge
    },
    {
      path: '/personal/buyAd',
      name: '购买广告',
      component: BuyAd
    },
    {
      path: '/personal/sellAd',
      name: '出售广告',
      component: SellAd
    },
    {
      path: '/personal/buyAded',
      name: '已购买广告',
      component: BuyAded
    },
    {
      path: '/personal/sellAded',
      name: '已出售广告',
      component: SellAded
    },
    {
      path: '/mine',
      name: '采矿',
      component: Mine
    }

  ]
});
export default router;
