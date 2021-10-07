<template>
  <div id="app">
    <keep-alive exclude="myPay">
      <router-view/>
    </keep-alive>
    <top-nav-bar></top-nav-bar>

    <tips  v-if="flag"></tips>


  </div>
</template>
<script>
  import MainTabBar from "./components/content/mainTabbar/MainTabBar";
  import TopNavBar from "./components/content/topNav/TopNavBar";
  import Tips from "./components/common/tips/Tips";
  export default {
    name: 'App',
    components:{
      MainTabBar,
      TopNavBar,
      Tips,
    },
    data(){
      return{
        h:null,
        flag:false,
      }
    },
    created() {
      this.setFlag()
    },
    methods:{
      setFlag(){
        this.$nextTick(()=>{
          this.h=window.innerWidth;
          if(this.h<768){
            this.flag=true
          }else{
            this.flag=false
          }
        })
      }
    },
    mounted() {
      window.addEventListener('resize',this.setFlag)
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.setFlag)
    },

  }
</script>
<style>
@import "assets/css/normalize.css";
@import "//at.alicdn.com/t/font_2600984_fgo5re3e3ya.css";
</style>
