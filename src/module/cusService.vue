<template>
  <div class="trade cusService">
    <div class="trade-nav">
      <span class="trade-nav-left" @click="backBtn()"><img src="../assets/icon/icon-back.png" alt=""/>返回</span>
      客服
      <router-link to="/personal/record"><span class="trade-nav-right">反馈记录</span></router-link>
    </div>
    <div class="info">您有任何意见或者建议都可以反馈给我们。客服将在24小时内回复</div>
    <textarea class="serviceTxt" name="" id=""  rows="10"></textarea>
    <a class="submit" href="#">提交</a>
  </div>
</template>

<script>
  import '../style/cusService.less'
  export default{
    data(){
      return{

      }
    },
    methods:{
      backBtn (){//头部导航的返回按钮
        this.$router.back();
      }
    }
  }
</script>
