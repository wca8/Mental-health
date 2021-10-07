<template>
  <div class="questios">
    <main-box></main-box>
    <my-footer></my-footer>
    <back-top @click.native="backClick"></back-top>
  </div>
</template>

<script>
import MainBox from "./child/MainBox";
import MyFooter from "../../components/content/footer/MyFooter";
import BackTop from "../../components/content/backTop/BackTop"


export default {
  name: "Questions",
  components:{
    MainBox,
    MyFooter,
    BackTop,
  },
  created() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },

  methods:{
    backClick(){
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
  }
}
</script>

<style scoped>
.questios{
  padding-top: 72px;
  min-height: 800px;
  background-color: rgba(243,243,243);
}
</style>