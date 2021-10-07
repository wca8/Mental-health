<template>
  <div class="change-Password">
    <div class="main">
      <el-input  class="password" placeholder="请输入原密码" v-model="old_password" show-password></el-input>
      <el-input class="password" placeholder="请输入新密码" v-model="new_password" show-password></el-input>
      <el-button :disabled="isFlag" @click="modifyClick" class="modifyClick" type="success" round>确认修改</el-button>
    </div>
  </div>
</template>

<script>
import {isEmpty} from "../../../../common/utils";
import {modifyPassword} from "../../../../network/user";

export default {
  name: "Password",
  data(){
    return{
      old_password:'',
      new_password:'',
      isFlag:true,
    }
  },
  computed:{
    showPassword(){
      let {old_password,new_password}=this;
      return {old_password,new_password}
    }
  },
  watch:{
    showPassword(){
      let a=isEmpty(this.old_password);
      let b=isEmpty(this.new_password);
      if(a!=true&&b!=true){
        this.isFlag= false
      }else{
        this.isFlag= true
      }
    }
  },
  methods:{
    modifyPassword(obj){
      modifyPassword(obj).then(res=>{
        console.log(res)
        if(res.msg=='原密码不正确'){
          this.$message.error('原密码输入不正确！');
        }else if(res.msg=='success'){
          this.$message({
            message: '恭喜你，密码修改成功',
            type: 'success'
          });

        }
      })
    },
    modifyClick(){

       let obj={
         pwdNew:this.new_password,
         pwdOld:this.old_password,
         token:localStorage.getItem('elementToken')
       }
       this.modifyPassword(obj);
       this.new_password='';
       this.old_password='';
    }
  }
}
</script>

<style scoped>
.main{
  /*padding: 30px;*/
}
.password{
  margin-top: 30px;
  width: 65%;
}
.modifyClick{
  display: block;
  margin-top: 30px;
}
</style>