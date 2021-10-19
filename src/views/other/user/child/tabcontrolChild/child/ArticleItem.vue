<template>
  <div ref="article" class="article-item">
    <div class="main">
      <div v-for="item in articleList" class="item">
        <div @click="itemClick(item.newsId)">
          <img :src="item.pic" alt="" />
        </div>
        <div @click="itemClick(item.newsId)">
          <div>
            <h3>{{ item.title }}</h3>
          </div>
          <div class="time">
            <div>{{ item.dateAdd }}</div>
          </div>
        </div>
        <div @click="removeClick({ newsId: item.newsId, id: item.id })">
          <i class="el-icon-delete"></i>删除
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SetRemoveFav } from "../../../../../../network/article";

export default {
  name: "ArticleItem",
  props: {
    articleList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    // this.$nextTick(()=>{
    //  setTimeout(()=>{
    //    console.log(this.$refs.article.offsetHeight)
    //  },1000)
    // })
  },
  methods: {
    itemClick(id) {
      let routeData = this.$router.resolve({ path: "/content", query: { id } });
      window.open(routeData.href, "_blank");
    },
    SetRemoveFav(obj) {
      SetRemoveFav(obj).then((res) => {
        if (res.msg == "success") {
          console.log("删除成功");
          this.$emit("ArticleRefresh");
        }
      });
    },
    removeClick(obj) {
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        confirmButtonClass: "determine-06151541",
      })
        .then(() => {
          obj.token = localStorage.getItem("elementToken");
          this.SetRemoveFav(obj);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .article-item {
    padding: 0px!important;
  }
}
.article-item {
  padding: 20px;
}
.item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  cursor: pointer;
}
.item > div:nth-child(1) {
  flex: 2;
}
img {
  width: 100%;
}
.item > div:nth-child(2) {
  flex: 8;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 6px;
  box-sizing: border-box;
}
.item > div:nth-child(3) {
  flex: 1;
  display: flex;
  align-items: flex-end;
  font-size: 13px;
  padding-bottom: 6px;
  color: #a09d9d;
}
.time {
  color: #a09d9d;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
</style>

<style>
.determine-06151541 {
  background-color: rgb(74, 179, 68) !important;
}
</style>
