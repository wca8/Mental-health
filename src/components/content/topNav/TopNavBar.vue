<template>
  <div class="top-nav-bar">
      <div>
        <logo class="logo"></logo>
        <main-tab-bar class="main-tab-bar"></main-tab-bar>
        <search class="search"></search>
        <login class="login"></login>
      </div>
  </div>
</template>

<script>
import Logo from "../logo/Logo";
import MainTabBar from "../mainTabbar/MainTabBar";
import Search from "../search/Search";
import Login from "../login/Login";
export default {
  name: "TopNavBar",
  components:{
    Logo,
    MainTabBar,
    Search,
    Login,
  }
}
</script>

<style scoped>
.top-nav-bar{
  height: 72px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  border-bottom: 1px solid #ddd;
}
.main-tab-bar{
  width:60%;
  position: relative;
  left: -2%;

}
.top-nav-bar>div{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 980px;
  min-width: 980px;
  margin: 0 auto;
  height: 100%;
}
.logo{
  width: 7.5%;
}
.search{
  width: 20%;
}
.login{
  width: 8%;
}
</style>