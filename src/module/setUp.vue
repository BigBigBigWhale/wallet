<template>
  <div class="setUp">
    <ul class="setUpbox clearfix">
      <router-link to="/"><li>修改信息</li></router-link>
      <router-link to="/personal/editPhone"><li>手机号</li></router-link>
      <router-link to="/personal/editEmail"><li>邮箱验证</li></router-link>
      <router-link to="/personal/company"><li class="m34">公司简介</li></router-link>
      <router-link to="/personal/agreement"><li>协议声明</li></router-link>
      <router-link to="/personal/versionUpdate"><li class="m34">版本更新</li></router-link>
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
