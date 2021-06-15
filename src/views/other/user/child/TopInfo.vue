<template>
  <div class="top-info">
    <div class="left">
      <img src="https://dcdn.it120.cc/2021/06/13/fead149b-8be7-41f5-8f03-a098a0cfa46c.jpg" alt="">

    </div>
    <div class="right">
      <div class="top">
        <h2>{{userInfo.nick}}</h2>
      </div>
      <div class="bottom">
          <div>
            <div>1</div>
            <div>2</div>
            <div>0</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div>
          <div>关注</div>
          <div>粉丝</div>
          <div>文章</div>
          <div>点赞</div>
          <div>好友</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "TopInfo",
  props:{
    userInfo:{
      type:Object,
      default(){
        return {}
      }
    }

  }
}
</script>

<style scoped>
.top-info{
  display: flex;
  align-items: center;
  margin-top: 5px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 10px;
}
.left{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}
.left img{
  width: 100%;
}
.right{
  flex: 1;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
}
.top{
  padding-left: 11px;
}
.bottom{
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  font-size: 13px;
}
.bottom>div{
  display: flex;

}
.bottom>div div{
  width: 10%;
  text-align: center;
  cursor: pointer;
}
</style>