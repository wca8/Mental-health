<template>
  <div>
    <div v-if="OrderList_dzf.length>0">
      <order-item :order-list="OrderList_dzf">
        <template v-slot:orderState>待支付</template>
      </order-item>
    </div>

    <div class="null" v-else>
      <null></null>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import OrderItem from "./OrderItem";
import Null from "./Null";
export default {
  name: "waitingForPay",
  components:{
    OrderItem,
    Null
  },
  created() {
    this.A_SetOrderList({num:0});
  },
  computed:{
    ...mapState("advisoryModule", ["OrderList_dzf"]),
  },
  methods:{
    ...mapActions("advisoryModule", ["A_SetOrderList"]),
  },
}
</script>

<style scoped>

</style>