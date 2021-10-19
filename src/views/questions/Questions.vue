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
@media screen and (max-width: 768px) {
  .questios{
    background-color: #fff!important;
  }
}
.questios{
  padding-top:3.75rem;
  min-height: 800px;
  background-color: rgba(243,243,243);
}
</style>