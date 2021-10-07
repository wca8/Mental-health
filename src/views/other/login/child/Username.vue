<template>
  <div class="login-username">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
      <el-form-item  prop="username">
        <el-input
            prefix-icon="el-icon-user-solid"
            placeholder="请输入用户名"
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
import {GetUserNameLogin} from "../../../../network/login";


export default {
  name: "Username",
  components:{

  },
  data(){
    return{
      ruleForm: {
        username: '',
        password:'',

      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            validator: function(rule, value, callback) {
              if (/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){3,16}$/.test(value) == false) {
                callback(new Error("输入用户名，3-20个以字母开头、可带数字、“_”、“.”的字串"));
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
              if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(value) == false) {
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
    changeToken() {
      this.$store.commit('changeToken')
    },
    GetUserNameLogin(obj){
      GetUserNameLogin(obj).then(res=>{
        console.log(res)
        if(res.msg=='success'){
          localStorage.setItem("elementToken", res.data.token);
          this.changeToken();
          this.$router.replace('/user');
          this.$message({
            message: '登录成功！',
            type: 'success'
          });
        }else{
          this.$message.error('账号或密码输入错误，请重新输入!');
        }
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let obj={
            deviceId:'302532',
            deviceName:'Realme X',
            pwd:this.ruleForm.password,
            username:this.ruleForm.username,
          }
          this.GetUserNameLogin(obj)
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
.login-username{
  padding: 30px;
  padding-bottom: 0px
}
.username{
  margin-top: 8px;
}
.btn{
  width: 100%;
  margin-top: 8px;
}
</style>