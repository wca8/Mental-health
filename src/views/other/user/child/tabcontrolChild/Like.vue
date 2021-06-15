<template>
  <div ref="like"   class="like">
    <div >
      <article-item @ArticleRefresh="Refresh"  ref="article" :article-list="articleList"></article-item>

    </div>

  </div>
</template>

<script>

import {GetFav} from "../../../../../network/article";
import ArticleItem from "./child/ArticleItem";
import {debounce} from "../../../../../common/utils";

export default {
  name: "Like",
  data(){
    return{
      articleList:[],
    }
  },
  // activated(){
  //   console.log(this.$refs.article)
  // },
  mounted() {
    // this.$nextTick(()=>{
    //   let h=this.$refs.article.$el.offsetHeight
    //   console.log(h)
    // })
  },
  components:{
    ArticleItem,
  },
  created() {
    let token=localStorage.getItem('elementToken')
    this.GetFav({token})
  },
  methods:{
    GetFav(obj){
      GetFav(obj).then(res=>{
        console.log(res)
        console.log("获取到收藏数据")
        this.articleList=res.data

      })
    },
    Refresh(){

      this.articleList=[]
      let token=localStorage.getItem('elementToken')
      this.GetFav({token})

    }
  }
}
</script>

<style scoped>
.like{
  min-height: 80vh;
  background-color: #fff;
  margin-top: 10px;
}
</style>