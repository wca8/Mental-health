<template>
  <div class="RetrievePassword">
    <div class="main">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
        <el-form-item  prop="email">
          <el-input
              class="input"
              placeholder="请输入邮箱地址"
              v-model="ruleForm.email"
              clearable>
          </el-input>
        </el-form-item>
      </el-form>

      <div class="code-get">
        <el-form :model="ruleForm2" :rules="rules" ref="ruleForm2"  class="ruleForm2 demo-ruleForm">
          <el-form-item  prop="code">
            <el-input
                class="input"
                placeholder="请输入验证码"
                v-model="ruleForm2.code"
                clearable>
            </el-input>
          </el-form-item>
        </el-form>

       <el-button :disabled="isFlag"  ref="getCode"  @click="codeClick('ruleForm')"  class="input code-button" type="info" round>获取验证码</el-button>
     </div>

     <div>
       <el-form :model="ruleForm3" :rules="rules" ref="ruleForm3"  class="demo-ruleForm">
         <el-form-item  prop="password">
           <el-input placeholder="请输入密码" v-model="ruleForm3.password" show-password></el-input>
         </el-form-item>
       </el-form>
     </div>

      <el-button @click="RetrievePassword0('ruleForm','ruleForm2','ruleForm3')" class="button" type="success" round>立即找回</el-button>

    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import {ResetPwd} from "../../../network/user";
import MyFooter from "../../../components/content/footer/MyFooter";
import {GetEmailCode} from "../../../network/user";

export default {
  name: "RetrievePassword",
  data(){
    return{
      password:'',
      num:60,
      isFlag:false,
      ruleForm: {
        email: '',
      },
      ruleForm3: {
        password:''
      },
      ruleForm2: {
        code:'',
      },
      rules: {
        email: [
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
        ],
        code:[
          { required: true, message: '验证码', trigger: 'blur' },
          { min: 4, max:4, message: '长度在 4个字符', trigger: 'blur' }
        ]
      }
    }
  },
  components:{
    MyFooter
  },
  methods:{
    RetrievePassword0(formName,formName2,formName3){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$refs[formName2].validate((valid) => {
            if (valid) {
              this.$refs[formName3].validate((valid) => {
                if (valid) {
                  let obj={
                    code:this.ruleForm2.code,
                    email:this.ruleForm.email,
                    pwd:this.ruleForm3.password,
                    token:localStorage.getItem('elementToken')
                  }
                  this.ResetPwd(obj);
                } else {
                  console.log('error submit!!');
                  return false;
                }
              });
            } else {
              this.$message({
                message: '请按要求填写您的信息！',
                type: 'warning'
              });
              return false;
            }
          });
        } else {
          this.$message({
            message: '请按要求填写您的信息！',
            type: 'warning'
          });
          return false;
        }
      });

    },
    ResetPwd(obj){
      ResetPwd(obj).then(res=>{
        console.log(res)
        if(res.msg=='success'){
          this.$message({
            message: '密码设置成功，正在跳转到登录页面',
            type: 'success'
          });
          setTimeout(()=>{
            this.$router.push('/login')
          },1000)
        }
      })
    },
    GetEmailCode(mail){
      GetEmailCode(mail).then(res=>{
        console.log(res)
      })
    },
    codeClick(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '验证码已发出',
            type: 'success'
          });

          this.isFlag=true;
          let time;
          time=setInterval(()=>{
            this.num--;
            this.$refs.getCode.$el.innerHTML=this.num+'秒后可重新获取验证码';
            if(this.num==0){
              clearInterval(time);
              this.isFlag=false;
              this.$refs.getCode.$el.innerHTML='获取验证码';
              this.num=60;
            }
          },1000)

          this.GetEmailCode(this.ruleForm.email);
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
.RetrievePassword{
  background-color: rgb(243,243,243);
  min-height: 900px;
  padding-top: 72px;
}
.main{
  width: 980px;
  margin: 20px auto;
  background-color:white;
  min-height: 500px;
  padding: 30px 25% 35px 35px;
  box-sizing: border-box;
}

.button{
  display: block;
  margin-top:30px;
}
.input{
  /*margin-bottom: 30px;*/
}
.code-get{
  display: flex;
  justify-content: space-between;
}
.code-button{
  margin-left: 30px;
  height: 40px;
}
.ruleForm2{
  width: 80%;
}
/*.demo-ruleForm>div{*/
/*  margin-bottom: 0!important;*/
/*}*/
</style>