<template>
<div class="order">
    <div class="order-unfinished"><span>-</span>未完成订单<span>-</span></div>
    <div class="pcSeA-li pcSeA-li-unfinished">
        <div class="pcSeA-li-title">订单号 123232323<div><span>2018-05-25 18:36:22</span></div></div>
        <div class="pcSeA-li-content">
            <img src="../assets/images/home-back.png" alt="">
            <div class="pcSeA-li-content-name">張三</div>
            <div class="li-content-text">
                <div class="li-content-text-desc"><span class="light-font">出售&nbsp;</span> 5000.00 ETH.E <span class="light-font">限额 </span>&nbsp;100-5000 CNY</div>
                <div class="li-content-text-sub li-content-text-desc"><span class="li-content-text-money">￥67.63</span><span class="light-font">总额 </span>5000CNY</div>
                <div class="li-content-text-sub li-content-text-card"><span>支付宝</span><span>微信</span><span>银行卡</span></div>
                <button @click="goTrade()">立刻交易</button>
            </div>
        </div>
    </div>

    <div class="order-over"><span>-</span>已完成订单<span>-</span></div>

    <div class="pcSeA-li">
        <div class="pcSeA-li-title">订单号 123232323<div><span>2018-05-25 18:36:22</span></div></div>
        <div class="pcSeA-li-content">
            <img src="../assets/images/home-back.png" alt="">
            <div class="pcSeA-li-content-name">張三</div>
            <div class="li-content-text">
                <div class="li-content-text-desc"><span class="light-font">出售&nbsp;</span> 5000.00 ETH.E <span class="light-font">限额 </span>&nbsp;100-5000 CNY</div>
                <div class="li-content-text-sub li-content-text-desc"><span class="li-content-text-money">￥67.63</span><span class="light-font">总额 </span>5000CNY</div>
                <div class="li-content-text-sub li-content-text-card"><span>支付宝</span><span>微信</span><span>银行卡</span></div>
                <div class="li-content-text-over">已完成</div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
    import '../style/order.less'
    export default{
        data: function () {
            return {}
        },
        methods: {
            goTrade (){

            }
        },
        mounted (){
        }
    }
</script>