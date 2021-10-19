<template>
  <el-row>
    <el-col :xs="0" :span="24">
      <div class="advisory">
        <div class="main">
          <div class="left">
            <tab-control @tabControl="tabControl"></tab-control>
            <teacher-list :teacher-list="teacherList"></teacher-list>
          </div>

          <div class="right">
            <application></application>
            <recommend></recommend>
          </div>
        </div>

        <my-footer></my-footer>
      </div>
    </el-col>

    <el-col :sm="0" :xs="24" :span="24">
      <div class="advisory">
        <div class="main">
          <div class="left">
            <tab-control @tabControl="tabControl"></tab-control>
            <teacher-list :teacher-list="teacherList"></teacher-list>
          </div>
        </div>

        <my-footer></my-footer>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import TabControl from "./child/TabControl";
import MyFooter from "../../components/content/footer/MyFooter";
import TeacherList from "./child/TeacherList";
import { GetTeacherList } from "../../network/advisory";
import Application from "./child/Application";
import Recommend from "./child/Recommend";

export default {
  name: "Advisory",
  data() {
    return {
      teacherList: [],
    };
  },
  created() {
    this.GetTeacherList(239441);
  },
  components: {
    TabControl,
    MyFooter,
    TeacherList,
    Application,
    Recommend,
  },
  methods: {
    GetTeacherList(categoryId) {
      GetTeacherList(categoryId).then((res) => {
        // console.log(res)
        this.teacherList = res.data.result;
      });
    },
    tabControl(id) {
      this.GetTeacherList(id);
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .advisory {
    background-color: #fff!important;
  }
  .main {
    width: 100vw !important;
  }
  .main > div {
    margin-top: 0px !important;
  }
}
.advisory {
  padding-top: 3.75rem;
  min-height: 500px;
  background-color: rgb(243, 243, 243);
}
.main {
  width: 980px;
  margin: 0 auto;
  display: flex;
  min-height: 700px;
  justify-content: space-between;
}
.main > div {
  /*background-color: #fff;*/
  margin-top: 20px;
}
.left {
  width: 650px;
  min-height: 500px;
}
.right {
  width: 300px;
  min-height: 500px;
}
.Application {
}
</style>
