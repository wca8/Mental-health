<template>
  <div id="home">
    <el-row>
      <el-col :xs="0" :span="24">
        <home-swiper :banner-list="bannerList"></home-swiper>
      </el-col>
    </el-row>

    <home-main>
      <el-row>
        <el-col :xs="0" :span="24">
          <tab-control
            @tabClick="sortTitlesClick"
            :titles="sortTitles"
          ></tab-control>
        </el-col>
      </el-row>

      <home-article :article-list="articleList"></home-article>
      <home-ask></home-ask>
    </home-main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import HomeSwiper from "./child/HomeSwiper";
import {
  GetHomeBanner,
  GetarticleList,
  GetSortTitles,
} from "../../network/home";
import HomeMain from "./child/HomeMain";

import TabControl from "@/components/content/tabcontrol/TabControl";
import HomeArticle from "./child/HomeArticle";
import MyFooter from "../../components/content/footer/MyFooter";
import HomeAsk from "./child/HomeAsk";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    TabControl,
    HomeMain,
    HomeArticle,
    MyFooter,
    HomeAsk,
  },
  data() {
    return {
      bannerList: [],
      articleList: [],
      sortTitles: [],
    };
  },
  created() {
    this.GetHomeBanner();
    this.GetSortTitles();
    this.GetArticleList(45991);
  },
  mounted() {},
  methods: {
    // 请求数据
    GetHomeBanner() {
      GetHomeBanner().then((res) => {
        this.bannerList = res.data;
        console.log(this.bannerList);
      });
    },
    GetArticleList(categoryId) {
      GetarticleList(categoryId).then((res) => {
        this.articleList = res.data;
      });
    },
    GetSortTitles() {
      GetSortTitles().then((res) => {
        this.sortTitles = res.data;
      });
    },

    //  业务代码
    sortTitlesClick(index) {
      //根据索引 获取当前文章的id
      var id = this.sortTitles[index].id;
      this.GetArticleList(id);
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 3.57rem;
}
</style>
