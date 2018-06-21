<template>
<div class="trade c2c">
    <div class="trade-nav">
        <span class="trade-nav-left cusService-left" @click="backBtn()"><img src="../assets/icon/icon-back.png" alt=""/>返回</span>
        C2C交易
        <router-link to="/personal/c2cRecord"><span class="trade-nav-right">交易记录</span></router-link>
    </div>
    <div class="c2c-type">
        <button :class="{'active-btn':isBuy}" @click="choiceType(1)">买入QC</button>
        <button :class="{'active-btn':!isBuy}" @click="choiceType()">卖出QC</button>
    </div>
    <div class="c2c-module" v-if="isBuy">
        <div><label for="price">价格</label><div><input id="price" readonly type="text" :value="buyPrice" style="color: red"><span>CNY</span></div></div>
        <div><label for="price">数量</label><div><input id="price" type="text" v-model="number" placeholder="请输入购买数量"><span>QC</span></div></div>
        <button style="background-color: #fb3131">确认购买</button>
    </div>
    <div class="c2c-module" v-if="!isBuy">
        <div><label for="price">价格</label><div><input id="price" readonly type="text" :value="sellPrice" style="color: red"><span>CNY</span></div></div>
        <div><label for="price">数量</label><div><input id="price" type="text" v-model="number" placeholder="请输入出售数量"><span>QC</span></div></div>
        <button style="background-color: #4af476">确认出售</button>
    </div>
    <div style="height: 0.1rem;background-color: #fff"></div>
    <div class="c2c-explain">
        <div class="c2c-explain-title">买卖说明</div>
        <div>
            <p>1.世界上唯一可不劳而获的就是贫穷，唯一可以无中生有的是梦想。没有哪件事，不动手就可以实现。世界虽然残酷，</p>
            <p>2.但只要你愿意走，总会有路；看不到美好，是因为你没有坚持走下去。</p>
            <p>3.前进不必遗憾，若是美好，叫做精彩；若是糟糕，叫做经历。</p>
        </div>
    </div>

</div>
</template>

<script>
    import '../style/c2c.less'
    export default{
        data: function () {
            return {
                isBuy:true,
                buyPrice:'1.00',
                sellPrice:'0.99',
                number:''
            }
        },
        methods: {
            backBtn (){//头部导航的返回按钮
                this.$router.back();
            },
            choiceType (type){
                this.isBuy = !!type;
            }
        },
        mounted (){
        }
    }
</script>