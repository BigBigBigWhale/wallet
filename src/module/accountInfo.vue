<template>
  <div class="setUp">
    <ul class="setUpbox clearfix">
      <li class="liTitle">我的广告</li>
      <router-link to="/personal/buyAd"><li>购买广告</li></router-link>
      <router-link to="/personal/sellAd"><li>出售广告</li></router-link>
      <li class="liTitle" >完成订单</li>
      <router-link to="/personal/buyAded"><li>已购买订单</li></router-link>
      <router-link to="/personal/sellAded"><li>已出售订单</li></router-link>
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
