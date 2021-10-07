<template>
  <div class="login">

    <div class="main">
      <logo class="logo-img"></logo>
      <div class="main-btn">
        <div class="title">
          <div><router-link tag="div"  to="/login/mailbox">邮箱登录</router-link></div>
          <div><router-link tag="div" to="/login/username">用户名登录</router-link></div>

        </div>
        <keep-alive>
          <router-view/>
        </keep-alive>
        <div class="registered">

          <div><router-link tag="div"  to="/registered">邮箱注册</router-link></div>
          <div><router-link tag="div"  to="/NameRegistered">用户名注册</router-link></div>
          <div><router-link tag="div"  to="/RetrievePassword">找回密码</router-link></div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Logo from "../../../components/content/logo/Logo";
import MyFooter from "../../../components/content/footer2/MyFooter";
export default {
  name: "Login",
  components:{
    Logo,
    MyFooter
  },
  methods:{

  }
}
</script>

<style scoped>
.login{
  position: relative;
  min-height: 100vh;
  background-color: rgb(247,247,247);
  z-index: 2001;
  padding-top: 40px;
}
.main{
  width: 350px;
  margin: 0px auto;
  min-height: 560px;
}
.main-btn{
  background-color: #fff;
  height: 100%;
  margin-top: 20px;
}
/*.logo-img{*/
/*  width: 100px;*/
/*}*/
.logo-img  >>>  img{
  width: 40%!important;
}
.title{
  display: flex;

}
.title>div{
  flex: 1;
  text-align: center;
  line-height: 60px;
  box-sizing: border-box;
  cursor: pointer;
}
.router-link-active{
  color: rgb(74,179,68);
  border-bottom: 4px solid rgb(74,179,68);
}
.registered{
  justify-content: flex-end;
  display: flex;
  padding: 30px;
}
.registered>div{
  margin-left: 18px;
  font-size: 14px;
  text-align: right;
  cursor: pointer;
  color: #555454;
}
</style>