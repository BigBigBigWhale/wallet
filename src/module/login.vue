<template>
  <div class="login">
    <div class="login-title">
      <div class="to-register">
        <router-link to="/register">注册账号</router-link>
      </div>
      登录
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
      <img src="../assets/images/icon-login-logo.png" alt="logo">
    </div>
    <form>
      <div class="login-input-box">
        <label for="phone">手机号</label>
        <input type="number" name="phone" id="phone" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="login-input-box">
        <label for="password">密码</label>
        <input type="password" name="password" id="password" placeholder="请输入密码" v-model="password">
        <router-link to="/forget-password" class="forget-password">忘记密码</router-link>
      </div>
      <button type="submit" @click.prevent="login()">登录</button>
    </form>
  </div>
</template>

<script>
    import '../style/login.less'
    import globalDate from '../router/globalDate'
    import Storage from '../components/Storage'
    import VerifyRule from '../components/verifyRule'
    import server from '../router/server'
    var storage = new Storage('login', window.localStorage);
    export default {
        name:'login',
        data () {
            return {
                phone:'15755028927',
                password:'12',
                language:'zh',
                isChoiceLanguage:false,
            }
        },
        watch:{
          language (){
              window.localStorage.setItem('language',this.language);
          }
        },
        methods:{
          login (){
            var result = VerifyRule([
              {name:'phone',rule:[{type:'required',message:'请输入手机号'},{type:'phone'}],value:this.phone},
              {name:'password',rule:[{type:'required',message:'请输入密码'}],value:this.password},
              ]);
            if(result.success){
              globalDate.user = this.phone;
              storage.set('user',this.phone);
              //TODO 访问登陆借口
              server.getPhoneCode({user_phone:157827232}).done(res =>{
                console.log(res)
              })
//              this.$router.push("/");
            }else{
              alert(result.message);
            }
          },
          choiceLanguage (type){
              this.language = type;
          }
        },
        created (){
            this.language = window.localStorage.getItem('language') || 'zh';
        }
    }
</script>
