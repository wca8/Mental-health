<template>
  <div class="main-content">
      <div class="main">

        <div class="left0">
            <tab-control
                class="tab-control"
                @tabClick="sortTitlesClick"
                :titles="sortTitles">
            </tab-control>
          <read-article :article-list="showArticleList"></read-article>
          <div class="loadMore">
            <el-button @click="moreClick"  type="success">点击加载更多...</el-button>

          </div>
        </div>

        <div  class="right0"  :class="{active20210622:this.$store.state.isSetClass}">
            <recommend></recommend>
        </div>
      </div>
  </div>
</template>

<script>


import TabControl from "./TabControl";
import {GetSortTitles} from "../../../network/home";
import {GetarticleList} from "../../../network/home";
import ReadArticle from "./ReadArticle";
import Recommend from "./Recommend";
import {mapState} from 'vuex'

export default {
    name: "MainContent",
    data(){
      return{
        sortTitles:[],
        articleList: {
          45991:{page:0,list:[]},
          45832:{page:0,list:[]},
          45833:{page:0,list:[]},
          45834:{page:0,list:[]},
          45835:{page:0,list:[]},
          45836:{page:0,list:[]},
          49289:{page:0,list:[]},
        },
        categoryId:45991,
        pageSize:8,
      }
    },
    created() {
      this.GetSortTitles()

      this.GetArticleList(45833);
      this.GetArticleList(45834);
      this.GetArticleList(45835);
      this.GetArticleList(45836);
      this.GetArticleList(49289);
      this.GetArticleList(45991);
      this.GetArticleList(45832);
    },
    components:{
      TabControl,
      ReadArticle,
      Recommend,
    },
    computed:{

      showArticleList(){
        return this.articleList[this.categoryId].list
      },

    },
    methods:{
      test(){

      },
      GetSortTitles(){
        GetSortTitles().then(res=>{
          this.sortTitles=res.data;
        })
      },
      GetArticleList(categoryId){
        let page=this.articleList[this.categoryId].page+1;
        GetarticleList(categoryId,page).then(res=>{
          if(res.data){
            this.articleList[categoryId].list.push(...res.data);
            this.articleList[categoryId].page+=1;
          }else{
            this.$message({
              message: '已经到底了呦！',
              type: 'warning'
            });
          }

        })
      },
      //  业务代码
      sortTitlesClick(index){
        //根据索引 获取当前文章的id
        this.categoryId=this.sortTitles[index].id
      },
      moreClick(){
        this.GetArticleList(this.categoryId)
      }
    }
}
</script>

<style scoped>
.main-content{
  margin-top: 20px;

}
.main{
  display: flex;
  justify-content: space-between;

}

.left0{
  width: 700px;
  background-color: #fff;
  padding:0 50px 50px 50px;
  min-height: 100vh;
}
.right0{
  margin-left: 30px;
  width: 345px;
  background-color: #fff;
  height: 550px;
  position: fixed;
  top: 90px;
  right: 11%;
}
.tab-control{
  padding:15px 0 30px 0;
}
.loadMore{
  display: flex;
  justify-content: center;

}
.active20210622{
  animation:opacity .5s linear forwards;
}
@keyframes opacity  {
  from{
    opacity: 1;
  }

  to{
   opacity:0;
  }
}
</style>

