<template>
  <div class="read-article">
    <div class="main">
      <div
          v-for="item in articleList" class="item"
          @click="articleClick(item.id,item.categoryId)">
        <div class="left">
          <img :src="item.pic" alt="">
        </div>

        <div class="right">
          <h3 class="title0">{{item.title}}</h3>
          <div class="descript">{{item.descript}}</div>
          <div class="tags">#{{item.tags}}</div>
          <div class="time">
            {{item.dateAdd}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ReadArticle",
    props:{
      articleList:{
        type:Array,
        default(){
          return []
        }
      }
    },
  methods:{
    articleClick(id,categoryId){
      console.log(categoryId)
      let routeData = this.$router.resolve({ path: '/content', query: {  id,categoryId } });
      window.open(routeData.href, '_blank');
    }
  }
}
</script>

<style scoped>
.item{
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  cursor: pointer;
}
.left{
  flex: 2;
}
.left img{
  width: 100%;
}
.right{
  flex: 7;
  margin-left: 25px;
}

.descript,title0,.tags{
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;

}
.descript{
  -webkit-line-clamp: 2;
}

.title0{
  -webkit-line-clamp: 2;
}
.tags{
  -webkit-line-clamp: 1;
  color: rgba(74,179,68,1);
}
.time{
  font-size: 14px;
  color: #cccccc;
}
</style>