<template>
<div class="spotGoods listModule">
    <div class="spotGoods-top">
        <div>
            <p>现货资产</p>
            <p>￥0.00</p>
            <p>$0.00</p>
        </div>
    </div>
    <div class="spotGoods-menu">
        <div class="spotGoods-menu-search"><input type="text" placeholder="搜索币种"><span><img src="../assets/icon/icon-search.png" alt=""></span></div><span>隐藏资产 <span class="hidden-btn"><span></span></span></span>
    </div>
    <div style="height: 0.2rem;background-color: #fff"></div>
    <div class="list-box">
        <div class="list-box-title">
            <router-link to="/personal/bill">查看账单</router-link>
            <router-link to="/personal/withdraw">去提币</router-link>
            <router-link to="/personal/charge">去充币</router-link>
        </div>
        <div class="list-box-content">
            <div class="spotGoods-box-one"><span>USDT</span><span>￥0.00</span></div>
            <div class="spotGoods-box-two"><span>冻结 &nbsp;&nbsp;￥5000.00</span><span>折合 ￥0.00</span></div>
        </div>
    </div>
</div>
</template>

<script>
    import '../style/spotGoods.less'
    export default{
        data: function () {
            return {}
        },
        methods: {},
        mounted (){
        }
    }
</script>