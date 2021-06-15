<template>
  <div  class="login" >
    <div  class="userInfo" v-if="$store.state.isToken">
      <img @click="userInfoClick" src="https://dcdn.it120.cc/2021/06/13/fead149b-8be7-41f5-8f03-a098a0cfa46c.jpg" alt="">
      <el-dropdown >
      <span  class="el-dropdown-link ">
         <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item   @click.native="signOut">退出登录</el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div @click="loginClick" v-else>登录</div>
  </div>
</template>

<script>
import {GetUserInfo} from "../../../network/login";
import {SetLoginOut} from "../../../network/login";

export default {
  name: "Login",
  data(){
    return{
      token:[],
    }

  },
  created() {

    if(localStorage.getItem('elementToken')){

      this.changeToken()
    }

  },
  methods:{
    changeToken() {
      this.$store.commit('changeToken')
    },
    removeToken() {
      this.$store.commit('removeToken')
    },
    loginClick(){
      this.$router.push('/login')
    },
    userInfoClick(){
      // console.log("用户信息")
      let token=localStorage.getItem('elementToken')
      this.GetUserInfo(token)
      this.$router.push('/user')
    },
    GetUserInfo(token){
      GetUserInfo(token).then(res=>{
        // console.log(res)
      })
    },
    SetLoginOut(token){
      SetLoginOut(token).then(res=>{
        console.log(res)
      })
    },
    signOut(){
      console.log("diank")
      this.$confirm('您确定要退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        confirmButtonClass:'dropOut-20210615',
        type: 'warning'
      }).then(() => {
        let token=localStorage.getItem('elementToken');
        this.SetLoginOut(token);
        localStorage.removeItem("elementToken");
        this.removeToken()
        this.$message({
          type: 'success',
          message: '退出登录成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    }
  },

}
</script>

<style scoped>
.login{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  cursor: pointer;
}
.userInfo{
  display: flex;
  align-items: center;
  justify-content: center;
}
.userInfo img{
  /*width: 100%;*/
  /*height: 100%;*/
  width:36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 5px;
}

</style>
<style>
.dropOut-20210615{
  background-color: rgb(74,179,68)!important;
}
</style>