<template>
    <div class="sellingArea purchaseSelling selling">
        <div class="pcSeA-li">
            <div class="pcSeA-li-title">
                张三 <div><span>交易 3</span><span>好评率 99%</span></div>
            </div>
            <div class="pcSeA-li-content">
                <img src="../assets/images/home-back.png" alt="">
                <div class="li-content-text">
                    <div class="li-content-text-desc"><span class="light-font">出售&nbsp;&nbsp;</span>5000.00 ETH.E <span class="light-font">限额 </span>&nbsp;100-5000 CNY</div>
                    <div class="li-content-text-sub li-content-text-money">￥67.63</div>
                    <div class="li-content-text-sub li-content-text-card"><span>支付宝</span><span>微信</span><span>银行卡</span></div>
                    <div class="li-content-text-desc"><span class="light-font">出售&nbsp;&nbsp;</span>腾讯网从2003年创立至今,已经成为集新闻信息,区域垂直生活服务、社会化媒体资讯和产品为一体的互联网媒体</div>
                </div>
            </div>
        </div>
        <div class="ps-explain">你想出售多少？<span>当前最高可售：2342ETH.E</span></div>
        <div class="ps-num">
            <div class="ps-num-name">
                <span>ETH.E</span>
                <span>CNY</span>
            </div>
            <div class="ps-num-input">
                <input type="text">
                <img src="../assets/icon/icon-trade-conversion.png" alt="">
                <input type="text">
            </div>
        </div>
        <div class="ps-btn"><button @click="selling()">确认出售</button></div>
        <div class="ps-tips">
            <p>交易提醒</p>
            <p>1、交易前请详细了解对方的交易信息，谨慎交易</p>
            <p>2、为保证交易安全，交易过程中数字货币会被托管</p>
            <p>3、请通过平台交易，并保存聊天记录</p>
        </div>
    </div>

</template>

<script>
    export default{
        data: function () {
            return {}
        },
        methods: {
            selling(){
                this.$router.push('/trade/pay-seller');
            }
        },
        mounted (){
        }
    }
</script>