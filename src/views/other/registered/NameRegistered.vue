<template>
  <div class="name-Registered">
    <div class="main">
      <logo class="logo-img"></logo>
      <div class="main-content">
        <h1>欢迎注册心理栈</h1>
        <h3>爱生活，爱自己</h3>
        <div class="form">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm"   class="demo-ruleForm">
            <el-form-item  prop="username" >
              <el-input
                  prefix-icon="el-icon-user-solid"
                  placeholder="请输入用户名"
                  v-model="ruleForm.username"
                  clearable>
              </el-input>
            </el-form-item>
            <el-form-item prop="password" >
              <el-input
                  prefix-icon=" el-icon-menu"
                  class="username"
                  placeholder="请输入密码"
                  v-model="ruleForm.password"
                  show-password>
              </el-input>
            </el-form-item>
            <el-form-item prop="password2" >
              <el-input
                  prefix-icon=" el-icon-menu"
                  class="username"
                  placeholder="确认密码"
                  v-model="ruleForm.password2"
                  show-password>
              </el-input>
            </el-form-item>
            <el-form-item prop="nickname">
              <el-input
                  prefix-icon=" el-icon-menu"
                  placeholder="请输入昵称"
                  v-model="ruleForm.nickname"
                  clearable>
              </el-input>
            </el-form-item>

            <el-form-item>
              <span>是否在注册后自动完成登录：</span>
              <el-switch
                  v-model="ruleForm.switch"
                  active-color="#13ce66"
                  inactive-color="#ccc">
              </el-switch>
            </el-form-item>
            <el-form-item>
              <el-button class="btn"  type="success" @click="submitForm('ruleForm')">立即注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>

    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Logo from "../../../components/content/logo/Logo";
import {GetUsernameRegistered} from "../../../network/login";
import MyFooter from "../../../components/content/footer2/MyFooter";
export default {
  name: "NameRegistered",
  data(){
    return{
      ruleForm: {
        username:'',
        password:'',
        password2:'',
        nickname:'',
        switch:false,

      },
      rules: {
        username: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            validator: function(rule, value, callback) {
              if (/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){3,16}$/.test(value) == false) {
                callback(new Error("输入用户名，5-20个以字母开头、可带数字、“_”、“.”的字串"));
              } else {

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
        ],
        password2:[
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
        ],
        nickname:[
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 1, max: 16, message: '长度在 1 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  components:{
    Logo,
    MyFooter,
  },
  methods:{

    GetUsernameRegistered(obj){
      GetUsernameRegistered(obj).then(res=>{
       if(res.msg=='success'){
         this.$message({
           message: '恭喜您：账号注册成功，正在跳转登录页面！',
           type: 'success',
         });
         setTimeout(()=>{
           this.$router.replace('/login')
         },1000)
       }else{
         this.$message.error('注册失败，请重试');
       }
      })
    },
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {

          let obj={
            pwd:this.ruleForm.password,
            username:this.ruleForm.username,
            nick:this.ruleForm.nickname,

          }
          this.GetUsernameRegistered(obj)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }

  }
}
</script>

<style scoped>

.name-Registered{
  z-index: 999;
  padding-top: 10px;
  position: relative;
  background-color: rgb(247,247,247);
  min-height: 700px;
}

.main{
  width: 700px;
  margin: 0px auto;
}
.main-content{
  background-color: #fff;
  padding-top: 30px;
  margin-top: 10px;
}
.logo-img{
  margin: 8px 0 16px 0;
}
.logo-img >>> img{
  width: 20% !important;
}
h1,h3{
  text-align: center;
}
.form{
  padding: 30px 100px;
}
.city{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.city span{
  position: relative;
  top: -10px;
}
.code{
  display: flex;
  justify-content: space-between;
  height: 42px;
}
.code_btn1{
  width: 160px;
}
.code_btn2{
  margin-left: 30px;
  flex: 1;
}
.btn{
  margin-top: 30px;
  width: 100%;
  height: 50px;
}
</style>