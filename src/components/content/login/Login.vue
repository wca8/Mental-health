<template>
  <div  class="login" >
    <div  class="userInfo" v-if="$store.state.isToken">
      <div v-if="userInfo.avatarUrl"><img @click="userInfoClick" :src="userInfo.avatarUrl" alt=""></div>
      <div v-else><img @click="userInfoClick" src="https://dcdn.it120.cc/2021/06/13/fead149b-8be7-41f5-8f03-a098a0cfa46c.jpg" alt=""></div>
      <el-dropdown >
      <span  class="el-dropdown-link ">
         <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="ControlCenterClick">管理中心</el-dropdown-item>
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
import {GetTokenStatus} from "../../../network/user";
import {mapActions,mapState} from "vuex";


export default {
  name: "Login",
  data(){
    return{
      token:'',
      userInfo:{}
    }

  },
  computed:{
    ...mapState("user", ["userInfoChange"]),
    user(){
      return this.$store.state.userFlag;
    }
  },
  watch:{
    userInfoChange(){
      this.GetUserInfo(this.token)
    },
    user(){
      if(this.token.trim().length>0){
        this.GetUserInfo(this.token)
      }
    }
  },
  created() {
    this.token=localStorage.getItem('elementToken')||''
    if(this.token.trim().length>0){
      this.changeToken()
      this.GetUserInfo(localStorage.getItem('elementToken'))
    }



  },
  methods:{
    ...mapActions("advisoryModule", ["A_SetOrderList"]),
    GetTokenStatus(token){
      GetTokenStatus(token).then(res=>{
        if(res.msg=='当前登录token无效，请重新登录'){
          let routeData = this.$router.resolve({ path: '/login', query: {  } });
          window.open(routeData.href, '_blank');
        }else{
          //更新vuex中待咨询数据
          this.A_SetOrderList({num:1})

          this.GetUserInfo(token)
          this.$router.push('/user')

        }
      })
    },
    ControlCenterClick(){
      GetTokenStatus(this.token).then(res=>{
        if(res.msg=='当前登录token无效，请重新登录'){
          let routeData = this.$router.resolve({ path: '/login', query: {  } });
          window.open(routeData.href, '_blank');
        }else{
          this.$router.push('/ControlCenter')
        }
      })

    },
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
      this.GetTokenStatus(this.token)

    },
    GetUserInfo(token){
      GetUserInfo(token).then(res=>{
        this.userInfo=res.data.base;

      })
    },
    SetLoginOut(token){
      SetLoginOut(token).then(res=>{
        console.log(res)
      })
    },
    signOut(){

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
        this.$router.push('/home')
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