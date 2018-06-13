<template>
  <div class="setUp">
    <ul class="setUpbox clearfix">
      <li><router-link to="/">修改信息</router-link></li>
      <li><router-link to="/">手机号</router-link></li>
      <li><router-link to="/">邮箱验证</router-link></li>
      <li class="m34"><router-link to="/personal/company">公司简介</router-link></li>
      <li><router-link to="/personal/agreement">协议声明</router-link></li>
      <li class="m34"><router-link to="/personal/versionUpdate">版本更新</router-link></li>
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

    },
    mounted(){

    }
  }
</script>
