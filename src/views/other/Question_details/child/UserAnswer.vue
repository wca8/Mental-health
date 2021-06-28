<template>
  <div class="User-answer">
    <div class="main">
      <div v-for="item in askList" class="item">
        <div class="title">
          <div class="Avatar">
            <img :src="item.commentUserInfo.avatarUrl" alt="">
          </div>
          <div class="nick">{{item.commentUserInfo.nick}}</div>

        </div>

        <div class="time">
          {{item.dateAdd}}
        </div>

        <div v-html="item.content" class="content">

        </div>

        <div class="bottom">
            <div class="attention">
              <i class="iconfont icon-guanzhu"></i>关注
            </div>
            <div class="comment">
              <i class="iconfont icon-msg-o"></i>评论
            </div>

            <div class="Reward">
              <i class="iconfont icon-qian"></i>打赏
            </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserAnswer",
  props:{
    askList:{
      type:Array,
      default(){
        return []
      }
    }

  }
}
</script>

<style scoped>
.item{
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 20px;
}
.item>div{
  display: flex;
  align-items: center;
}
.Avatar{
  margin-right: 15px;
}
.Avatar img{
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.content{
  margin: 20px 0;
}
.bottom>div{
  margin-right: 30px;
  color: #848383;
}
.bottom>div i{
  font-size: 20px;
  cursor: pointer;
}
.time{
  color: #cccccc;
  font-size: 13px;
  margin-top: 6px;
}
</style>