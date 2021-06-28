<template>
  <div ref="recommend" class="recommend">
    <div class="main">
      <div class="top">
        <a href=""> 
          <img src="https://dcdn.it120.cc/2021/06/22/26cd47a4-cf74-4cec-b7b3-e2d677709b27.png" alt="">
        </a>
        <a href="">
          <img src="https://dcdn.it120.cc/2021/06/22/3e843c81-6589-4191-8c0d-37a17ec24eb7.png" alt="">
        </a>
      </div>
      <div class="writing">
        <el-button @click="postArticleClick" icon="el-icon-edit" type="success">我要写文章</el-button>
        <el-button icon="el-icon-edit-outline" type="success">我发布的</el-button>
      </div>
      <div class="announcement">
        <h4>最新公告</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Recommend",
    data(){
     return{
       isFlag:true,
     }
    },

    methods:{
      postArticleClick(){
        let routeData = this.$router.resolve({ path: '/PostAnArticle', query: {  } });
        window.open(routeData.href, '_blank');
      }


    }
}
</script>

<style scoped>
.recommend{
  height: 100%;
  padding:20px;
}
.top a{
  display: block;
  margin-bottom: 15px;
}
img{
  width: 100%;
}
.writing{
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
}
.announcement{
  margin-top: 30px;
}
h4{
  color: #5c5a5a;
}
</style>