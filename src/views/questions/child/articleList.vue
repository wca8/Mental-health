<template>
  <div class="article-list">
    <div class="ask-content">
      <div class="main">
        <div
          v-for="item in arrList"
          :class="{ isHome: !isShowMore }"
          class="item"
        >
          <div class="title">
            <div class="title-0">
              <div class="Avatar">
                <el-avatar :size="28" :src="circleUrl"></el-avatar>
              </div>
              <div>
                <h3>{{ item.title }}</h3>
              </div>
            </div>
            <div>
              <el-button
                @click="ToAnswerClick(item.id, item.categoryId)"
                size="medium "
                class="To_answer"
                type="success"
                round
                >去回答</el-button
              >
            </div>
          </div>

          <div class="content">
            {{ item.descript }}
          </div>

          <div class="other-info"></div>
        </div>
      </div>

      <div v-if="isShowMore" class="more">
        <el-button @click="moreClick" class="load-more" type="success" round
          >点击加载更多提问...</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "articleList",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  created() {
    // this.GetArticleList(45832,'Popular_science');
  },
  props: {
    arrList: {
      type: Array,
      default() {
        return [];
      },
    },
    isShowMore: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  computed: {},
  methods: {
    moreClick() {
      this.$emit("moreClick0");
    },
    ToAnswerClick(id, categoryId) {
      let routeData = this.$router.resolve({
        path: "/QuestionDetails",
        query: { id, categoryId },
      });
      window.open(routeData.href, "_blank");
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .item {
    padding: 1.428571rem !important;
    background-color: rgba(250, 250, 250, .3)!important;
  }
}
.article-list {
  width: 100%;
}

.item {
  padding: 40px;
  box-sizing: border-box;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 10px;
}
.title {
  justify-content: space-between;
}
.title h3 {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.title,
.title-0 {
  display: flex;
  align-items: center;
}
.content {
  margin: 20px 0;
}
.title-0 > div {
  display: flex;
  align-items: center;
}
.Avatar {
  margin-right: 10px;
  opacity: 0.8;
}
.more {
  /*background-color: #fff;*/
  /*border-radius: 10px;*/
  display: flex;
  margin-top: 50px;
  margin-bottom: 10px;
  justify-content: center;
  /*padding: 30px;*/
  /*box-sizing: border-box;*/
}
.isHome {
  background-color: rgb(249, 249, 250) ;
}
</style>
<style>
.To_answer {
  margin-left: 1.071429rem;
}
</style>
