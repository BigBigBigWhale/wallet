<template>
<div class="authentication inputModule">
    <div class="auth-desc">
        请确保您使用本人的真实身份进行验证，我们会保护您的个人信息安全。认证后不可修改
    </div>
    <div class="auth-title">填写信息</div>
    <div class="auth-box">
        <div class="input-box"><label for="">证件地区</label><input type="text"></div>
        <div class="input-box"><label for="">证件姓名</label><input type="text"></div>
        <div class="input-box"><label for="">证件号码</label><input type="text"></div>
    </div>
    <div class="auth-title">上传证件</div>
    <div class="auth-box auth-update">
        <div class="auth-box-update" @click="upFace()" v-if="!faceImg"><img src="../assets/icon/icon-camera.png" alt="">上传正面</div>
        <img class="auth-update-img" @click="upFace()" :src="faceImg" alt="" v-if="faceImg">
        <div class="auth-box-update" @click="upCon()" v-if="!conImg"><img src="../assets/icon/icon-camera.png" alt="">上传反面</div>
        <img class="auth-update-img" @click="upCon()" :src="conImg" alt="" v-if="conImg">
        <div class="auth-box-update" @click="upHold()" v-if="!holdImg"><img src="../assets/icon/icon-camera.png" alt="">手持证件</div>
        <img class="auth-update-img" @click="upHold()" :src="holdImg" alt="" v-if="holdImg">
    </div>
    <button class="auth-btn">提交验证</button>
    <div class="auth-title">上传须知</div>
    <div class="auth-desc">
        请确保您使用本人的真实身份进行验证，我们会保护您的个人信息安全。认证后不可修改
    </div>
    <input type="file" id="face" name="file" style="display: none;" @change="uploadChangeFace" accept="image/jpeg">
    <input type="file" id="con" name="file" style="display: none;" @change="uploadChangeCon" accept="image/jpeg">
    <input type="file" id="hold" name="file" style="display: none;" @change="uploadChangeHold" accept="image/jpeg">
</div>

</template>

<script>
    import '../style/authentication.less'
    import getBase64 from '../components/getBase64';
    import $ from 'jquery'
    export default{
        data: function () {
            return {
                faceImg:'',
                conImg:'',
                holdImg:'',
            }
        },
        methods: {
            upFace(){
                $('#face').click();
            },
            upCon(){
                $('#con').click();
            },
            upHold(){
                $('#hold').click();
            },
            uploadChangeFace(){
                if(event.target.files.length>0){
//              this.files = event.target.files[0];  //提交的图片
                    this.getBase64(event.target,(url)=>{
                        this.faceImg = 'data:image/png;base64,'+url;   //显示的图片
                    });
                }
            },
            uploadChangeCon(event){
                if(event.target.files.length>0){
//              this.files = event.target.files[0];  //提交的图片
                    this.getBase64(event.target,(url)=>{
                        this.conImg = 'data:image/png;base64,'+url;   //显示的图片
                    });
                }
            },
            uploadChangeHold(event){
                if(event.target.files.length>0){
//              this.files = event.target.files[0];  //提交的图片
                    this.getBase64(event.target,(url)=>{
                        this.holdImg = 'data:image/png;base64,'+url;   //显示的图片
                    });
                }
            },
            getBase64 :getBase64,
        },
        mounted (){
        }
    }
</script>