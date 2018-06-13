<template>
  <div class="setUp">
    <ul class="setUpbox clearfix iput">
      <li><label>旧登录密码</label><input type="text" placeholder="请输入旧登录密码"/></li>
      <li><label>新资金密码</label><input type="text" placeholder="请输入新资金密码"/></li>
      <li><label>二次输入&nbsp;&nbsp;</label><input type="text" placeholder="请再次输入资金密码"/></li>
      <li><label>邮箱验证码</label><input type="text" placeholder="请输入邮箱验证码"/><a class="sendCode" href="#">获取验证码</a></li>
    </ul>
    <a class="iputSubmit" href="#">确认修改</a>
  </div>
</template>

<script>
  import '../style/setUp.less'
  import '../style/iput.less'
  export default{
    data (){
      return{

      }
    },
    methods :{

    },
    mounted(){

    }
  }
</script>
