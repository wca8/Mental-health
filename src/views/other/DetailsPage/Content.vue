<template>
  <div class="article-content-box">
    <my-mask :is-show="isShow">
      <pay @shutDownClick="shutDownClick"></pay>
    </my-mask>
    <div class="article-content">
      <div class="left0">
        <h1 class="title">{{ list.title }}</h1>

        <info :list-info="list"></info>

        <div v-html="list.content"></div>

        <pre-next
          :category-id="categoryId"
          :pre-next-list="preNextList"
        ></pre-next>

        <div class="like0">
          <div ref="likeimg" @click="setLikeClick" class="like-img">
            <h2>{{ like }}</h2>
          </div>
        </div>

        <favorites @rewardClick="rewardClick" :article-id="id"></favorites>

        <comment :article-id="id"></comment>
      </div>
      <div class="right0" ref="right0">
        <el-row>
          <el-col :xs="0" :span="24">
            <author :like="like"></author>
            <recommend :category-id="categoryId"></recommend>
          </el-col>
        </el-row>
      </div>
    </div>
    <my-footer ref="my_footer"></my-footer>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import { GetarticleContent } from "../../../network/home";
import MyFooter from "../../../components/content/footer/MyFooter";
import { Getlike } from "../../../network/article";
import { Setlike } from "../../../network/article";
import Favorites from "./child/Favorites";
import myMask from "../../../components/content/mask/myMask";
import Pay from "./child/Pay";
import Comment from "./child/Comment";
import Recommend from "./child/Recommend";
import Author from "./child/Author";
import BackTop from "../../../components/content/backTop/BackTop";
import Info from "./child/Info";
import { GetPreNext } from "../../../network/article";
import PreNext from "./child/PreNext";

export default {
  name: "Content",
  data() {
    return {
      id: null,
      categoryId: null,
      list: {},
      like: 0,
      isShow: false,
      scrollTop: 0,
      isFlag: true,
      isShowBackTop: false,
      preNextList: {},
    };
  },
  components: {
    MyFooter,
    Favorites,
    myMask,
    Pay,
    Comment,
    Recommend,
    Author,
    BackTop,
    Info,
    PreNext,
  },
  created() {
     window.scrollTo(0,0)
    this.id = this.$route.query.id;
    this.categoryId = this.$route.query.categoryId;
    this.GetarticleContent(this.id);
    this.Getlike({ id: this.id });
    this.GetPreNext({ id: this.id });
  },
  // 解決移動端瀏覽器打開内容不刷新問題
  watch: {
    '$route'(to, from) {
      window.scrollTo(0,0)
      this.id = this.$route.query.id;
      this.categoryId = this.$route.query.categoryId;
      this.GetarticleContent(this.id);
      this.Getlike({ id: this.id });
      this.GetPreNext({ id: this.id });
    },
  },
  mounted() {
    // 监听滚动事件
    // document.getElementById("blockmain").addEventListener("scroll", this.handleScroll)
    // window.addEventListener('scroll', this.handleScroll)
    this.$nextTick(function() {
      window.addEventListener("scroll", this.handleScroll);
    });
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    GetPreNext(obj) {
      GetPreNext(obj).then((res) => {
        this.preNextList = { ...res.data };
      });
    },
    GetarticleContent(id) {
      GetarticleContent(id).then((res) => {
        this.list = res.data.info;
        document.title = this.list.title || "";
      });
    },
    Getlike(obj) {
      Getlike(obj).then((res) => {
        // console.log(res)
        // console.log("获取开始")
        if (res.code == 700) {
          this.like = 0;
          // console.log("获取结束1")
        } else {
          this.like = res.data.totalRow;
          // console.log("获取结束2")
        }
      });
    },
    Setlike(obj) {
      Setlike(obj).then((res) => {
        // console.log("设置开始")
        if (this.like != 0) {
          console.log("设置结束1");
          this.$message({
            message: "点赞已取消",
            type: "warning",
          });
        } else {
          // console.log("设置结束2")
          this.$message({
            message: "点赞成功",
            type: "success",
          });
        }
      });
    },
    setLikeClick() {
      this.$refs.likeimg.classList.add("active_20210617");
      setTimeout(() => {
        this.$refs.likeimg.classList.remove("active_20210617");
      }, 1000);
      let obj = {
        id: this.id,
        token: localStorage.getItem("elementToken"),
      };
      this.Setlike(obj);
      setTimeout(() => {
        this.Getlike({ id: this.id });
      }, 50);
    },
    rewardClick() {
      this.isShow = true;
    },
    shutDownClick() {
      this.isShow = false;
    },
    handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop; //获取滚动距离
      this.scrollTop = scrollTop; //data里return了一个全局的scrollTop
      let footerTop =
        this.$refs.my_footer.$el.offsetTop - (window.innerHeight - 130);

      if (this.scrollTop > 348 && this.scrollTop < footerTop) {
        if (this.isFlag) {
          this.scrollTop = false;
          this.isShowBackTop = true;
          this.$nextTick(() => {
            this.$refs.right0.classList.add("active20210620");
          });
        }
      } else if (this.scrollTop < 348 || this.scrollTop >= footerTop) {
        this.isShowBackTop = false;
        this.$nextTick(() => {
          let ele = this.$refs.right0;
          if (ele.classList.contains("active20210620")) {
            ele.classList.remove("active20210620");
          }
        });
      }
    },
    backTopClick() {
      console.log(1);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style>
@media screen and (max-width: 768px) {
  .article-content .left0 {
    max-width: 100% !important;
  }
  .article-content .left0 {
    padding: 1.428571rem !important;
  }
}

.article-content-box {
  background-color: rgb(243, 244, 245);
  position: relative;
  padding-top: 3.57rem;
}
.article-content {
  max-width: 1184px;
  margin: 0 auto;
  /*padding: 72px 12% 0 12%;*/
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 20px;
}
.article-content .title {
  padding: 15px 0 5px 0;
}
.article-content .left0 {
  background-color: white;
  padding: 20px 80px 80px 80px;
  box-sizing: border-box;
}
.article-content .left0 p {
  width: 100%;
  text-indent: 2em;
  box-sizing: border-box;
}
.article-content .left0 h1 {
  text-align: center;
}
p img {
  display: block;
}
.article-content .left0 img {
  width: 100%;
}

.article-content .left0 {
  max-width: 830px;
}
.article-content .right0 {
  max-width: 335px;
  /*margin-left: 25px;*/
  height: 120vh;
  background-color: #fff;
}
.like0 {
  margin-top: 50px;
  height: 155px !important;
}
.like-img {
  width: 100px;
  height: 100px;
  background: url("https://dcdn.it120.cc/2021/06/14/e52c1361-874f-4fc2-a282-6a50e8f8c6a5.png")
    no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
}
.like-img h2 {
  position: absolute;
  bottom: 14px;
  width: 100%;
  text-align: center;
  color: white;
}
@keyframes Spin {
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(2) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}
.active_20210617 {
  animation: Spin 0.5s linear forwards;
}
.active20210620 {
  position: fixed;
  top: -250px;
  right: calc((100% - 1184px) / 2);
  width: 335px !important;
  animation: opacity 1s linear forwards;
}
.active20210621 {
  animation: opacity 1s linear reverse forwards;
}
@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
