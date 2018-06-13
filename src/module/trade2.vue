<template>
<div class="trade2">
    <top-nav-cpt :backShow="false" :addShow="true" @add="release"></top-nav-cpt>
    <div class="quotation">
        <div class="quotation-content">
            <div class="quotation-list">
                <div class="q-list-title" style="padding-right: 0.5rem"><span>数量</span><span>价格</span></div>
                <div class="red"><span class="module-3">20.3</span><span class="module-2">12.56</span><span class="module-1">1</span></div>
                <div class="red"><span class="module-3">20.2333</span><span class="module-2">12</span><span class="module-1">2</span></div>
                <div class="red"><span class="module-3">20.233</span><span class="module-2">12.56</span><span class="module-1">3</span></div>
                <div class="red"><span class="module-3">20.2333</span><span class="module-2">12.56</span><span class="module-1">4</span></div>
                <div class="red"><span class="module-3">20.2333</span><span class="module-2">12.56</span><span class="module-1">5</span></div>
                <div class="red"><span class="module-3">20.2333</span><span class="module-2">12.56</span><span class="module-1">6</span></div>
            </div>
            <div class="quotation-list">
                <div class="q-list-title" style="padding-left: 0.5rem"><span>价格</span><span>数量</span></div>
                <div><span class="module-1">1</span><span class="module-2">12.56</span><span class="module-3">20.2333</span></div>
                <div><span class="module-1">2</span><span class="module-2">12</span><span class="module-3">20.2333</span></div>
                <div><span class="module-1">3</span><span class="module-2">12.56</span><span class="module-3">20.2333</span></div>
                <div><span class="module-1">4</span><span class="module-2">12.56</span><span class="module-3">20.2333</span></div>
                <div><span class="module-1">5</span><span class="module-2">12.56</span><span class="module-3">20.23</span></div>
                <div><span class="module-1">6</span><span class="module-2">12.56</span><span class="module-3">20.23</span></div>
            </div>
        </div>
    </div>
    <div class="trade2-content">
        <div class="trade2-c-title">
            <div :class="{'active-buy':isBuy}" @click="choiceType(1)">买入</div>
            <div :class="{'active-sell':!isBuy}" @click="choiceType(0)">卖出</div>
        </div>
        <div class="trade2-c-part" v-if="isBuy">
            <div class="trade2-c-num">4534.3542</div>
            <div class="trade2-c-price">￥23344.34342</div>
            <div class="trade2-c-input">
                <div>
                    <input type="text" placeholder="委托价格">
                    <div class="pt-c-style">折合CNY <span>￥0.00</span></div>
                </div>
                <div>
                    <input type="text" placeholder="委托数量">
                    <div class="pt-c-style">交易额 <span>0.00</span></div>
                </div>
            </div>
            <div class="trade2-c-info">
                <div>
                    <div class="pt-c-style">可用EOS <span>0.12312</span></div>
                    <div class="pt-c-style">可用QC <span>820</span></div>
                </div>
                <div>
                    <div class="pt-c-btn">确定买入</div>
                </div>
            </div>
        </div>
        <div class="trade2-c-part" v-if="!isBuy">
            <div class="trade2-c-num trade2-c-num-sell">4534.3542</div>
            <div class="trade2-c-price trade2-c-price-sell">￥23344.34342</div>
            <div class="trade2-c-input">
                <div>
                    <input type="text" placeholder="委托价格">
                    <div class="pt-c-style">折合CNY <span>￥0.00</span></div>
                </div>
                <div>
                    <input type="text" placeholder="委托数量">
                    <div class="pt-c-style">交易额 <span>0.00</span></div>
                </div>
            </div>
            <div class="trade2-c-info">
                <div>
                    <div class="pt-c-style">可用EOS <span>0.12312</span></div>
                    <div class="pt-c-style">可用QC <span>820</span></div>
                </div>
                <div>
                    <div class="pt-c-btn pt-c-btn-sell">确定卖出</div>
                </div>
            </div>
        </div>
        <div class="trade2-entrust">
            <div class="entrust-type">
                <div :class="{'active-entrust':isCurrentEntrust}" @click="choiceEntrust(1)">当前委托 <span></span></div>
                <div :class="{'active-entrust':!isCurrentEntrust}" @click="choiceEntrust(0)">历史委托 <span></span></div>
            </div>
            <div class="entrust-list" v-if="isCurrentEntrust">
                <div class="entrust-li">
                    <div class="entrust-li-title">05-23 2018</div>
                    <div class="entrust-li-content">
                        <div class="entrust-li-text"><span class="entrust-li-text-buy">买入</span><span class="entrust-li-text-block">EOS 8.00</span><span>成交数量</span><span class="entrust-li-text-buy">EOS 8.00</span></div>
                        <div class="entrust-li-text"><span>委托价格</span><span class="entrust-li-text-block">5000.00 QC</span><span>成交价格</span><span class="entrust-li-text-buy">5000.00 CNY</span></div>
                    </div>
                </div>
            </div>
            <div class="entrust-list" v-if="!isCurrentEntrust">
                <div class="entrust-li">
                    <div class="entrust-li-title">05-23 2018</div>
                    <div class="entrust-li-content">
                        <div class="entrust-li-text"><span class="entrust-li-text-sell">卖出</span><span class="entrust-li-text-block">EOS 8.00</span><span>成交数量</span><span class="entrust-li-text-sell">EOS 8.00</span></div>
                        <div class="entrust-li-text"><span>委托价格</span><span class="entrust-li-text-block">5000.00 QC</span><span>成交价格</span><span class="entrust-li-text-sell">5000.00 CNY</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import '../style/trade2.less'
    import topNavCpt from '../components/topNavCpt'
    export default{
        data: function () {
            return {
                isBuy:true,
                isCurrentEntrust:true,
            }
        },
        components:{topNavCpt},
        methods: {
            choiceType (type){
                this.isBuy = !!type;
            },
            choiceEntrust (type){
                this.isCurrentEntrust = !!type;
            },
            release (){
                this.$router.push('/trade2/releaseTrade');
            }
        },
        mounted (){
        }
    }
</script>