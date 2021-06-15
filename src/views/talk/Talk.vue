<template>
  <div class="talk">
    <div id="qrcode"></div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
import {GetPay} from "../../network/pay";

export default {
  name: "Talk",
  data(){
    return{
      qrcodeAddress: ""
    }
  },
  mounted() {
    let obj={
      money:1,
      payName:'test',
      remark:'test',
      token:localStorage.getItem('elementToken')
    }
    this.GetPay(obj)
  },
  methods: {
    GetPay(obj){
      GetPay(obj).then(res=>{
        console.log(res)
        this.qrcodeAddress=res.data.codeUrl
        this.qrcode()
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