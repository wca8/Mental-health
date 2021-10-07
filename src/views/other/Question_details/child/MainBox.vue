<template>
  <div class="main-box">
    <div class="main">
      <div class="left">
        <ask-content></ask-content>
      </div>

      <div class="right">
        <div class="top">
          <el-button @click="goAskClick" icon="el-icon-edit" type="success">我要提问</el-button>
          <el-button icon="el-icon-edit-outline" type="success">我要回答</el-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import askContent from "./askContent";
export default {
  name: "MainBox",
  data(){
    return{
      articleId:'',
      categoryId:'',
    }
  },
  components:{
    askContent,
  },
  created() {
    this.articleId=this.$route.query.id;
    this.categoryId=this.$route.query.categoryId;

  },
  methods:{
    goAskClick(){
      let routeData = this.$router.resolve({ path:'/AskQuestions'});
      window.open(routeData.href, '_blank');
    }
  }
}
</script>

<style scoped>
.main{
  display: flex;
  width: 1180px;
  margin: 20px auto;
  justify-content: space-between;

}
.left{
  width: 760px;
  min-height: 600px;
  /*background-color: #fff;*/
}
.right{
  width: 345px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
}
.top{
  display: flex;
  justify-content: space-evenly;
  padding: 30px;
  box-sizing: border-box;
}
</style>