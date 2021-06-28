<template>
  <div class="Favorites">
    <div class="main">
      <div @click="addClick"><i class="iconfont icon-add"></i>收藏</div>
      <div @click="rewardClick"><i class="iconfont icon-qian"></i>打赏</div>
    </div>
  </div>
</template>

<script>
import {SetFav} from "../../../../network/article";

export default {
  name: "Favorites",
  created() {

  },
  props:{
    articleId:{
      type:String,
      default(){
        return ''
      }
    }
  },
  methods:{
    addClick(){
      let obj={
        newsId:this.articleId,
        token:localStorage.getItem('elementToken')
      }
      this.SetFav(obj)
      this.$message({
        message: '收藏成功！',
        type: 'success'
      });
    },
    SetFav(obj){
      SetFav(obj).then(res=>{
        console.log(res)
      })
    },
    rewardClick(){
      this.$emit("rewardClick")
    },
  }
}
</script>

<style scoped>
.Favorites{

}
.main{
  display: flex;
  justify-content: center;

}
.main>div{
  width: 130px;
  line-height: 40px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  background-color: rgba(74,179,68,.9);
  color: white;

}
.Favorites{
  padding-bottom: 40px;

}
</style>