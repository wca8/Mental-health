<template>
  <div class="home-article">
    <div

        v-for="item in articleList"
        @click="articleClick(item.id,item.categoryId)"
        class="home-article-item">
<!--      <a target="_blank" :href="'http://localhost:8081/content/'+item.id">-->
        <div class="image">
          <img :src="item.pic" alt="">
        </div>
        <div class="title-item">
          <h3 >{{item.title}}</h3>
          <div class="descript">{{item.descript}}</div>
          <div class="tags">#{{item.tags}}</div>
        </div>
<!--      </a>-->
    </div>
  </div>
</template>

<script>
import {random} from "../../../common/utils";
import urlencode from "urlencode";
export default {
  name: "HomeArticle",
  props:{
    articleList:{
      type:Array,
      default(){
        return []
      }
    },

  },
  data(){
    return{
      id:null,
    }
  },
  computed:{
    num(){
      let list=[]
      for (let i = 0; i < 10; i++) {
        let k = random(10, 100);
        list.push(k);

      }
      return list.join('')
    }
  },
  methods:{
    articleClick(id,categoryId){
      // this.id=id
      let routeData = this.$router.resolve({ path: '/content', query: {  id,categoryId } });
      window.open(routeData.href, '_blank');
    }
  },

}
</script>

<style scoped>
.home-article{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 40px;
}
.home-article-item{
  width: 48%;
  margin-bottom: 40px;
  background-color: rgb(249,249,250);
  padding: 16px 12px;
  box-sizing: border-box;
  /*align-items: center;*/
  border-radius: 15px;
  cursor: pointer;
  display: flex;
}

.home-article-item a{
  display: flex;
  color: #1c1b1b;
}
.image{
  flex: 3;
}
.image img{
  width: 100%;
}
.title-item{
  flex: 7;
  display: flex;
  flex-direction: column;
  padding-left: 3%;

}
.title-item h3,.title-item .descript,.title-item .tags{
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.title-item h3{
  -webkit-line-clamp: 2;
}
.descript{
  -webkit-line-clamp: 3;
  font-size: 14px;
}
.tags{
  font-size: 12px;
  color: rgb(74,179,68);
  -webkit-line-clamp: 1;
}
</style>