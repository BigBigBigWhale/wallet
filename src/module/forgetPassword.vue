<template>
  <div class="login">
    <div class="login-title">
      <div class="to-register">
        <router-link to="/register">注册账号</router-link>
      </div>
      忘记密码
      <div class="language" @click="isChoiceLanguage=!isChoiceLanguage">
        <img src="../assets/icon/icon-china.png" alt="" v-if="language=='zh'">
        <img src="" alt="" v-else>
        <div class="language-opt" v-if="isChoiceLanguage">
          <ul>
            <li @click="choiceLanguage('zh')">中文 <img src="../assets/icon/icon-china.png" alt=""></li>
            <li @click="choiceLanguage('en')">英语 <img src="../assets/icon/icon-china.png" alt=""></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="login-sign">
      <img src="../assets/images/icon-login-logo.png" alt="">
    </div>
    <form>
      <div class="login-input-box">
        <label for="password">新密码</label>
        <input type="password" id="password" name="password" placeholder="请输入新密码" v-model="password">
      </div>
      <div class="login-input-box">
        <label for="confirmPassword">确认密码</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="请再次输入新密码" v-model="confirmPassword">
      </div>
      <div class="login-input-box">
        <label for="qrcode">验证码</label>
        <input type="text" id="qrcode" name="qrcode" class="qrcode-input" placeholder="请输入手机验证码" v-model="qrcode">
        <span class="login-input-box-code" @click="getCode()">{{waitCode?waitCodeTime+'s':'获取验证'}}</span>
      </div>

      <button type="submit" @click.prevent="submit()">提交</button>
    </form>
  </div>
</template>

<script>
  import '../style/login.less'
  import '../style/register.less'
  import VerifyRule from '../components/verifyRule'
  export default{
    name:'forget-passowrd',
    data () {
      return {
        password:'',
        confirmPassword:'',
        qrcode:'',
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
      submit (){
        var result = VerifyRule([
          {name:'password',rule:[{type:'required',message:'请输入新密码'}],value:this.password},
          {name:'confirmPassword',rule:[{type:'required',message:'请确认新密码'},{type:'identical',
            message:'两次输入密码不同，请重新输入',opt:this.password}],value:this.confirmPassword},
          {name:'qrcode',rule:[{type:'required',message:'请输入验证码'}],value:this.qrcode},
        ]);
        if(result.success){
          //TODO 访问忘记密码接口
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
