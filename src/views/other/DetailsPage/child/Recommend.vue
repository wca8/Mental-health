<template>
  <div  class="recommend">
    <div class="main">
      <div class="Related">
        <h3>相关阅读</h3>
        <div class="content">
          <div
              @click="articleClick(item.id,item.categoryId)"
              class="recommend-item"
              v-for="item in articleList">
            <div class="left">
              <img :src="item.pic" alt="">
            </div>
            <div class="right">
              {{item.title}}
            </div>
          </div>

        </div>

      </div>




    </div>
  </div>
</template>

<script>
import {GetarticleList} from "../../../../network/home";

export default {
  name: "Recommend",
  props:{
    categoryId:{
      type:String,
      default(){
        return 0
      }
    }
  },
  data(){
    return{
      articleList:'',
      page:1,
      pageSize:6
    }
  },
  created() {

    this.GetarticleList(this.categoryId,this.page,this.pageSize)
  },
  mounted() {
    // 监听滚动事件
    // document.getElementById("blockmain").addEventListener("scroll", this.handleScroll)
    // window.addEventListener('scroll', this.handleScroll)
    this.$nextTick(function () {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods:{
    GetarticleList(categoryId,page,pageSize){
      GetarticleList(categoryId,page,pageSize).then(res=>{
        console.log(res)
        this.articleList=res.data;
      })
    },
    articleClick(id,categoryId){
      let routeData = this.$router.resolve({ path: '/content', query: {  id,categoryId } });
      window.open(routeData.href, '_blank');
    },
    handleScroll(){
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop//获取滚动距离
      this.scrollTop = scrollTop//data里return了一个全局的scrollTop
      // if(this.scrollTop>348){
      //   document.querySelector('.recommend').classList.add('active20210620')
      // }else{
      //   document.querySelector('.recommend').classList.remove('active20210620')
      // }
    }
  }
}
</script>

<style scoped>
.recommend{
  padding: 20px;
  box-sizing: border-box;
}
.content div{
  margin-top: 10px;
  position: relative;
  display: flex;
  /*padding-left: 10px;*/
}
/*.content div::before{*/
/*  position: absolute;*/
/*  content: '';*/
/*  width:6px;*/
/*  height: 6px;*/
/*  background-color: rgb(74,179,68);*/
/*  top: 7px;*/
/*  left: 0;*/
/*}*/
.recommend-item{
  display: flex;
  cursor: pointer;
}
.left{
  flex: 2;
}
.right{
  flex: 7;
  margin-left: 15px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
img{
  width: 100%;
}

</style>