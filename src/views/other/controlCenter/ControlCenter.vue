<template>
  <div class="control-center">
    <div class="main">
      <el-tabs v-model="activeName" >

        <el-tab-pane   label="基本信息" name="first">
            <user-info @Refresh_="Refresh_" :user-info_="userInfo"></user-info>
        </el-tab-pane>

        <el-tab-pane label="修改头像" name="second">
          <avatar></avatar>
        </el-tab-pane>

        <el-tab-pane label="修改密码" name="third">
          <password></password>
        </el-tab-pane>

        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>


    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from "../../../components/content/footer/MyFooter";
import {GetUserInfo} from "../../../network/login";
import UserInfo from "./child/UserInfo";
import Avatar from "./child/Avatar";
import Password from "./child/Password";
export default {
  name: "ControlCenter",
  created() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    let token=localStorage.getItem('elementToken');
    this.GetUserInfo(token);
  },
  data() {
    return {
      activeName: 'first',
      userInfo:{},
    };
  },
  components:{
    MyFooter,
    UserInfo,
    Avatar,
    Password,

  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    },
    GetUserInfo(token){
      GetUserInfo(token).then(res=>{
        this.userInfo=res.data.base;
        console.log(this.userInfo)
        console.log(res)
      })
    },
    Refresh_(){
      let token=localStorage.getItem('elementToken');
      this.GetUserInfo(token);
    }
  }
}
</script>

<style scoped>
.control-center{
  min-height: 550px;
  background-color: rgb(243,243,245);
  padding-top: 72px;

}
.main{
  width: 980px;
  min-height: 550px;
  background-color: #fff;
  margin: 20px auto;
  padding: 40px;
  box-sizing: border-box;
}

</style>
<style>
.el-tabs__item.is-active{
  color: rgb(77,179,68);
  font-size: 18px!important;
}
.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active{
  border: none!important;
}
.el-tabs--card>.el-tabs__header .el-tabs__nav{
  border: none!important;
}
.el-tabs--left.el-tabs--card .el-tabs__item.is-left{
  border: none!important;
  border-bottom: 1px solid #E4E7ED;
}

.el-tabs__active-bar{
  background-color:rgb(77,179,68)!important;
}
</style>