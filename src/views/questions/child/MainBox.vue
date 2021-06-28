<template>
  <div class="main-box">
   <div class="main">
     <div class="left">
        <tab-control @itemClick="itemClick0"></tab-control>
        <article-list @moreClick0="moreClick0" :arr-list="showArticleList"></article-list>
     </div>

     <div class="right">
       <recommend></recommend>
     </div>
   </div>

  </div>
</template>

<script>
import TabControl from "./TabControl";
import recommend from "./recommend";
import articleList from "./articleList";
import {GetarticleList} from "../../../network/home";

export default {
  name: "MainBox",
  data(){
    return{
      askList:[],
      articleList: {
        'psychological':{page:0,list:[]},
        'Talk':{page:0,list:[]},
        'urgent':{page:0,list:[]},
      },
      currentType:'psychological',
      categoryId:49510,
    }
  },
  computed:{
    showArticleList() {
      return this.articleList[this.currentType].list;
    }
  },
  components:{
    TabControl,
    recommend,
    articleList,
  },
  created() {
    this.GetArticleList(49510,'psychological');
    this.GetArticleList(49511,'Talk');
    this.GetArticleList(49513,'urgent');
  },
  methods:{
    GetArticleList(categoryId,type){
      let page=this.articleList[type].page+1;
      console.log("当前页码"+page)
      GetarticleList(categoryId,page).then(res=>{
        switch (categoryId){
          case 49510:this.currentType='psychological';break;
          case 49511:this.currentType='Talk';break;
          case 49513:this.currentType='urgent';break;
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

    itemClick0(index,id){
      console.log(id)
      switch (index){
        case 0:this.currentType='psychological';break;
        case 1:this.currentType='Talk';break;
        case 2:this.currentType='urgent';break;
      }
      this.categoryId=id;
      // this.GetArticleList(id,this.currentType);
    },
    moreClick0(){
      this.GetArticleList(this.categoryId,this.currentType);
    }
  }
}
</script>

<style scoped>
.main-box{
  width: 1180px;
  margin: 20px auto;
  min-height: 600px;

}
.main{
  display: flex;
  justify-content: space-between;
}
.left{
  width: 760px;
  /*padding: 0 50px 50px 50px;*/
  min-height: 600px;
  /*background-color: white;*/
}
.right{
  margin-left: 30px;
  width: 345px;
  background-color: white;
  height: 550px;
}
</style>