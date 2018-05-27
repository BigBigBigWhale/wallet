<template>
  <div class="login">
    <div class="login-title">
      登录
      <div class="language">
        <select name="" id="">
          <option value="">简体中文</option>
          <option value="">English</option>
        </select>
      </div>
    </div>
    <div class="login-sign">
      <img src="../assets/login_title.png" alt="">
    </div>
    <form>
      <div class="login-input-box">
        <input type="text" name="user" placeholder="手机号" v-model="username">
      </div>
      <div class="login-input-box">
        <input type="password" name="password" placeholder="密码" v-model="password">
      </div>
      <button type="submit" @click="login()">登录</button>
      <div class="login-tips">
        <router-link to="/register">注册账号</router-link><router-link to="/forget-password">忘记密码</router-link>
      </div>
    </form>
  </div>
</template>

<script>
    import '../style/login.less'
    import globalDate from '../router/globalDate'
    import Storage from '../components/Storage'
    var storage = new Storage('login', window.localStorage);
    export default {
        name:'login',
        data: function () {
            return {
                username:'',
                password:''
            }
        },
      methods:{
        login (){
          event.preventDefault();
          if(this.username&&this.password){
            globalDate.user = this.username;
            storage.set('user',this.username);
            this.$router.push("/");
          }
          }
      }
    }
</script>
