<template>
    <div class="assets">
        <div class="assets-top">
            <div class="assets-top-circle">

            </div>
            <div class="assets-top-desc">
                <div><span class="assets-block-yellow"></span>现货 ￥0.00</div>
                <div><span class="assets-block-violet"></span>杠杆 ￥0.00</div>
            </div>
        </div>
        <div class="assets-list">
            <router-link to="/personal/c2c" class="assets-li"><img src="../assets/icon/icon_c2c.png" alt="">C2C交易</router-link>
            <router-link to="/personal/spotGoods" class="assets-li"><img src="../assets/icon/icon_xhzc.png" alt="">现货资产</router-link>
            <a class="assets-li" href="javascript:void(0)" @click="needDevelop()"><img src="../assets/icon/icon_otc.png" alt="">OTC交易</a>
            <a class="assets-li" href="javascript:void(0)" @click="needDevelop()"><img src="../assets/icon/icon_ggzc.png" alt="">杠杆资产</a>
            <a class="assets-li" href="javascript:void(0)" @click="needDevelop()"><img src="../assets/icon/icon_luck.png" alt="">抽奖</a>
        </div>

    </div>
</template>

<script>
    import '../style/assets.less'
    export default{
        data: function () {
            return {}
        },
        methods: {
            needDevelop (){
                alert('等待开放，敬请期待。')
            }
        },
        mounted (){
        }
    }
</script>