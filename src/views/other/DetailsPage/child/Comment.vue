<template>
  <div class="comment">
    <div class="main">
      <div class="top">
        <el-row>
          <el-col :xs="0" :sm="0" :span="24">
            <el-avatar shape="circle" :size="50" :src="circleUrl"></el-avatar>
          </el-col>
        </el-row>

        <div class="textarea">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="留下友善的评论吧！"
            v-model="textarea"
          >
          </el-input>
        </div>
      </div>
      <div class="submit">
        <el-button @click="submitClick" type="success">提交回复</el-button>
      </div>

      <user-comment
        v-for="item in commentList"
        :comment-list="item"
      ></user-comment>
      <div class="tips-comment" v-if="!commentList">
        <i class="el-icon-circle-plus-outline"></i>暂无评论，赶快留下您的脚印吧
      </div>
    </div>
  </div>
</template>

<script>
import { SetComment } from "../../../../network/article";
import { GetComment } from "../../../../network/article";
import UserComment from "./UserComment";
import { GetTokenStatus } from "../../../../network/user";

export default {
  name: "Comment",
  data() {
    return {
      circleUrl:
        "https://dcdn.it120.cc/2021/06/13/fead149b-8be7-41f5-8f03-a098a0cfa46c.jpg",
      textarea: "",
      commentList: [],
    };
  },
  components: {
    UserComment,
  },
  props: {
    articleId: {
      type: String,
      default() {
        return "";
      },
    },
  },
  created() {
    let obj = {
      refId: this.articleId,
      type: 3,
    };
    this.GetComment(obj);
  },
  methods: {
    GetTokenStatus(token) {
      GetTokenStatus(token).then((res) => {
        // console.log(res)
        if (res.msg == "当前登录token无效，请重新登录") {
          let routeData = this.$router.resolve({ path: "/login", query: {} });
          window.open(routeData.href, "_blank");
        } else {
          let obj = {
            content: this.textarea,
            token: localStorage.getItem("elementToken"),
            type: 3,
            refId: this.articleId,
          };
          this.SetComment(obj);
          this.textarea = "";
        }
      });
    },
    SetComment(obj) {
      SetComment(obj).then((res) => {
        // console.log(res)
        if ((res.msg = "success")) {
          this.$message({
            message: "回复成功！",
            type: "success",
          });

          let obj = {
            refId: this.articleId,
            type: 3,
          };
          this.GetComment(obj);
        }
        console.log(res);
      });
    },
    GetComment(obj) {
      GetComment(obj).then((res) => {
        // console.log(res)
        if (res.msg == "暂无数据") {
          this.commentList = false;
        } else {
          this.commentList = res.data;
        }
      });
    },
    submitClick() {
      this.GetTokenStatus(localStorage.getItem("elementToken"));
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .textarea {
    margin-left: 0 !important;
    margin-bottom: 0.714286rem;
  }
  
}
.comment {
  margin-top: 40px;
}

.top {
  display: flex;
}
.top > div {
  display: flex;
  align-items: center;
}
.textarea {
  margin-left: 2.5rem;
  flex: 1;
}
.submit {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}
textarea {
  border-color: rgb(74, 179, 68);
}
.tips-comment {
  margin-top: 20px;
  font-size: 30px;
  color: #e5e3e3;
}
</style>
