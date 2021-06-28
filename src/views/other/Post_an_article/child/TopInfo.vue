<template>
  <div class="top-info">
    <div class="main">
        <div class="left">
          <div>
            <img :src="userInfo.avatarUrl" alt="">
          </div>
          <div class="nick">
            <h3>{{userInfo.nick}}</h3>
          </div>
        </div>

        <div class="center">
          文章管理
        </div>

        <div class="right">
          <div>
            <el-button title="存在内容未正确填写" :disabled="isFlag" @click.native="submitClick" type="success" round>发布文章</el-button>
          </div>

        </div>
    </div>
  </div>
</template>

<script>
import {GetUserInfo} from "../../../../network/login";

export default {
  name: "TopInfo",
  data(){
    return{
      userInfo:{}
    }
  },
  props:{
    isFlag:{
      type:Boolean,
      default(){
        return true
      }
    }
  },
  created() {
    let token=localStorage.getItem('elementToken');
    this.GetUserInfo(token)
  },
  methods:{
    GetUserInfo(token){
      GetUserInfo(token).then(res=>{
       this.userInfo=res.data.base;
      })
    },
    submitClick(){
      console.log(1)
      this.$emit('submitClick')
    }
  }
}
</script>

<style scoped>
.top-info{
  height: 56px;
  position: relative;
  padding:  0 30px;
  box-sizing: border-box;
  border-bottom: 2px solid rgba(243,243,243);
}
.main{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left{
  overflow: hidden;

}
.left div{
  display: flex;
  align-items: center;

}
.left img{
 width: 45px;
  height: 45px;
  border-radius: 50%;
}
.left,.right{
  display: flex;
  align-items: center;
}
.nick{
  margin-left: 16px;
  color: #3b3a3a;
}
.center{
  flex: 1;
  text-align: center;
  padding-right: 3%;
}
</style>