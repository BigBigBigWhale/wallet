<template>
    <div class="invite trade">
        <div class="trade-nav">
            <span class="trade-nav-left cusService-left" @click="backBtn()"><img src="../assets/icon/icon-back.png" alt=""/>返回</span>
            邀請
            <span class="trade-nav-right" @click="openShare()"><img src="../assets/icon/icon-share.png" alt=""></span>
        </div>
        <div class="invite-box">
            <div class="invite-title">推荐好友点击链接注册</div>
            <div class="invite-address">{{invitationAddress}}</div>
            <button v-clipboard="invitationAddress">复制地址</button>
            <div class="incite-share">
                <img src="../assets/images/share-background.png" alt="">
            </div>
        </div>
        <div class="invite-box">
            <div class="invite-title">好友注册推荐码</div>
            <div class="invite-address">{{invitationCode}}</div>
            <button v-clipboard="invitationCode">复制邀请码</button>
            <div class="incite-share">
                <img src="../assets/images/share-background.png" alt="">
            </div>
        </div>
        <div class="invite-box">
            <div class="invite-title">扫描二维码注册</div>
            <div class="incite-code">
                <img src="../assets/images/home-back.png" alt="">
            </div>
        </div>

        <Cover ref="cover">
            <div class="invite-window">
                <div class="invite-window-title">分享给好友</div>
                <div class="invite-window-content">
                    <div @CLICK="shareQQ()"><img src="../assets/icon/icon-qqhy.png" alt="">QQ好友</div>
                    <div @CLICK="shareSpace()"><img src="../assets/icon/icon-qqkj.png" alt="">QQ空间</div>
                    <div @CLICK="shareWechat()"><img src="../assets/icon/icon-weixin.png" alt="">微信好友</div>
                    <div @CLICK="shareCircle()"><img src="../assets/icon/icon-friend.png" alt="">朋友圈</div>
                </div>
            </div>
        </Cover>
    </div>
</template>

<script>
    import '../style/invite.less'
    import Cover from '../components/cover.vue';
    export default{
        data: function () {
            return {
                invitationAddress:'asdasdasdqdjauisdhasjkdioasuhdua;sdjkf;haps',
                invitationCode:'奥术大师大所阿萨德梵蒂冈是个是大法官',
            }
        },
        components:{
            Cover
        },
        methods: {
            backBtn (){//头部导航的返回按钮
                this.$router.back();
            },
            openShare (){
                this.$refs.cover.show();
            },
            shareQQ (){

            },
            shareSpace (){

            },
            shareWechat (){

            },
            shareCircle (){

            },
        },
        mounted (){

        }
    }
</script>