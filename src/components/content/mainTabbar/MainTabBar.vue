<template>
  <el-row>
    <el-col :xs="0" :span="24">
      <tab-bar>
        <tab-bar-item path="/home">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/read">
          <div slot="item-text">阅读</div>
        </tab-bar-item>
        <tab-bar-item path="/questions">
          <div slot="item-text">问答</div>
        </tab-bar-item>
        <tab-bar-item path="/advisory">
          <div slot="item-text">心理咨询</div>
        </tab-bar-item>
        <tab-bar-item path="/course">
          <div slot="item-text">课程</div>
        </tab-bar-item>
        <tab-bar-item path="/test">
          <div slot="item-text">测试</div>
        </tab-bar-item>
        <tab-bar-item path="/talk">
          <div slot="item-text">倾诉</div>
        </tab-bar-item>
      </tab-bar>
    </el-col>

  
      <el-col :xs="24" :sm="0" :span="24">
        <div @click="drawer = true" class="fold-nav">
          <i class="el-icon-s-fold"></i>
        </div>
        <el-drawer
          title="我是标题"
          :modal="false"
          :visible.sync="drawer"
          :with-header="false"
        >
          <tab-bar>
            <tab-bar-item path="/home">
              <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/read">
              <div slot="item-text">阅读</div>
            </tab-bar-item>
            <tab-bar-item path="/questions">
              <div slot="item-text">问答</div>
            </tab-bar-item>
            <tab-bar-item path="/advisory">
              <div slot="item-text">心理咨询</div>
            </tab-bar-item>

          </tab-bar>
          <login ></login>
          
        </el-drawer>
      </el-col>
  </el-row>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
import Login from "../login/Login";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
    Login
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
.tips{
  position: absolute;
  bottom: 0;
  padding: 15px;
  box-sizing: border-box;
  color: #bfbfbf;
}
.fold-nav {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 0.714286rem;
}
.fold-nav i {
  font-size: 1.857143rem;
  opacity: 0.4;
}
</style>
