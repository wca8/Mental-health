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
  components: {
    MyFooter,
    MainBox,
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .Question-details {
    background-color: #fff!important;
  }
}
.Question-details {
  padding-top: 3.75rem;
  background-color: rgb(243, 243, 245);
  min-height: 800px;
}
</style>
