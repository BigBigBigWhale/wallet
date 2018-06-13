<template>
  <div class="setUp">
    <ul class="setUpbox clearfix">
      <li class="liTitle"><router-link to="/">我的广告</router-link></li>
      <li><router-link to="/">购买广告</router-link></li>
      <li><router-link to="/">出售广告</router-link></li>
      <li class="liTitle" ><router-link to="/">完成订单</router-link></li>
      <li><router-link to="/">已购买订单</router-link></li>
      <li><router-link to="/">已出售订单</router-link></li>
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
