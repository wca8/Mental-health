<template>
  <div>
    <div v-if="OrderList_all.list.length>0">
      <order-item :order-list="OrderList_all.list">
        <template v-slot:orderState="item">
          {{item.content.orderInfo.statusStr}}
        </template>
      </order-item>
    </div>


    <div v-else>
      <null></null>
    </div>
  </div>
</template>

<script>
import OrderItem from "./OrderItem";
import {mapActions, mapState} from "vuex";
import Null from "./Null";
export default {
  name: "AllOrders",
  components:{
    OrderItem,
    Null,
  },
  created() {
    this.SetOrderList_all();
  },
  computed:{
    ...mapState("advisoryModule", ["OrderList_all"]),
  },
  methods:{
    ...mapActions("advisoryModule", ["SetOrderList_all"]),
  },

}
</script>

<style scoped>

</style>