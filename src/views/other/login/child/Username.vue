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
export default {
  name: "Username",
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
              if (/^[A-Za-z0-9-_\u4e00-\u9fa5]{3,20}$/.test(value) == false) {
                callback(new Error("请输入中英文，数字等组成的用户名（3到20个字符）"));
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
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
}
.username{
  margin-top: 8px;
}
.btn{
  width: 100%;
  margin-top: 8px;
}
</style>