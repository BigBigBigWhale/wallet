<template>
  <div class="resgist login">
    <div class="login-title">
      <div class="to-login">
        <router-link to="/login">直接登录</router-link>
      </div>
      注册
      <div class="language" @click="isChoiceLanguage=!isChoiceLanguage">
        <img src="/src/assets/icon/icon-china.png" alt="" v-if="language=='zh'">
        <img src="" alt="" v-else>
        <div class="language-opt" v-if="isChoiceLanguage">
          <ul>
            <li @click="choiceLanguage('zh')">中文 <img src="/src/assets/icon/icon-china.png" alt=""></li>
            <li @click="choiceLanguage('en')">英语 <img src="/src/assets/icon/icon-china.png" alt=""></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="resgist-sign">
      <img src="/src/assets/icon/icon-resgist-logo.svg" alt="">
    </div>
    <form>
      <div class="login-input-box">
        <label for="user">昵称</label>
        <input type="text" id="user" name="user" placeholder="请输入昵称" v-model="username">
      </div>
      <div class="login-input-box">
        <label for="code">邀请码</label>
        <input type="text" id="code" name="code" placeholder="请输入邀请码" v-model="code">
      </div>
      <div class="login-input-box">
        <label for="phone">手机号</label>
        <input type="number" id="phone" name="phone" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="login-input-box">
        <label for="qrcode">验证码</label>
        <input type="text" id="qrcode" name="qrcode" class="qrcode-input" placeholder="请输入验证码" v-model="qrcode">
        <span class="login-input-box-code" @click="getCode()">{{waitCode?waitCodeTime+'s':'获取验证'}}</span>
      </div>
      <div class="login-input-box">
        <label for="password">登录密码</label>
        <input type="password" id="password" name="password" placeholder="请输入登录密码" v-model="password">
      </div>
      <div class="login-input-box">
        <label for="confirmPassword">确认密码</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="请再次输入登录密码" v-model="confirmPassword">
      </div>
      <button type="submit" @click.prevent="resgister()">注册</button>
    </form>
  </div>
</template>

<script>
    import '../style/login.less'
    import '../style/register.less'
    import VerifyRule from '../components/verifyRule'
    export default{
        name:'register',
        data () {
            return {
              username:'',
              code:'',
              phone:'',
              qrcode:'',
              password:'',
              confirmPassword:'',
              language:'zh',
              isChoiceLanguage:false,
              waitCode:false,
              waitCodeTime:60,
            }
        },
      compouted: {

      },
      watch:{
        language (){
          window.localStorage.setItem('language',this.language);
        }
      },
      methods:{
        resgister (){
          var result = VerifyRule([
            {name:'username',rule:[{type:'required',message:'请输入昵称'}],value:this.username},
            {name:'code',rule:[{type:'required',message:'请输入邀请码'}],value:this.code},
            {name:'phone',rule:[{type:'required',message:'请输入手机号'},{type:'phone'}],value:this.phone},
            {name:'qrcode',rule:[{type:'required',message:'请输入验证码'}],value:this.qrcode},
            {name:'password',rule:[{type:'required',message:'请输入密码'}],value:this.password},
            {name:'confirmPassword',rule:[{type:'required',message:'请再次输入密码'}],value:this.confirmPassword},
          ]);
          if(result.success){
          //TODO 上传注册数据
            this.$router.push("/login");
          }else{
            alert(result.message);
          }
        },
        choiceLanguage (type){
          this.language = type;
        },
        getCode (){
            if(this.waitCode){
              return false;
            }
            this.waitCode = true;
          //todo 请求验证码接口
            let hint = setInterval(function () {
                if(this.waitCodeTime>0){
                  this.waitCodeTime -= 1;
                }else{
                  clearInterval(hint);
                  this.waitCode = false;
                }
            }.bind(this),1000)
        },
      },
      created (){
        this.language = window.localStorage.getItem('language') || 'zh';
      }
    }
</script>
