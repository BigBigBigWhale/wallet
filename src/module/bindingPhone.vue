<template>
  <div class="setUp">
    <ul class="setUpbox clearfix iput">
      <li><label>手机号</label><input type="text" placeholder="15809348945"/></li>
      <li><label>验证码</label><input type="text" placeholder="请输入验证码"/><a class="sendCode" href="#">获取验证码</a></li>
    </ul>
    <a class="iputSubmit" href="#">确认绑定</a>
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
