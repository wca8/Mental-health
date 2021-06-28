<template>
  <div class="Ask-questions">
    <main-box></main-box>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MainBox from "./child/MainBox";
import MyFooter from "../../../components/content/footer/MyFooter";
export default {
  name: "AskQuestions",
  components:{
    MainBox,
    MyFooter,
  }
}
</script>

<style scoped>
.Ask-questions{
  padding-top: 72px;
  min-height: 900px;
  background-color: rgba(243,243,243,1);
}
</style>