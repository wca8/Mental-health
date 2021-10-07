<template>
  <div class="Application">
    <el-button @click="CheckInClick" size="medium" type="success">申请入住心理咨询师</el-button>
  </div>
</template>

<script>
export default {
  name: "Application",
  methods:{
    CheckInClick(){
      this.$message({
        message: '该功能暂未开放！',
        type: 'warning'
      });
    }
  }
}
</script>

<style scoped>
.Application{
  display: flex;
  align-items: center;
  justify-content: center;
  padding:25px;
  background-color: #fff;
  border-radius: 10px;
}
</style>