<template>
  <div class="main-box">
    <div class="main">
      <div class="left">
        <tab-control @itemClick="itemClick0"></tab-control>
        <article-list
          @moreClick0="moreClick0"
          :arr-list="showArticleList"
        ></article-list>
      </div>

      <el-row>
        <el-col :xs='0' :span="24">
          <div class="right">
            <recommend></recommend>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import TabControl from "./TabControl";
import recommend from "./recommend";
import articleList from "./articleList";
import { GetarticleList } from "../../../network/home";

export default {
  name: "MainBox",
  data() {
    return {
      askList: [],
      articleList: {
        49510: { page: 0, list: [] },
        49511: { page: 0, list: [] },
        49513: { page: 0, list: [] },
      },
      categoryId: 49510,
    };
  },
  computed: {
    showArticleList() {
      return this.articleList[this.categoryId].list;
    },
  },
  components: {
    TabControl,
    recommend,
    articleList,
  },
  created() {
    this.GetArticleList(49513);
    this.GetArticleList(49511);
    this.GetArticleList(49510);
    if (this.$route.query.index) {
      let index = Number(this.$route.query.index);
      this.SetCategoryId(index);
    }
  },
  methods: {
    SetCategoryId(index) {
      switch (index) {
        case 0:
          this.categoryId = 49510;
          break;
        case 1:
          this.categoryId = 49511;
          break;
        case 2:
          this.categoryId = 49513;
          break;
      }
    },
    GetArticleList(categoryId) {
      let page = this.articleList[categoryId].page + 1;
      GetarticleList(categoryId, page).then((res) => {
        if (res.data) {
          this.articleList[categoryId].list.push(...res.data);
          this.articleList[categoryId].page += 1;
        } else {
          this.$message({
            message: "已经到底了呦！",
            type: "warning",
          });
        }
      });
    },
    itemClick0(index, id) {
      this.categoryId = id;
    },
    moreClick0() {
      this.GetArticleList(this.categoryId);
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .main-box {
    margin: 0 auto !important;
    width: 100vw !important;
  }
  .left {
    width: 100vw !important;
  }
}
.main-box {
  width: 1180px;
  margin: 20px auto;
  min-height: 600px;
}
.main {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.left {
  width: 820px;
  min-height: 600px;
}
.right {
  margin-left: 20px;
  width: 345px;
  background-color: white;
  height: 550px;
  border-radius: 10px;
  position: relative;

}
</style>
