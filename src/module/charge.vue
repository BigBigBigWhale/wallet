<template>
<div class="charge">
    <div class="charge-desc">BTC钱包地址禁止充值除BTC之外的其他资产。任何非BTC资产充值将不可找回</div>
    <div class="charge-qrcode"><img src="../assets/images/home-back.png" alt=""></div>
    <div class="charge-title">充币地址</div>
    <input type="text" id="code" class="charge-address" readonly :value="qrcodeAddress">
    <button class="charge-btn" v-clipboard="qrcodeAddress">复制</button>
</div>
</template>

<script>
    import '../style/bill.less'
    export default{
        data: function () {
            return {
                qrcodeAddress:'asdfasdfasdfasdfasfdasdf',
            }
        },
        methods: {},
        mounted (){
        }
    }
</script>