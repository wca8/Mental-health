<template>
  <div class="talk">
    <div id="qrcode"></div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
import {GetPay,GetPayStatus

} from "../../network/pay";

export default {
  name: "Talk",
  data(){
    return{
      qrcodeAddress: "",
      outTradeId:''
    }
  },
  mounted() {
    let obj={
      money:0.1,
      payName:'test1',
      remark:'test',
      token:localStorage.getItem('elementToken')
    }
    this.GetPay(obj)
  },
  methods: {
    setPay(){
      this.$store.commit('SetPay')
    },
    GetPay(obj){
      GetPay(obj).then(res=>{
        console.log(res)
        this.outTradeId=res.data.outTradeId
        this.qrcodeAddress=res.data.codeUrl
        this.qrcode()
        let time;
        let obj={
          outTradeId:this.outTradeId,
          token:localStorage.getItem('elementToken')
        }
        time= setInterval(()=>{
          if(this.$store.state.isPay){
            clearInterval(time)
            this.$message({
              message: '支付成功',
              type: 'success'
            });
          }
          this.GetPayStatus(obj)
        },10000)
      })
    },
    GetPayStatus(obj){
      GetPayStatus(obj).then(res=>{
        console.log(res)

        if(res.data.statusStr=="成功"){
          this.setPay()
        }
      })
    },
    qrcode() {
      let qrcode = new QRCode("qrcode", {
        render: "canvas", //也可以替换为table
        width: 122,
        height: 122,
        text: this.qrcodeAddress, // 二维码地址
        colorDark: "#000",
        colorLight: "#fff"
      });
    },


  }
}
</script>

<style scoped>
.talk{
  padding-top: 72px;
}
</style>