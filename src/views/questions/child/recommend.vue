<template>
  <div class="recommend">
    <div class="main">
      <div class="top">
        <el-button @click="goAskClick" icon="el-icon-edit" type="success">我要提问</el-button>
        <el-button @click="replyClick" icon="el-icon-edit-outline" type="success">我要回答</el-button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  methods:{
    goAskClick(){
      let routeData = this.$router.resolve({ path:'/AskQuestions'});
      window.open(routeData.href, '_blank');
    },
    replyClick(){
      let routeData = this.$router.resolve({ path:'/questions'});
      window.open(routeData.href, '_blank');
    }
  }
}
</script>

<style scoped>
.main{
  padding-top: 30px;
}
.top{
  display: flex;
  justify-content: space-evenly;
  /* margin: 30px 0; */
}
</style>