<template>
 <div class="article-content-box">
   <div class="article-content">
     <div class="left" >
       <h1 class="title">{{list.title}}</h1>
       <div v-html="list.content"></div>
       <div class="like0">
          <div ref="likeimg" @click="setLikeClick" class="like-img">
           <h2>{{like}}</h2>
          </div>

       </div>
       <favorites :article-id="id"></favorites>
     </div>
     <div class="right"></div>
   </div>
   <my-footer></my-footer>
 </div>
</template>

<script>
import {GetarticleContent} from "../../../network/home";
import MyFooter from "../../../components/content/footer/MyFooter";
import {Getlike} from "../../../network/article";
import {Setlike} from "../../../network/article";
import Favorites from "./child/Favorites";
export default {
  name: "Content",
  data(){
    return{
      id:null,
      list:[],
      like:0
    }
  },
  components:{
    MyFooter,
    Favorites
  },
  created() {
    this.id=this.$route.query.id
    this.GetarticleContent(this.id);
    this.Getlike({id:this.id})

  },
  methods:{
    GetarticleContent(id){
      GetarticleContent(id).then(res=>{
        this.list=res.data.info

      })
    },
    Getlike(obj){
      Getlike(obj).then(res=>{
        console.log(res)
        // console.log("获取开始")
        if(res.code==700){
          this.like=0
          // console.log("获取结束1")
        }else{
          this.like=res.data.totalRow
          // console.log("获取结束2")
        }

      })
    },
    Setlike(obj){
      Setlike(obj).then(res=>{
        console.log("设置开始")
       if(this.like!=0){
         console.log("设置结束1")
         this.$message({
           message: '点赞已取消',
           type: 'warning'
         });
       }else{
         console.log("设置结束2")
         this.$message({
           message: '点赞成功',
           type: 'success'
         });
       }

      })
    },
    setLikeClick(){
      this.$refs.likeimg.classList.add("active")
      setTimeout(()=>{
        this.$refs.likeimg.classList.remove("active")
      },1000)
      let obj={
        id:this.id,
        token:localStorage.getItem('elementToken')
      }
      this.Setlike(obj)
      setTimeout(()=>{
        this.Getlike({id:this.id})
      },50)

    }
  }
}
</script>

<style >
.article-content-box{
  background-color: rgb(243,244,245);
}
.article-content{
  padding-top: 72px;
  width: 1180px;
  margin: 0 auto;
  /*padding: 72px 12% 0 12%;*/
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

}
.article-content .title{
  padding: 15px 0 25px 0;
}
.article-content .left {
  background-color: white;
  padding: 20px 80px 80px 80px;
  box-sizing: border-box;

}
.article-content .left p{
  width: 100%;
  text-indent: 2em;
  box-sizing: border-box;
}
.article-content .left h1{
  text-align: center;
}
p img {
  display: block;
}
.article-content .left  img{
  width:100%;
}

.article-content .left{
  flex: 7;
}
.article-content .right{
  flex: 3;

}
.like0{
  margin-top: 50px;
  height: 155px!important;
}
.like-img{
  width: 100px;
  height: 100px;
  background: url("https://dcdn.it120.cc/2021/06/14/e52c1361-874f-4fc2-a282-6a50e8f8c6a5.png") no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
}
.like-img h2{
  position: absolute;
  bottom: 14px;
  width: 100%;
  text-align: center;
  color: white;
}
@keyframes Spin {
  0%{
    transform:scale(1) rotate(0deg);
  }
  50%{
    transform:scale(2) rotate(180deg);
  }
  100%{
    transform:scale(1) rotate(360deg);
  }
}
.active{
  animation: Spin .5s linear forwards;
}
</style>