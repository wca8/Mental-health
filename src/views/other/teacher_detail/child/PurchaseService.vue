<template>
  <div class="main">
    <div class="content">
      <div class="title">
        <div class="btn">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div> 购买服务</div>
        <div class="btn"></div>
      </div>

      <div class="step">
        <el-steps :active="0" align-center>
          <el-step icon="" title="步骤1" description="成功付款"></el-step>
          <el-step title="步骤2" description="补充信息"></el-step>
          <el-step title="步骤3" description="老师受理"></el-step>
          <el-step title="步骤4" description="开始咨询"></el-step>
        </el-steps>
      </div>

      <div class="info">
        <h2>服务信息</h2>
        <div class="info-content">
          <div>
            <div>预约老师</div>
            <div class="t-name-img">
              {{basicInfo.name}}
              <img :src="basicInfo.pic" alt="">
            </div>
          </div>
          <div>
            <div>咨询方式</div>
            <div>
              <el-select  v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div>
            <div>咨询次数</div>
            <div>
              <el-input-number v-model="num"  :min="1" :max="10" label="描述文字"></el-input-number>
            </div>
          </div>
          <div>
            <div>优惠券</div>
            <div>暂无可用</div>
          </div>

        </div>
        <div class="advisory-info">
          <h2>问题表述</h2>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="textarea">
              <el-input
                  type="textarea"
                  :rows="6"
                  placeholder="请输入内容"
                  v-model="ruleForm.textarea">
              </el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <div class="To-pay">
        <div class="sum-price">
          总计: ￥{{sumPrice}}
        </div>
        <div>
          <el-button @click="submitForm('ruleForm')" class="pay-btn" type="warning" round>去支付</el-button>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import MyFooter from "../../../../components/content/footer2/MyFooter";
import {GetTeacherDetail} from "../../../../network/advisory";
import {GetTokenStatus} from "../../../../network/user";
import {GetUserInfo} from "../../../../network/user";
import {SetCreateOrder} from "../../../../network/pay";
import {random, randomRange} from "../../../../common/utils";

export default {
  name: "PurchaseService",
  components:{
    MyFooter
  },
  data(){
    return{
      basicInfo:'',
      value:'',
      options:[],
      num:1,
      textarea:'',
      nick:'',
      ruleForm: {
        textarea:''
      },
      tId:0,
      rules: {
        textarea: [
          { required: true, message: '请输入问题描述', trigger: 'blur' },
          { min: 15, max: 200, message: '长度在 15 到 200 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  created() {
    this.tId=this.$route.query.tId
    this.GetTeacherDetail(this.tId)
  },
  computed:{
    sumPrice(){
      return Number(this.num*this.value)
    }
  },
  methods:{

    SetCreateOrder(){
       let obj={
         goodsJsonStr:`[{"goodsId":${this.tId},"number":${this.num},"propertyChildIds":"","logisticsType":0}]`,
         address:'山东省济宁市邹城市',
         linkMan:'123456',
         mobile:'123123123',
         provinceId:'123',
         cityId:'123',
         districtId:'123',
         remark:this.ruleForm.textarea,
         token:localStorage.getItem('elementToken'),
       }
      SetCreateOrder(obj).then(res=>{
        console.log(obj)
        console.log(res)
        if(res.msg=='success'){
          let obj={
            money:this.sumPrice,
            payName:this.basicInfo.name+this.basicInfo.subName,
            remark:this.nick,
            token:localStorage.getItem('elementToken'),
            nextAction:{
              type:0,
              id:res.data.id,
            }
          }
          this.$store.commit('SetPayInfo',obj)
          let random = randomRange(5,22);
          this.$router.push('/pay/'+ random)

        }
      })
    },
    GetTokenStatus(){
      let token=localStorage.getItem('elementToken');
      GetTokenStatus(token).then(res=>{
        if(res.msg=='当前登录token无效，请重新登录'){
          let routeData = this.$router.resolve({ path: '/login', query: {  } });
          window.open(routeData.href, '_blank');
        }else{
          GetUserInfo(token).then(res=>{
            this.nick=res.data.base.nick;
            // this.GoPay(this.nick)
              this.SetCreateOrder()
          })
        }
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message("正在跳转到支付页面");
          this.GetTokenStatus()
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    GetTeacherDetail(id){
      GetTeacherDetail(id).then(res=>{
        console.log(res)
        this.basicInfo=res.data.basicInfo;
        let price=this.basicInfo.minPrice;
        this.value=price;
        this.options=[
          {
            value: price,
            label:'语音咨询'
          },
          {
            value: Number(price+100),
            label:'视频咨询'
          } ,
          {
            value:Number(price+200),
            label:'面对面咨询'
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
.main{
  background-color:rgba(243,244,245,1);
  min-height: 800px;
  z-index: 100;
  position: relative;
  padding-top:56px;
}
.content{
  width: 500px;
  min-height: 600px;
  background-color: white;
  margin: 0 auto;
}
.title{
  height: 56px;
  color: white;
  text-align: center;
  background-color: rgb(103,194,58);
  position: fixed;
  top: 0;
  width: 500px;
  display: flex;
  z-index: 99;
}
.title .btn{
  flex: 1;
}
.title .btn i{
  font-size: 26px;
  line-height: 56px;
}
.title >div:nth-child(2){
  flex: 6;
  font-size: 23px;
  line-height: 56px;
}
.step{
  color: white;
  padding-top: 35px;
}
.info{
  padding: 30px 24px;

}
img{
  width: 40px;
  height: 40px;
  margin-left: 10px;
}
.t-name-img{
  display: flex;
  align-items: center;
}
.To-pay{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  height:80px;
  width: 500px;
  background-color: #fff;
  z-index: 999;
  padding:20px;
  box-sizing: border-box;
}
.sum-price{
  font-size: 26px;
  color: rgb(255,162,2);
}
.pay-btn{
  width: 150px;
  height:50px;
  font-size: 20px;
}
.info-content{
  margin-top: 30px;
}
.info-content>div{
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.advisory-info h2{
  margin-bottom: 30px;
}
</style>