<template>
  <div class="setUp">
    <ul class="setUpbox clearfix iput">
      <li><label>密匙</label><input type="text" value="ABCEDKPWEWLSDFE"/><a class="sendCode" href="#">复制</a></li>
      <li><label>谷歌验证码</label><input type="text" placeholder="请输入谷歌验证码"/><a class="sendCode" href="#">粘贴</a></li>
      <li><label>邮箱验证码</label><input type="text" placeholder="请输入邮箱验证码"/><a class="sendCode" href="#">获取验证码</a></li>
    </ul>
    <div class="googleTxt">
      <p class="title">使用方法</p>
      <p class="info">1、下载安装“<span><a href="baidu.com">Google Authenticator</a></span>”应用程序，点击右上角“<span>+</span>”号，然后选择“<span>手动输入验证码</span>”</p>
      <p class="info">2、粘贴上面的“密匙”到<span>谷歌验证器</span>“密匙”中，并填写您的账号，点击完成。</p>
      <p class="info">3、复制“<span>谷歌验证码</span>”，粘贴到上面的“<span>谷歌验证码</span>”输入栏。再输入您获取到的<span>邮箱验证码</span>，即可开启谷歌验证</p>
    </div>
    <a class="iputSubmit" href="#">开启谷歌验证</a>
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
