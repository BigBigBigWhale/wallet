<template>
  <div class="personal">
      <div class="personal-top">
          <div class="user-portrai"><img src="../assets/images/default-head-portrait.png" alt=""></div>
          <div class="user-name"><router-link to="/login">登陆</router-link> / <router-link to="/register">注册</router-link></div>
      </div>
      <router-link to="/personal/notice" class="personal-news">
          <div class="personal-news-icon"><span></span></div>
          <div class="personal-news-content">官方公告：ETH.E为下一个热门密码货币</div>
      </router-link>
      <div class="personal-list personal-function">
          <router-link to="/personal/safeCenter" class="personal-li">
              <div class="personal-li-icon"></div><div class="personal-li-name">安全中心</div>
          </router-link>
          <router-link to="/" class="personal-li">
              <div class="personal-li-icon"></div><div class="personal-li-name">身份认证</div>
          </router-link>
          <router-link to="/" class="personal-li">
              <div class="personal-li-icon"></div><div class="personal-li-name">账户信息</div>
          </router-link>
          <router-link to="/" class="personal-li">
              <div class="personal-li-icon"></div><div class="personal-li-name">邀请</div>
          </router-link>
          <router-link to="/personal/cusService" class="personal-li">
              <div class="personal-li-icon"></div><div class="personal-li-name">客服</div>
          </router-link>
          <router-link to="/" class="personal-li">
              <div class="personal-li-icon"></div><div class="personal-li-name">算力明细</div>
          </router-link>
          <router-link to="/" class="personal-li">
              <div class="personal-li-icon"></div><div class="personal-li-name">资产</div>
          </router-link>
          <router-link to="/" class="personal-li">
              <span class="personal-li-news"></span>
              <div class="personal-li-icon"></div><div class="personal-li-name">我的订单</div>
          </router-link>
          <router-link to="/personal/setUp" class="personal-li">
              <div class="personal-li-icon"></div><div class="personal-li-name">设置中心</div>
          </router-link>
      </div>
      <div class="personal-subtitle">友情链接</div>
      <div class="personal-list personal-link">
          <router-link to="/" class="personal-li">
              <div class="personal-li-icon"></div><div class="personal-li-name">我的订单</div>
          </router-link>
          <router-link to="/" class="personal-li">
              <div class="personal-li-icon"></div><div class="personal-li-name">设置中心</div>
          </router-link>
          <router-link to="/" class="personal-li">
              <div class="personal-li-icon"></div><div class="personal-li-name">设置中心</div>
          </router-link>
      </div>
  </div>
</template>

<script>
    import '../style/personal.less'
    export default{
      name: 'Personal',
        data: function () {
            return {

            }
        }
    }
</script>
