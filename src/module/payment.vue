<template>
    <div class="payment">
        <div class="payment-desc">请在剩余时间内完成付款 <span>付款剩余：<span>29:59</span></span></div>
        <div class="payment-title payment-price"><div class="payment-color">￥0.434</div><div>5000.00 ETH.E</div><div>5000 CNY</div></div>
        <div class="payment-title payment-name"><div>单价</div><div>数量</div><div>总额</div></div>
        <div class="payment-info">
            <div>付款方式：<span>支付宝</span></div>
            <div>订单编号：<span>123123123</span></div>
        </div>
        <div class="payment-chat">
            <div class="payment-chat-top">卖家： 张三</div>
            <div class="payment-chat-content">
                <div class="chat-he"><img src="../assets/images/home-back.png" alt=""> <span>黑噁黑</span></div>
                <div class="chat-me"><img src="../assets/images/home-back.png" alt=""> <span>呀呀呀呀呀</span></div>
                <div class="chat-he"><img src="../assets/images/home-back.png" alt=""> <span>黑噁黑黑噁黑黑噁黑黑噁黑黑噁黑黑噁黑黑噁黑黑噁黑黑噁黑黑噁黑</span></div>
                <div class="chat-me"><img src="../assets/images/home-back.png" alt=""> <span>呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀
                    呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀呀</span></div>
                <div class="chat-me"><img src="../assets/images/home-back.png" alt=""> <span>呀呀呀呀呀</span></div>
                <div class="chat-me"><img src="../assets/images/home-back.png" alt=""> <span>呀呀呀呀呀</span></div>
            </div>
            <div class="payment-chat-bottom">
                <img src="../assets/icon/icon-image.png" alt="">
                <div>
                    <input type="text"><span @click="sideShow=!sideShow"><img src="../assets/icon/icon-side-ash.png" alt=""></span>
                    <div class="side-box" v-if="sideShow">
                        <p>后台数据后台数据后台数据后</p>
                        <p>后台数据后台数据后台数据后</p>
                        <p>后台数据后台数据后台数据后</p>
                        <p>后台数据后台数据后台数据后</p>
                        <p>后台数据后台数据后台数据后</p>
                    </div>
                </div>
                <button>发送</button>
            </div>
        </div>
        <div class="payment-tips">
            <div class="payment-tips-title">交易提示</div>
            <p>1、对方的数字币已被托管锁定，您需要在规定时间内完成付款
                ，否则交易将自动取消</p>
            <p>
                2、转账时请在留言上附上订单编号，否则对方可能无法识别您
                的付款
            </p>
        </div>
        <div class="payment-btn">
            <button class="payment-btn-cancel">取消订单</button>
            <button class="payment-btn-ok">确认付款</button>
        </div>
    </div>
</template>

<script>
    import '../style/payment.less'
    export default{
        data: function () {
            return {
                sideShow:false,
                commentShow:false,
            }
        },
        methods: {

        },
        mounted (){
        }
    }
</script>