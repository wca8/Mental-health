<template>
  <div class="Tips">
    <i class="el-icon-warning-outline"></i>
    温馨提示:心理栈暂未适配移动端页面，请使用PC端浏览器访问: heart1.top
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