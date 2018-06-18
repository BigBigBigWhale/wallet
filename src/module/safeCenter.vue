<template>
  <div class="setUp">
    <ul class="setUpbox clearfix">
      <router-link to="/personal/loginEditpwd"><li>登录密码设置</li></router-link>
      <router-link to="/personal/capitalEditpwd"><li>资金密码设置</li></router-link>
      <router-link to="/personal/googleCode"><li>谷歌验证设置</li></router-link>
      <a href="javascript:void(0)" @click="needDevelop()"><li class="m34">登录验证设置</li></a>
      <a href="javascript:void(0)" @click="needDevelop()"><li>提现验证设置</li></a>
      <a href="javascript:void(0)" @click="needDevelop()"><li>交易验证设置</li></a>
    </ul>
  </div>
</template>

<script>
  import '../style/setUp.less'
  export default{
    data (){
      return{

      }
    },
    methods :{
      needDevelop (){
        alert('等待开放，敬请期待。')
      }
    },
    mounted(){

    }
  }
</script>
