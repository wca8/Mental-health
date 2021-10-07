<template>
  <div id="user">
    <div class="main">
      <div class="left">

          <top-info :user-info="userInfoList"></top-info>
          <tab-control></tab-control>

          <keep-alive>
            <router-view/>
          </keep-alive>
      </div>

      <div class="right">

      </div>
    </div>

   <my-footer></my-footer>
  </div>
</template>

<script>
import TopInfo from "./child/TopInfo";
import TabControl from "./child/TabControl";
import MyFooter from "../../../components/content/footer/MyFooter";
import {GetUserInfo} from "../../../network/login";
import {Getlike} from "../../../network/article";
import {mapState} from "vuex";


export default {
  name: "User",
  components:{
    TopInfo,
    TabControl,
    MyFooter,
  },
  data(){
    return{
      userInfoList:{},
      token:'',
    }
  },
  watch:{
    userInfoChange(){
      this.GetUserInfo(this.token)
    }
  },
  computed:{
    ...mapState("user", ["userInfoChange"]),
  },
  created() {
    this.token=localStorage.getItem('elementToken')
    this.GetUserInfo(this.token)
    let obj={
      id:this.id,
      token:localStorage.getItem('elementToken')
    }
    this.Getlike(obj)

  },
  methods:{
    GetUserInfo(token){
      GetUserInfo(token).then(res=>{
        this.userInfoList=res.data.base;
      })
    },
    Getlike(obj){
      Getlike(obj).then(res=>{

      })
    },

  }
}
</script>

<style scoped>
#user{
  padding-top: 72px;
  background-color: rgb(248, 247, 247);
  min-height: 100vh;
}
.main{
  min-height: 100vh;
  width: 970px;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
}
.left{
  width: 68%;
  min-height: 100vh;
  padding: 20px;
  padding-bottom: 0;
  box-sizing: border-box;
}
.right{
  width: 30%;
  background-color: #fff;
  margin-top: 25px;
}
</style>