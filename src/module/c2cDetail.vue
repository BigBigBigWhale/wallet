<template>
<div class="c2cDetail inputModule">
    <div v-if="isFinish" class="c2cDetail-box">
        <div class="c2cDetail-box-title">
            <div class="lightFont">汇款单</div>
            <div class="grayFont"><span class="redFont">￥1000.00</span>待支付</div>
        </div>
        <div class="c2cDetail-box-content">
            <div><span class="grayFont">收款方户名</span><span class="lightFont">王二狗</span></div>
            <div><span class="grayFont">开户银行</span><span class="lightFont">招商银行</span></div>
            <div><span class="grayFont">收款账户</span><span class="lightFont">23793792334343434343</span></div>
            <div><span class="grayFont">汇款必备 <span class="lightFont">&nbsp;必填</span></span><span class="redFont">奥斯卡到静安寺</span></div>
        </div>
    </div>
    <div v-if="!isFinish" class="c2cDetail-box-else">
        <div class="c2cDetail-box-else-cost">
            <div class="hasBottom"><span class="grayFont">您需要支付</span><span class="lightFont"><span class="redFont">10000.00</span> ETH.E</span></div>
            <div><span class="grayFont">收款地址：</span><span class="lightFont" v-clipboard="costAddress">复制</span></div>
            <div class="hasBottom lightFont c2cDetail-box-else-cost-address">{{costAddress}}</div>
        </div>
        <div class="c2cDetail-box-else-tips">
            支付完成后填寫下列信息
        </div>
        <div class="input-box"><label for="account">会员账号：</label><input id="account" type="text" placeholder="请输入会员账号"></div>
        <div class="input-box"><label for="money">充值金额：</label><input id="money" type="text" placeholder="请输入充值金额"></div>
        <div class="c2cDetail-box-else-img">
            <div class="auth-box-update" @click="upVuncher()" v-if="!voucherImg"><img src="../assets/icon/icon-camera.png" alt="">上传凭证</div>
            <img class="auth-update-img" @click="upVuncher()" :src="voucherImg" alt="" v-if="voucherImg">
        </div>
        <button class="defaultBtnBackground">完成提交</button>
        <input type="file" id="voucher" name="file" style="display: none;" @change="uploaVoucher" accept="image/jpeg">
    </div>
</div>
</template>

<script>
    import '../style/c2cDetail.less'
    import getBase64 from '../components/getBase64';
    import $ from 'jquery'
    export default{
        data: function () {
            return {
                isFinish:false,
                costAddress:'asdasdasdasdethdvkiorwhfbhxcvyefhbgefhcuewiubuwiegifbwufguwubef',
                voucherImg:''
            }
        },
        methods: {
            getBase64 :getBase64,
            upVuncher(){
                $('#voucher').click();
            },
            uploaVoucher(){
                if(event.target.files.length>0){
//              this.files = event.target.files[0];  //提交的图片
                    this.getBase64(event.target,(url)=>{
                        this.voucherImg = 'data:image/png;base64,'+url;   //显示的图片
                    });
                }
            },
        },
        mounted (){
        }
    }
</script>