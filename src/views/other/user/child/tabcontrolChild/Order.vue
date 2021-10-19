<template>
  <div class="main_">
    <div class="nav">
      <router-link to="/user/order/waitingForPay">待支付</router-link>
      <router-link to="/user/order/WaitForDelivery">待咨询</router-link>
      <router-link to="/user/order/WaitingForReceipt">待收货</router-link>
      <router-link to="/user/order/WaitingForComment">待评价</router-link>
      <router-link to="/user/order/AllOrders">全部订单</router-link>
    </div>

    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Order",
  data(){
    return{

    }
  },
  created() {

  },
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .main_{
    padding: 0!important;
  }
  /* .nav a{
    white-space:nowrap!important;
  } */
}
.main_{
  width: 100%;
  min-height: 80vh;
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 10px;
  padding: 15px;
}
.nav{
  display: flex;
  margin-top: 15px;
  margin-bottom: 25px;
}
.nav a{
 padding: 0 15px;
  text-align: center;
}
</style>
<style>
.router-link-active{
  color: rgb(103,194,58);
  font-weight: 550;
}
</style>