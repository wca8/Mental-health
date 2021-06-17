<template>
  <div id="app">
    <keep-alive exclude="myPay">
      <router-view/>
    </keep-alive>
    <top-nav-bar></top-nav-bar>

  </div>
</template>
<script>
  import MainTabBar from "./components/content/mainTabbar/MainTabBar";
  import TopNavBar from "./components/content/topNav/TopNavBar";
  export default {
    name: 'App',
    components:{
      MainTabBar,
      TopNavBar,
    }
  }
</script>
<style>
@import "assets/css/normalize.css";
@import "//at.alicdn.com/t/font_2600984_s1h4pt2gbs.css";
</style>
