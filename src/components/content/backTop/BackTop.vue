<template>
  <div class="back-top">
    <i class="el-icon-upload2"></i>
  </div>
</template>

<script>
export default {
name: "BackTop"
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .back-top{
    bottom: 1.785714rem!important;
    width: 35px!important;
    height: 35px!important;
  }
}
.back-top{
  position: fixed;
  bottom:60px ;
  right: 3%;
  z-index: 9999;
  width: 40px;
  height: 40px;
  background-color: rgba(191,191,192,.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 26px;
  cursor: pointer;
}
.back-top img{
  width: 43px;
}
</style>
