<template>
  <el-row class="myfooter">
    <el-col :xs="0" :span="24">
      <contact></contact>
      <links></links>
      <record></record>
    </el-col>
    <el-col class="mobile" :xs="24" :sm="0">
      <div>心理栈官方QQ:1660883200</div>
      <div>鲁ICP备2021013178号</div>
      <div>© 心理栈 版权所有</div>
      <div>Copyright © 2020-2021 </div>
      <div>更多功能请使用PC端访问:heart1.top</div>
    </el-col>
  </el-row>
</template>

<script>
import Links from "./child/Links";
import Contact from "./child/Contact";
import Record from "./child/Record";
export default {
  name: "MyFooter",
  components: {
    Links,
    Contact,
    Record,
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .myfooter {
    width: 100% !important;
    min-height: auto !important;
    background: transparent !important;
    background-color: rgb(249, 249, 250) !important;
    font-size: 13px;
    color: #8c8c8c;
  }
}
.mobile{
  padding: 40px 0;
}
.mobile div{
  display: flex;
  justify-content: center;
}
.myfooter {
  min-height: 400px;
  background: linear-gradient(
    rgb(36, 40, 43),
    rgb(40, 45, 50),
    rgb(48, 53, 59)
  );
  margin-top: 40px;
}
</style>
