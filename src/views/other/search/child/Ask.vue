<template>
  <div class="ask">
    <div class="main">
      <div v-if="articleList.length">
        <div
            @click="ToAnswerClick(item.id,item.categoryId)"
            v-for="item in articleList"  class="item">
          <div class="title">
            <div class="title-0">

              <div><h3>{{item.title}}</h3></div>
            </div>

          </div>

          <div class="content">
            {{item.descript}}
          </div>

          <div class="keywords">
              <div v-for="item_ in item.keywords.split(',')">
                {{item_}}
              </div>
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
import NoContent from "./NoContent";
import {GetSearchArticle} from "../../../../network/home";

export default {
  name: "Ask",
  props:{
    val:{
      type:String,
      default(){
        return ''
      }
    }
  },
  created() {
    this.GetSearchArticle({keywordsLike:this.val,categoryId:'49510'});
    this.GetSearchArticle({keywordsLike:this.val,categoryId:'49511'});
    this.GetSearchArticle({keywordsLike:this.val,categoryId:'49513'});

  },
  components:{
    NoContent
  },
  data(){
    return{
      articleList:[],
    }
  },
  methods:{
    ToAnswerClick(id,categoryId){
      let routeData = this.$router.resolve({ path: '/QuestionDetails', query: {  id,categoryId } });
      window.open(routeData.href, '_blank');
    },
    GetSearchArticle(obj){
      GetSearchArticle(obj).then(res=>{
        console.log(res)
        if(res.data){
          this.articleList.push(...res.data);
        }

      })
    },
  }
}
</script>

<style scoped>
.item{
  padding: 0px 20px 20px 20px;
  cursor: pointer;
  border-bottom: 1px solid #eae8e8;
  margin-bottom: 20px;
}
.content{
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.keywords{
  display: flex;
  margin-top: 10px;
}
.keywords>div{
  margin-right: 20px;
  border: 1px solid #e3dfdf;
  padding:3px 5px;
  border-radius: 10px;
  color: #cccccc;
}

</style>