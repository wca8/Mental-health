<template>
  <div class="ask-article">
    <div class="main">
       <div class="Featured">
         <div>精选问答</div>
         <div @click="postQuestiosClick" class="Post-question"><i class="el-icon-edit-outline"></i>发布提问</div>
       </div>
        <div @click="itemClick(item.id,item.categoryId)" v-for="item in askList" class="item">
          <div class="title">☆{{item.title}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import {GetarticleList} from "../../../../network/home";
import {GetComment} from "../../../../network/article";

export default {
  name: "askArticle",
  data(){
    return{
      askList:[],
      idS:[]
    }
  },
  created() {
    let page,pageSize;
    this.GetarticleList(49511,page=1,pageSize=8);

  },
  methods:{
    GetarticleList(categoryId,page,pageSize){
      GetarticleList(categoryId,page,pageSize).then(res=>{
        console.log(res)
        this.askList=res.data;

      })
    },
    itemClick(id,categoryId){
      let routeData = this.$router.resolve({ path: '/QuestionDetails', query: {  id,categoryId } });
      window.open(routeData.href, '_blank');
    },
    postQuestiosClick(){
      let routeData = this.$router.resolve({ path:'/AskQuestions'});
      window.open(routeData.href, '_blank');
    }

  }
}
</script>

<style scoped>

.main{
  margin-top: 30px;
}
.item{
  margin-bottom: 30px;
  cursor: pointer;
  background-color: rgb(249,249,250);
  border-radius: 10px;
  padding: 10px;

  box-sizing: border-box;
}
h3{
  margin: 10px  0px;
}
.Featured{
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 48px;
}
.Post-question{
  color: #686565;
  font-size: 16px;
  cursor: pointer;
}
</style>