<template>
  <div class="null">
    <div><i class="el-icon-tickets"></i></div>
    <div>您还没有相关的订单</div>
  </div>
</template>

<script>
export default {
name: "Null"
}
</script>

<style scoped>
.null{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 300px;
  font-size: 40px;
  color: rgb(208, 209, 210);
}
.null i{
  font-size: 50px;
}
</style>