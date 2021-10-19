<template>
  <div class="Tips">
    <i class="el-icon-warning-outline"></i>
       提示:心理栈移动端网站暂不支持文章发布,帖子发布,体验更多功能,请访问PC端heart1.top
  </div>
</template>

<script>
export default {
  name: "Tips",
}
</script>

<style scoped>
.Tips{
  color: white;
  background-color: rgba(0,0,0,.4);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  padding: 10px;
  box-sizing: border-box;
}
</style>