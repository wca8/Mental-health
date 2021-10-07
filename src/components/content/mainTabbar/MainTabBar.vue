<template>
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
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
