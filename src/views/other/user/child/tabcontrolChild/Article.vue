<template>
  <div class="article">
    <div v-if="articleList.length">
        <user-article @removeSuccess="removeSuccess" :article-list="articleList"></user-article>
    </div>

    <div class="null" v-else>
      <h3>您还未发布文章，赶快去创作吧!</h3>
      <el-button
          class="WriteArticle"
          @click="WriteArticle"
          icon="el-icon-edit"
          type="success" round>
           写文章
      </el-button>
    </div>
  </div>
</template>

<script>
import {GetUserArticle} from "../../../../../network/user";
import {GetUserInfo} from "../../../../../network/login";
import UserArticle from "./child/UserArticle";
import ArticleItem from "./child/ArticleItem";

export default {
  name: "Article",
  data(){
    return{
      list:[],
      info:{},
      articleList:[]
    }
  },
  watch:{
    info(){
      let obj={
        tagsLike:this.info.id,
        categoryId:49289,
      }
      this.GetUserArticle(obj)
    }
  },
  components:{
    UserArticle,
    ArticleItem
  },
  created() {
    let token=localStorage.getItem('elementToken')
    if(token){
      this.GetUserInfo(token)
    }

  },
  methods:{
    removeSuccess(){
      let obj={
        tagsLike:this.info.id,
        categoryId:49289,
      }
      this.GetUserArticle(obj)
    },
    WriteArticle(){
      let routeData = this.$router.resolve({ path: '/PostAnArticle', query: {  } });
      window.open(routeData.href, '_blank');
    },
    GetUserArticle(obj){
      GetUserArticle(obj).then(res=>{
        if(res.msg=='暂无数据'){
          this.articleList='';
          return;
        }
        this.articleList=res.data;
      })
    },
    GetUserInfo(token){
      GetUserInfo(token).then(res=>{

       this.info=res.data.base;
      })
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  
}
.article{
  min-height: 80vh;
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 10px;
}
.null{
  color:#cccccc;
  padding: 30px;
}
.WriteArticle{
  margin-top: 30px;
  opacity: .8;
}
</style>