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

export default {
    name: "MainContent",
    data(){
      return{
        sortTitles:[],
        articleList: {
          'new':{page:0,list:[]},
          'Popular_science':{page:0,list:[]},
          'emotion':{page:0,list:[]},
          'family':{page:0,list:[]},
          'Social':{page:0,list:[]},
          'Perceive':{page:0,list:[]},
          'user':{page:0,list:[]},
        },
        currentType:'new',
        categoryId:45991,
        pageSize:8,
      }
    },
    created() {
      this.GetSortTitles()
      this.GetArticleList(45832,'Popular_science');
      this.GetArticleList(45833,'emotion');
      this.GetArticleList(45834,'family');
      this.GetArticleList(45835,'Social');
      this.GetArticleList(45836,'Perceive');
      this.GetArticleList(49289,'user');
      this.GetArticleList(45991,'new');
    },
    components:{
      TabControl,
      ReadArticle,
      Recommend,
    },
    computed:{
      showArticleList(){
        return this.articleList[this.currentType].list
      }
    },
    methods:{
      GetSortTitles(){
        GetSortTitles().then(res=>{
          console.log(res)
          this.sortTitles=res.data;
        })
      },
      GetArticleList(categoryId,type){
        let page=this.articleList[type].page+1;
        console.log("当前页码"+page)
        GetarticleList(categoryId,page).then(res=>{
          switch (categoryId){
            case 45991:this.currentType='new';break;
            case 45832:this.currentType='Popular_science';break;
            case 45833:this.currentType='emotion';break;
            case 45834:this.currentType='family';break;
            case 45835:this.currentType='Social';break;
            case 45836:this.currentType='Perceive';break;
            case 49289:this.currentType='user';break;
          }
          console.log(res)
          if(res.data){
            this.articleList[this.currentType].list.push(...res.data);
            this.articleList[this.currentType].page+=1;
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
        switch (index){
          case 0:this.currentType='new';break;
          case 1:this.currentType='Popular_science';break;
          case 2:this.currentType='emotion';break;
          case 3:this.currentType='family';break;
          case 4:this.currentType='Social';break;
          case 5:this.currentType='Perceive';break;
          case 6:this.currentType='user';break;
        }
        // console.log(this.currentType)
        //根据索引 获取当前文章的id
        this.categoryId=this.sortTitles[index].id
        // this.GetArticleList(id,this.currentType);


      },
      moreClick(){
        this.GetArticleList(this.categoryId,this.currentType)
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

