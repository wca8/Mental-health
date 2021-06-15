<template>
  <div class="registered">
    <div class="main">
      <logo class="logo-img"></logo>
      <div class="main-content">
        <h1>欢迎注册心理栈</h1>
        <h3>爱生活，爱自己</h3>
        <div class="form">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm"   class="demo-ruleForm">
            <el-form-item  >
              <el-input
                  prefix-icon="el-icon-user-solid"
                  placeholder="请输入邮箱账号"
                  v-model="ruleForm.username"
                  clearable>
              </el-input>
            </el-form-item>
            <el-form-item  >
              <el-input
                  prefix-icon=" el-icon-menu"
                  class="username"
                  placeholder="请输入密码"
                  v-model="ruleForm.password1"
                  show-password>
              </el-input>
            </el-form-item>
            <el-form-item  >
              <el-input
                  prefix-icon=" el-icon-menu"
                  class="username"
                  placeholder="确认密码"
                  v-model="ruleForm.password2"
                  show-password>
              </el-input>
            </el-form-item>
            <el-form-item >
              <el-input
                  prefix-icon=" el-icon-menu"
                  placeholder="请输入昵称"
                  v-model="ruleForm.nickname"
                  clearable>
              </el-input>
            </el-form-item>

           <div class="city">
             <span>地址：</span>
             <el-form-item >
               <el-select v-model="ruleForm.value" placeholder="请选择">
                 <el-option
                     v-for="item in ruleForm.options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
                 </el-option>
               </el-select>
             </el-form-item >
             <el-form-item >
               <el-select v-model="ruleForm.value" placeholder="请选择">
                 <el-option
                     v-for="item in ruleForm.options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
                 </el-option>
               </el-select>
             </el-form-item >
           </div>
            <el-form-item>
              <span>是否在注册后自动完成登录：</span>
              <el-switch
                  v-model="ruleForm.switch"
                  active-color="#13ce66"
                  inactive-color="#ccc">
              </el-switch>
            </el-form-item>
            <div class="code">
              <el-form-item  class="code_btn1" >
                <el-input
                    prefix-icon="el-icon-user-solid"
                    placeholder="邮箱验证码"
                    v-model="ruleForm.code"
                    clearable>
                </el-input>
              </el-form-item>
              <el-button class="code_btn2" :disabled="disabled"  @click="codeClick($event)" type="success">获取邮箱验证码</el-button>
            </div>
            <el-form-item>
              <el-button class="btn"  type="success" @click="submitForm('ruleForm')">立即注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Logo from "../../../components/content/logo/Logo";
import {GetCode,GetRegistered} from "../../../network/login";

export default {
  name: "Registered",
  components:{
    Logo
  },
  data(){
    return{
      ruleForm: {
        username: '',
        password1:'',
        password2:'',
        nickname:'',
        province:'',
        city:'',
        code:'',
        switch:false,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      },
      rules: {
        username: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            validator: function(rule, value, callback) {
              if (/^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value) == false) {
                callback(new Error("请输入邮箱"));
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
              if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,18}$/.test(value) == false) {
                callback(new Error("密码须包含数字、字母两种元素，且密码位数为6-16位"));
              } else {
                //校验通过
                callback();
              }
            },
          }
        ]

      },
      time:60,
      code:"已发送验证码",
      disabled:false,
    }
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let obj={
            email:this.ruleForm.username,
            pwd:this.ruleForm.password1,
            code:this.ruleForm.code,
          }
          console.log(obj)
          this.GetRegistered(obj)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //邮箱验证码
    GetCode(mail){
      GetCode(mail).then(res=>{
        // console.log(res)
      })
    },
    //发送注册请求
    GetRegistered(obj){
      GetRegistered(obj).then(res=>{
        if(res.msg=='success'){

          this.$message({
            message: '恭喜您：账号注册成功，正在跳转登录页面！',
            type: 'success',
            duration:3000,
          });
          setTimeout(()=>{
            this.$router.replace('/login')
          },3000)
        }
      })
    },
    //获取邮箱验证码
    codeClick(event){
      this.GetCode(this.ruleForm.username);
      this.disabled=true;
      let el=event.target;
      let time;
       time=setInterval(()=>{
        if(this.time===0){
          this.time=60;
          clearInterval(time);
          this.disabled=false;
          el.innerHTML="获取邮箱验证码"
        }else{
          this.time--;
          el.innerHTML=this.time+"秒后可重新获取验证码";
        }

      },1000)

      this.$toast.show(this.code, 1500,0.9);
    }

  }
}
</script>

<style scoped>

.registered{
  z-index: 999;
  padding-top: 10px;
  position: relative;
  background-color: rgb(247,247,247);
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