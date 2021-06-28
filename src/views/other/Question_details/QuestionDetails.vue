<template>
  <div class="Question-details">
    <div class="main">
      <main-box></main-box>

    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from "../../../components/content/footer/MyFooter";
import MainBox from "./child/MainBox";
export default {
  name: "QuestionDetails",
  components:{
    MyFooter,
    MainBox,

  }
}
</script>

<style scoped>
.Question-details{
  padding-top: 72px;
  background-color: rgb(243,243,245);
  min-height: 800px;
}
</style>