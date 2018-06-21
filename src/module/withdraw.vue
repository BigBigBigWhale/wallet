<template>
<div class="withdraw inputModule">
    <div class="withdraw-box">
        <div class="input-box"><label for="balance">可用余额</label><input id="balance" placeholder="0.00BTC" type="text"></div>
        <div class="input-box"><label for="address">提币地址</label><input id="address" placeholder="请输入或粘贴提币地址" type="text"></div>
        <div class="input-box"><label for="number">提币数量</label><input id="number" placeholder="请输入提币数量" type="text"></div>
        <div class="input-box"><label for="money">旷工费</label><input id="money" placeholder="20.00BTC" type="text"></div>
    </div>
    <div class="withdraw-desc">提示：矿工费将在可用余额中扣除，余额不足将从转账金额中扣除</div>
    <button class="withdraw-btn">提交</button>
</div>

</template>

<script>
    import '../style/bill.less'
    export default{
        data: function () {
            return {}
        },
        methods: {},
        mounted (){
        }
    }
</script>