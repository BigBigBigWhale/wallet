<template>
<div class="priceTrade">
    <top-nav-cpt></top-nav-cpt>
    <div class="pt-top">
        <div class="pt-t-desc">
            <span class="big-font">EOS</span>现价 &nbsp;&nbsp;&nbsp;<span class="green">12.2323</span>&nbsp;&nbsp;&nbsp; 涨幅 <span class="green">+3.23%</span>
        </div>
        <div class="pt-t-content">
            <div class="pt-t-c-part">
                <div class="red"><span class="module-3">20.3</span><span class="module-2">12.56</span><span class="module-1">买1</span></div>
                <div class="red"><span class="module-3">20.2333</span><span class="module-2">12</span><span class="module-1">买1</span></div>
                <div class="red"><span class="module-3">20.233</span><span class="module-2">12.56</span><span class="module-1">买1</span></div>
                <div class="red"><span class="module-3">20.2333</span><span class="module-2">12.56</span><span class="module-1">买1</span></div>
                <div class="red"><span class="module-3">20.2333</span><span class="module-2">12.56</span><span class="module-1">买1</span></div>
            </div>
            <div class="pt-t-c-part">
                <div><span class="module-1">买1</span><span class="module-2">12.56</span><span class="module-3">20.2333</span></div>
                <div><span class="module-1">买1</span><span class="module-2">12</span><span class="module-3">20.2333</span></div>
                <div><span class="module-1">买1</span><span class="module-2">12.56</span><span class="module-3">20.2333</span></div>
                <div><span class="module-1">买1</span><span class="module-2">12.56</span><span class="module-3">20.2333</span></div>
                <div><span class="module-1">买1</span><span class="module-2">12.56</span><span class="module-3">20.23</span></div>
            </div>
        </div>
    </div>
    <div class="pt-content">
        <div class="pt-c-title">卖出EOS</div>
        <div class="pt-c-num">13800138000</div>
        <div class="pt-c-input">
            <div>
                <input type="text" placeholder="委托价格">
                <div class="pt-c-style">折合CNY <span>￥0.00</span></div>
                <div class="pt-c-style">可用EOS <span>0</span></div>
                <div class="pt-c-btn pt-c-btn-default">查看委托</div>
            </div>
            <div>
                <input type="text" placeholder="委托数量">
                <div class="pt-c-style">交易额 <span>0.00</span></div>
                <div class="pt-c-style">可用ETH.E <span>0</span></div>
                <div class="pt-c-btn">确定卖出</div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
    import '../style/priceTrade.less'
    import topNavCpt from '../components/topNavCpt'
    export default{
        components:{topNavCpt},
        data: function () {
            return {}
        },
        methods: {},
        mounted (){
        }
    }
</script>