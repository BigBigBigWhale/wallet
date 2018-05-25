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
        <input type="text" name="user" placeholder="手机号">
      </div>
      <div class="login-input-box">
        <input type="password" name="password" placeholder="密码">
      </div>
      <button type="submit">登录</button>
      <div class="login-tips">
        <span>注册账号</span><span>忘记密码</span>
      </div>
    </form>
  </div>
</template>

<script>
    import '../style/login.less'
    export default {
        name:'login',
        data: function () {
            return {

            }
        }
    }
</script>
