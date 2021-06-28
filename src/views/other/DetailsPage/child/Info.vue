<template>
  <div class="info">
      <div class="main">
        <div class="time">发布时间：{{listInfo.dateAdd}}</div>
        <div><i class="iconfont icon-dianzan1"></i>{{listInfo.usefulNumber}}</div>
        <div><i class="iconfont icon-pinglun"></i>{{listInfo.commentNumber}}</div>
        <div><i class="iconfont icon-add"></i>{{listInfo.numberFav}}</div>

      </div>
      <div class="Keyword">
        <span>{{listInfo.keywords}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props:{
    listInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.info{
  margin-bottom: 20px;
}
.main{
  display: flex;
 justify-content: center;
}
.main div{
  margin-right: 25px;
  color: rgb(153,153,153);
}
.Keyword{
  text-align: center;
  margin-top: 10px;
}
.Keyword span{
  background-color: rgba(74,179,68,.4);
  color: white;
  padding: 2px 4px;
  font-size: 14px;
}
</style>