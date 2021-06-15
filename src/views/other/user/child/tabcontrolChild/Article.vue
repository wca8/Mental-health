<template>
  <div class="article">
    <div v-if="list.length">
      <h2>我的文章列表</h2>
    </div>

    <div v-else>
      <h2>您还未发布文章，赶快去创作吧</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data(){
    return{
      list:[],
    }
  }
}
</script>

<style scoped>
.article{
  min-height: 80vh;
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 10px;
}
</style>