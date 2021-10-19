<template>
  <el-row>
    <el-col :span="24">
      <div class="top-nav-bar">
        <div>
          <logo class="logo"></logo>
          <main-tab-bar class="main-tab-bar"></main-tab-bar>
          <search class="search"></search>
          <login class="login"></login>
        </div>
      </div>
    </el-col>
     <el-col :xs='24' :sm='0' :span="24">
      <div class="top-nav-bar">
        <div>
          <logo class="logo"></logo>
          <div class="nick">爱生活，爱自己</div>
          <main-tab-bar class="main-tab-bar"></main-tab-bar>
          
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Logo from "../logo/Logo";
import MainTabBar from "../mainTabbar/MainTabBar";
import Search from "../search/Search";
import Login from "../login/Login";
export default {
  name: "TopNavBar",
  components: {
    Logo,
    MainTabBar,
    Search,
    Login,
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .logo {
    width: 36% !important;
    padding-left: 0.714286rem;
  }
}
.nick{
  white-space: nowrap;
  margin-left: .714286rem;
  color: #8c8c8c;
  font-size: 1rem;
}
.top-nav-bar {
  height: 3.57rem;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  border-bottom: 1px solid #ddd;
}
.main-tab-bar {
  width: 55%;
  position: relative;
  left: -1%;
}
.top-nav-bar > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 980px; */
  max-width: 980px;
  margin: 0 auto;
  height: 100%;
}
.logo {
  width: 12%;
}
.search {
  width: 20%;
}
.login {
  width: 8%;
}
</style>
