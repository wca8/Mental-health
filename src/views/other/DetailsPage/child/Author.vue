<template>
  <div class="author">
    <div class="main">
      <div class="Avatar">
        <div class="Avatar-img"><img src="https://dcdn.it120.cc/2021/06/13/fead149b-8be7-41f5-8f03-a098a0cfa46c.jpg" alt=""></div>
        <div class="name">
          <h3>
            心理栈官方文章
          </h3>
          <div >
            <i class="iconfont  icon-guanfang"></i>
            <i class="iconfont icon-guanfang_icon"></i>
          </div>
        </div>
      </div>
      <div class="Signature">
        愿世界美好与你环环相扣
      </div>

      <div class="like">
        <div><i class="iconfont icon-shoucang1"></i>点赞{{like}}</div>
        <div><i class="iconfont icon-pinglun"></i>评论</div>
        <div><i class="iconfont icon-shoucang1">已收藏</i></div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "Author",
  props:{
    like:{
      type:Number,
      default(){
        return 0
      }
    }
  }
}
</script>

<style scoped>
.author{
  padding: 50px 0px;
  border-bottom: 10px solid rgb(243,244,245);
}
.Avatar>div{
  display: flex;
  align-items: center;
  justify-content: center;
}
.Avatar img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.Signature{
  text-align: center;
  font-size: 16px;
  color: #cccccc;
  margin-top: 10px;
}
.name{
  margin-top: 20px;
}
.like{
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  color: rgb(77,179,68);
}
</style>