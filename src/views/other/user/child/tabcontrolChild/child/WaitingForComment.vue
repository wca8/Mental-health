<template>
  <div>
    <div v-if="OrderList_dpl.length>0">
      <order-item :order-list="OrderList_dpl">
        <template v-slot:other="item">

          <div class="Receipt">
<!--            <el-button size="mini" type="success" plain >申请售后</el-button>-->
            <el-button size="mini" type="success" >再次咨询</el-button>
            <el-button @click.stop="GoComment(item.content.orderInfo.id)" size="mini" type="success" >立即评价</el-button>
          </div>
        </template>

        <template v-slot:orderState>待评论</template>

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
  name: "WaitingForComment",
  components:{
    OrderItem,
    Null,
  },
  created() {
    this.A_SetOrderList({num:3});
  },
  computed:{
    ...mapState("advisoryModule", ["OrderList_dpl"]),
  },
  methods:{
    ...mapActions("advisoryModule", ["A_SetOrderList"]),
    GoComment(Oid){
      let routeData = this.$router.resolve({ path: '/OrderComment', query: {Oid  } });
      window.open(routeData.href, '_blank');
    },
  },

}
</script>

<style scoped>

</style>