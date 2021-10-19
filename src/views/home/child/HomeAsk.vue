<template>
  <div class="home-ask">
    <div class="main">
      <div class="left">
        <tab-control @itemClick="itemClick0"></tab-control>

        <article-list :is-show-more="false" :arr-list="askList"></article-list>
      </div>

      <div class="right">
        <el-row>
          <el-col :xs="0" :span="24">
            <ask-article></ask-article>
            </el-col
          >
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import TabControl from "../../questions/child/TabControl";
import articleList from "../../questions/child/articleList";
import { GetarticleList } from "../../../network/home";
import askArticle from "./HomeAskChild/askArticle";
export default {
  name: "HomeAsk",
  data() {
    return {
      askList: [],
    };
  },
  created() {
    let page, pageSize;
    this.GetarticleList(49510, (page = 1), (pageSize = 6));
  },
  components: {
    TabControl,
    articleList,
    askArticle,
  },
  methods: {
    GetarticleList(categoryId, page, pageSize) {
      GetarticleList(categoryId, page, pageSize).then((res) => {
        this.askList = res.data;
      });
    },
    itemClick0(index, id) {
      let page, pageSize;
      this.GetarticleList(id, (page = 1), (pageSize = 6));
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .left {
    width: 100%!important;
  }
  .right {
    margin-left: 0px!important;
  }
}
.main {
  display: flex;
  justify-content: space-between;
}
.left {
  width: 630px;
}
.right {
  margin-left: 40px;
  flex: 1;
}
</style>
