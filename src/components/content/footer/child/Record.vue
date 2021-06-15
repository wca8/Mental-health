<template>
  <div class="record">
    <div class="main">
      <div><a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">鲁ICP备2021013178号</a></div>
      <div>Copyright © 2020-2021 心理栈 版权所有</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Record"
}
</script>

<style scoped>
.record{
  width: 1270px;
  margin: 0 auto;
  padding: 30px 0px;
  border-bottom: .4px solid #4c4c4c;
}
.main{
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: #bab9b9;
  padding-left: 66px;
}
.main>div{
  margin-right: 20px;
}
a{
  color: #bab9b9;
}
</style>