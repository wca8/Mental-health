<template>
  <div class="my-article">
    <div class="main">
       <div v-if="articleList.length">
         <div
             @click="itemClick(item.id,item.categoryId)"
             v-for="item in articleList" class="item">
           <div class="title">
             <h3>{{item.title}}</h3>
           </div>
           <div class="descript">
             {{item.descript}}
           </div>
           <div class="other">
             <div>发布时间：{{item.dateAdd}}</div>
             <div><i class="iconfont icon-shoucang1"></i>：{{item.numberFav}}</div>
             <div><i class="iconfont icon-pinglun"></i>：{{item.commentNumber}}</div>
           </div>
         </div>
       </div>

        <div v-else>
          <no-content></no-content>
        </div>
    </div>
  </div>
</template>

<script>
import {GetSearchArticle} from "../../../../network/home";
import NoContent from "./NoContent";
export default {
  name: "MyArticle",
  props:{
    val:{
      type:String,
      default(){
        return ''
      }
    }
  },
  components:{
    NoContent
  },
  data(){
    return{
      articleList:[],

    }
  },
  created() {
    this.GetSearchArticle({keywordsLike:this.val,categoryId:'45991'});
    this.GetSearchArticle({keywordsLike:this.val,categoryId:'45832'});
    this.GetSearchArticle({keywordsLike:this.val,categoryId:'45833'});
    this.GetSearchArticle({keywordsLike:this.val,categoryId:'45834'});
    this.GetSearchArticle({keywordsLike:this.val,categoryId:'45835'});
    this.GetSearchArticle({keywordsLike:this.val,categoryId:'45836'});
    this.GetSearchArticle({keywordsLike:this.val,categoryId:'49289'});

  },
  methods:{
    GetSearchArticle(obj){
      GetSearchArticle(obj).then(res=>{
        console.log(res)
        if(res.data){
          this.articleList.push(...res.data);
        }

      })
    },
    itemClick(id,categoryId){
      let routeData = this.$router.resolve({ path: '/content', query: {  id,categoryId } });
      window.open(routeData.href, '_blank');
    }
  }
}
</script>

<style scoped>
.main{
  margin-top: 10px;
}
.item{
  padding: 0px 20px 20px 20px;
  cursor: pointer;
  border-bottom: 1px solid #eae8e8;
  margin-bottom: 20px;
}
h3{
  margin-bottom: 10px;
}
.other{
  display: flex;
  color: #807f7f;
  font-size: 13px;
  margin-top: 10px;
}
.other>div{
  display: flex;
  align-items: center;
  margin-right: 30px;
}

.descript{
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

</style>