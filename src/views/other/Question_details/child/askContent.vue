<template>
  <div class="ask-content">
    <div class="main">
      <div class="item">
        <div class="title">
          <div class="title-0">
            <div class="Avatar">
              <el-avatar :size="28" :src="circleUrl"></el-avatar>
            </div>
            <div>
              <h2>{{ item.title }}</h2>
            </div>
          </div>
          <div>{{ item.commentNumber }}个回答</div>
        </div>

        <div class="time0">
          <div>发布时间：{{ item.dateAdd }}</div>
        </div>

        <div class="content">
          {{ item.descript }}
        </div>

        <div class="symptom">
          <div v-for="item in keywords_" class="symptom-item">
            {{ item }}
          </div>
        </div>

        <div class="other-info"></div>
      </div>

      <div class="Reply">
        <div @click="loveClick" class="love">
          <div class="Reply-icon">
            <i class="iconfont icon-aixin"></i>
          </div>
          <div>
            <div><h3>给TA抱抱</h3></div>
            <div class="Reply-num">{{ like_num }}个抱抱</div>
          </div>
        </div>

        <div @click="ReplyinpClick" class="Reply-inp">
          <div class="Reply-icon">
            <i class="iconfont icon-msg-o"></i>
          </div>
          <div>
            <div><h3>我来回答</h3></div>
            <div class="Reply-num">{{ item.commentNumber }}个回答</div>
          </div>
        </div>
      </div>

      <div v-show="isShowTextarea" ref="Textare" class="answer-the-questions">
        <div class="go-questions">
          <el-input
            class="go-questions-input"
            type="textarea"
            :rows="6"
            placeholder="请输入您的回答"
            v-model="textarea"
          >
          </el-input>
          <div @click="SubmitAnswerClick" class="Submit-answer">
            <el-button type="success" round>提交回答</el-button>
          </div>
        </div>
      </div>

      <user-answer :ask-list="askList"></user-answer>
    </div>
  </div>
</template>

<script>
import { GetarticleContent } from "../../../../network/home";
import { Setlike } from "../../../../network/article";
import { Getlike } from "../../../../network/article";
import { SetComment } from "../../../../network/article";
import { GetComment } from "../../../../network/article";
import UserAnswer from "./UserAnswer";
import { GetTokenStatus } from "../../../../network/user";

export default {
  name: "askContent",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      item: {},
      keywords: [],
      keywords_: [],
      articleId: "",
      like_num: 0,
      isSetLike: true,
      textarea: "",
      isShowTextarea: false,
      askList: [],
    };
  },
  created() {
    window.scrollTo(0,0)
    this.articleId = this.$route.query.id;
    this.GetarticleContent(this.articleId);
    this.Getlike({ id: this.articleId });
    let obj = {
      refId: this.articleId,
      type: 3,
    };
    this.GetComment(obj);
  },
  watch: {
    $route(to, from) {
      window.scrollTo(0,0)
      this.articleId = this.$route.query.id;
      this.GetarticleContent(this.articleId);
      this.Getlike({ id: this.articleId });
      let obj = {
        refId: this.articleId,
        type: 3,
      };
      this.GetComment(obj);
    },
  },
  components: {
    UserAnswer,
  },
  methods: {
    GetTokenStatus(token) {
      GetTokenStatus(token).then((res) => {
        if (res.msg == "当前登录token无效，请重新登录") {
          let routeData = this.$router.resolve({ path: "/login", query: {} });
          window.open(routeData.href, "_blank");
        } else {
          let obj = {
            content: this.textarea,
            type: 3,
            token: localStorage.getItem("elementToken"),
            refId: this.articleId,
          };
          this.SetComment(obj);
        }
      });
    },
    GetarticleContent(id) {
      GetarticleContent(id).then((res) => {
        this.item = res.data.info;
        this.keywords = res.data.info.keywords;
        this.keywords_ = this.keywords.split(",");
        document.title = this.item.title || "";
      });
    },
    Setlike(obj) {
      if (this.isSetLike) {
        Setlike(obj).then((res) => {
          if (res.msg == "success") {
            this.$message({
              message: "感谢您，给的拥抱！",
              type: "success",
            });
          }
        });
        this.isSetLike = false;
      } else {
        this.$message({
          message: "拥抱不可取消呦！",
          type: "warning",
        });
      }
    },
    Getlike(obj) {
      Getlike(obj).then((res) => {
        if (res.data) {
          this.like_num = res.data.totalRow;
        } else {
          this.like_num = 0;
        }
      });
    },
    loveClick() {
      let obj = {
        token: localStorage.getItem("elementToken"),
        id: this.articleId,
      };
      this.Setlike(obj);
      setTimeout(() => {
        this.Getlike({ id: this.articleId });
      }, 500);
    },
    ReplyinpClick() {
      if (this.isShowTextarea == false) {
        this.isShowTextarea = true;
        this.$refs.Textare.classList.remove("height0_");
        this.$refs.Textare.classList.add("height0");
      } else {
        this.$refs.Textare.classList.remove("height0");
        this.$refs.Textare.classList.add("height0_");
        setTimeout(() => {
          this.isShowTextarea = false;
        }, 500);
      }
    },
    SetComment(obj) {
      SetComment(obj).then((res) => {
        console.log(res);
        if (res.msg == "success") {
          this.$message({
            message: "回复提交成功，感谢您的支持",
            type: "success",
          });
          this.textarea = "";
          let obj = {
            refId: this.articleId,
            type: 3,
          };
          this.GetComment(obj);
        } else if (res.code == 10000) {
          this.$message({
            message: "提交内容不能超过1000字！",
            type: "warning",
          });
        }
      });
    },
    GetComment(obj) {
      GetComment(obj).then((res) => {
        this.askList = res.data;
      });
    },
    SubmitAnswerClick() {
      let token = localStorage.getItem("elementToken");
      this.GetTokenStatus(token);
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .answer-the-questions {
    margin-top: 0px !important;
  }
  .item {
    margin-bottom: 0px !important;
    padding: 15px !important;
  }
  .Reply {
    padding: 15px !important;
  }
}
.item {
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 10px;
}
.title {
  justify-content: space-between;
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
.time0 {
  color: #cccccc;
  font-size: 13px;
  margin-top: 10px;
}
.symptom {
  display: flex;
  flex-wrap: wrap;
}
.symptom-item {
  padding: 6px 10px;
  color: #cccccc;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-right: 15px;
  font-size: 14px;
  margin-bottom: 10px;
}
.Reply {
  display: flex;
  padding: 20px 34px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px;
}
.Reply > div {
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.Reply h3 {
  color: #7d7b7b;
}
.Reply > div i {
  font-size: 38px;
}

.Reply-icon {
  opacity: 0.7;
  width: 55px;
  height: 55px;
  margin-right: 20px;
  background-color: #fe9a2e;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Reply-num {
  color: #8d8c8c;
}
.answer-the-questions {
  margin: 30px 0;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px;
  border-color: white;
}
.Submit-answer {
  display: flex;
  justify-content: center;
}
.Submit-answer button {
  padding: 12px 36px;
}
@keyframes height0 {
  from {
    width: 0px;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1;
  }
}
@keyframes height0_ {
  from {
    width: 100%;
    opacity: 1;
  }
  to {
    width: 0px;
    opacity: 0;
  }
}
.height0 {
  animation: height0 0.5s linear forwards;
}
.height0_ {
  animation: height0_ 0.5s linear forwards;
}
</style>
<style>
.go-questions textarea {
  border-color: white !important;
}
</style>
