<template>
  <div class="search">
    <div class="search-bar">
      <div class="search-bar-main">
        <search-bar></search-bar>
      </div>
    </div>

    <div class="main">
      <div class="left">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="文章" name="first">
              <my-article :val="input"></my-article>
          </el-tab-pane>
          <el-tab-pane label="提问" name="second">
              <ask :val="input"></ask>
          </el-tab-pane>
          <el-tab-pane label="课程" name="third">
            <no-content></no-content>
          </el-tab-pane>
          <el-tab-pane label="咨询" name="fourth">
            <no-content></no-content>
          </el-tab-pane>
        </el-tabs>

      </div>

      <div class="right">
        <recommend></recommend>
      </div>
    </div>

    <my-footer></my-footer>
  </div>
</template>

<script>
import SearchBar from "./child/SearchBar";
import MyFooter from "../../../components/content/footer/MyFooter";
import MyArticle from "./child/MyArticle";
import Ask from "./child/Ask";
import NoContent from "./child/NoContent";
import recommend from "../../questions/child/recommend";

export default {
  name: "Search",
  components:{
    SearchBar,
    MyFooter,
    MyArticle,
    Ask,
    NoContent,
    recommend,
  },
  created() {
    this.input=this.$route.query.val;
    },
  data(){
    return{
      activeName: 'first',
      input:'',

    }
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    },
  }
}
</script>

<style scoped>
.search-bar{
  background-color: #fff;
}
.search{
  min-height: 600px;
  background-color: rgb(242,242,242);
  padding-top: 72px;
}
.main{
  width: 1180px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
}
.left{
  width: 830px;
  min-height: 600px;
  background-color: #fff;
  padding: 10px 20px;
  box-sizing: border-box;
  position: relative;
}
.right{
  width: 330px;
  min-height: 600px;
  background-color: #fff;
}
.search-bar-main{
  width: 1180px;
  margin: 0 auto;
}
</style>
<style>
.el-tabs__item.is-active{
  color: rgb(77,179,68);
  font-size: 16px!important;
}
.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active{
  border: none!important;
}
.el-tabs--card>.el-tabs__header .el-tabs__nav{
  border: none!important;
}
.el-tabs--left.el-tabs--card .el-tabs__item.is-left{
  border: none!important;
  border-bottom: 1px solid #E4E7ED;
}

.el-tabs__active-bar{
  background-color:rgb(77,179,68)!important;
}


i{
  margin-right: 6px;
}
</style>