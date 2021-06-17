<template>
  <div class="my-pay">
    <div class="top">
      <div>微信支付</div>
      <div class="money-num">
        <div>请及时付款，以免订单过期。订单号：{{prepayId}}</div>
        <div>应付金额<span>{{this.$store.state.obj.money}}</span>元</div>
      </div>
    </div>
    <div class="main">


      <div class="pay-center">
        <div class="QR-code">
          <div id="qrcode" class="QR-code-img">

          </div>
          <div class="tips">
            <div>
              <i class="iconfont icon-saoyisao"></i>
            </div>
            <div>
              <p>请使用微信扫一扫</p>
              <p>扫描二维码支付</p>
            </div>
          </div>
        </div>
        
        <div>
          <img src="https://dcdn.it120.cc/2021/06/16/9bb4abba-3d70-4136-af38-6890fe746c98.png" alt="">
        </div>
      </div>
    </div>

    <my-footer></my-footer>

  </div>
</template>

<script>
import MyFooter from "../../../components/content/footer/MyFooter";
import {GetPay,GetPayStatus} from "../../../network/pay";
import QRCode from "qrcodejs2";

export default {
  name: "myPay",
  components:{
    MyFooter
  },
  data(){
    return{
      qrcodeAddress: "",
      outTradeId:'',
      prepayId:''
    }
  },
  created() {
    this.setPay2()
    this.scrollTop();
    this.GetPay(this.$store.state.obj);
  },
  mounted() {

  },
  methods:{
    setPay(){
      this.$store.commit('SetPay')
    },
    setPay2(){
      this.$store.commit('SetPay2')
    },
    scrollTop(){
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
    GetPay(obj){
      GetPay(obj).then(res=>{
        console.log(res)
        this.outTradeId=res.data.outTradeId
        this.qrcodeAddress=res.data.codeUrl
        this.prepayId=res.data.prepayId
        this.qrcode()
        let time;
        let obj={
          outTradeId:this.outTradeId,
          token:localStorage.getItem('elementToken')
        }
        time= setInterval(()=>{
          this.GetPayStatus(obj)
          // console.log("我在检测支付中...")
          if(this.$store.state.isPay){
            clearInterval(time);
            // console.log("已结束检测，支付成功!")
            this.$router.go(-1);
            this.$message({
              message: '支付成功',
              type: 'success'
            });



          }

        },2000)

      })
    },
    GetPayStatus(obj){
      GetPayStatus(obj).then(res=>{
        // console.log(res)
        if(res.data.statusStr=="成功"){
          this.setPay()
        }
      })
    },
    qrcode() {
      let qrcode = new QRCode("qrcode", {
        render: "canvas", //也可以替换为table
        width: 230,
        height: 230,
        text: this.qrcodeAddress, // 二维码地址
        colorDark: "#000",
        colorLight: "#fff"
      });
    },
  }
}
</script>

<style scoped>
.my-pay{
  padding-top: 72px;
  background-color: #fff;
  background-color: rgb(238,238,238);
  min-height: 100vh;
}
.top{
  width: 970px;
  margin: 30px auto;

}
.main{
  width: 970px;
  margin: 0px auto;
  height: 520px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.money-num{
  display: flex;
  justify-content: space-between;
}
.money-num span{
  color: orangered;
}
.pay-center{
  display: flex;
  align-items: center;
  width: 100%;
}
.pay-center>div{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

}
.QR-code{
  display: flex;
  flex-direction: column;
}
.tips{
  display: flex;
  align-items: center;
  background-color: rgb(88,215,140);
  color: white;
  width: 250px;
  padding:8px 10px;
  box-sizing: border-box;
  justify-content: space-evenly;
  margin-top: 10px;
}
.tips i{
  font-size: 31px;
}

.QR-code-img{
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgb(74,179,68);
}
</style>