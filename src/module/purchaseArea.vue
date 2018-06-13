<template>
    <div class="purchaseArea purchaseSelling">
        <div class="pcSeA-li">
            <div class="pcSeA-li-title">
                张三 <div><span>交易 3</span><span>好评率 99%</span></div>
            </div>
            <div class="pcSeA-li-content">
                <img src="../assets/images/home-back.png" alt="">
                <div class="li-content-text">
                    <div class="li-content-text-desc"><span class="light-font">出售&nbsp;</span> 5000.00 ETH.E <span class="light-font">限额 </span>&nbsp;100-5000 CNY</div>
                    <div class="li-content-text-sub li-content-text-money">￥67.63</div>
                    <div class="li-content-text-sub li-content-text-card"><span>支付宝</span><span>微信</span><span>银行卡</span></div>
                    <button @click="buy()">确认购买</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../style/purchaseSelling.less'
    export default{
        data: function () {
            return {}
        },
        methods: {
            buy (){
                this.$router.push('/trade/purchase')
            }
        },
        mounted (){
        }
    }
</script>