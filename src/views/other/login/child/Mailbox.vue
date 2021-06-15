<template>
  <div class="login-mail">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
      <el-form-item  prop="username">
        <el-input
            prefix-icon="el-icon-user-solid"
            placeholder="请输入邮箱账号"
            v-model="ruleForm.username"
            clearable>
        </el-input>
      </el-form-item>
      <el-form-item  prop="password">
        <el-input
            prefix-icon=" el-icon-menu"
            class="username"
            placeholder="请输入密码"
            v-model="ruleForm.password"
            show-password>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="btn" type="success" @click="submitForm('ruleForm')">立即登录</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
import {GetMailBoxLogin} from "../../../../network/login";
import { Message } from 'element-ui';
import {INCREMENT} from "../../../../../../../15vuex/learnvuex/src/store/mutations-types";
export default {
  name: "Mailbox",
  data(){
    return{
      ruleForm: {
        username: '',
        password:'',

      },
      rules: {
        username: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            validator: function(rule, value, callback) {
              if (/^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value) == false) {
                callback(new Error("请输入邮箱"));
              } else {
                //校验通过
                callback();
              }
            },
            trigger: "blur"
          }
        ],

        password:[
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            validator: function(rule, value, callback) {
              if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,18}$/.test(value) == false) {
                callback(new Error("密码须包含数字、字母两种元素，且密码位数为6-16位"));
              } else {
                //校验通过
                callback();
              }
            },
          }
        ]

      }
    }
  },
  methods:{
    open4() {
      console.log(1)
      Message.error('错了哦，这是一条错误消息');
    },
    changeToken() {
      this.$store.commit('changeToken')
    },
    GetMailBoxLogin(obj){
      GetMailBoxLogin(obj).then(res=>{
        console.log(res)

        if(res.code==0){
          this.$message({
            message: '恭喜您，登录成功！',
            type: 'success',
          });
          this.changeToken();
          localStorage.setItem("elementToken", res.data.token);
          this.$router.replace('/user');

        }else{
          this.$message.error('账号或密码输入错误，请重新输入!');
          this.ruleForm.password='';
        }
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let obj={
            email:this.ruleForm.username,
            pwd:this.ruleForm.password,
            deviceId:'oppo',
            deviceName:'r17',
          }
          this.GetMailBoxLogin(obj);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
.login-mail{
  padding: 30px;
  padding-bottom: 0px;
}
.username{
  margin-top: 8px;
}
.btn{
  width: 100%;
  margin-top: 8px;

}
</style>