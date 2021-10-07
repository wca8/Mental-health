<template>
  <div>

    <div v-if="OrderList_dsh.length>0">
      <order-item :order-list="OrderList_dsh">
        <template v-slot:other="item">
          <!--        {{item.content.goods[0].goodsId}}-->
          <div v-if="item.content.orderInfo.refundStatus==0" class="Receipt">
            <el-button @click.stop="AfterSaleClick(item.content.orderInfo.amount.toFixed(2),item.content.orderInfo.id)" size="mini" type="success" plain>申请售后</el-button>
            <el-button  @click.stop="ReceivingTheGoods(item.content.orderInfo.id)" size="mini" type="success">确认收货</el-button>
          </div>

          <div class="Receipt" v-else>
            <div class="Refunding-item">售后服务中...</div>
            <el-button size="mini"  @click.stop="CancelRefundClick(item.content.orderInfo.id)" type="success">撤销售后</el-button>
          </div>
        </template>

        <template v-slot:orderState>待收货</template>

        <template v-slot:mask>
          <el-dialog
              title="申请售后"
              :visible.sync="dialogVisible"
              width="30%"
          >
            <div class="Refund-content">
              <div>
                <div>订单状态</div>
                <div>
                  <el-radio v-model="radio" label="1">已收到货</el-radio>
                  <el-radio v-model="radio" label="0">未收到货</el-radio>
                </div>
              </div>
              <div>
                <div>选择方式</div>
                <div>
                  <el-radio v-model="radio2" label="0">仅退款</el-radio>
                  <el-radio v-model="radio2" label="1">退款退货</el-radio>
                  <el-radio v-model="radio2" label="2">换货</el-radio>
                </div>
              </div>
              <div v-if="radio2==0">
                <div>退款金额</div>
                <div class="sumPrice">
                  <el-input
                      class="sumPrice-inp"
                      placeholder="请输入退款金额"
                      v-model="sumPrice"
                      clearable>
                  </el-input>元
                </div>
              </div>
              <div v-if="radio2==1||radio2==2">
                <div>退货地址</div>
                <div>山东省潍坊市奎文区东风东街7494号</div>
              </div>
              <div>
                <div>退款原因:</div>
                <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="textarea">
                </el-input>
              </div>

            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取消申请</el-button>
              <el-button type="primary" @click="determineRefund">确定</el-button>
        </span>
          </el-dialog>
        </template>


      </order-item>
    </div>


    <div class="null" v-else>
      <null></null>
    </div>
  </div>
</template>

<script>
import OrderItem from "./OrderItem";
import {mapState ,mapActions} from 'vuex'
import Null from "./Null";
import {SetCancelRefund, SetOrderRefund, SetReceivingTheGoods} from "../../../../../../network/order";

export default {
  name: "WaitingForReceipt",
  components:{
    OrderItem,
    Null
  },
  data(){
    return{
      token:'',
      dialogVisible:false,
      sumPrice:0,
      orderId:0,
      radio:'1',
      radio2:'0',
      textarea:'',
    }
  },
  created() {
    this.A_SetOrderList({num:2});
    this.token=localStorage.getItem('elementToken');
  },
  computed:{
    ...mapState("advisoryModule", ["OrderList_dsh"]),
  },
  methods:{
    ...mapActions("advisoryModule", ["A_SetOrderList"]),
    ReceivingTheGoods(id){
      let obj={
        orderId:id,
        token:this.token
      }
      SetReceivingTheGoods(obj).then(res=>{
        if(res.msg=='success'){
          this.$message({
            message: '确认收货成功，快去评价吧！',
            type: 'success'
          });
          this.A_SetOrderList({num:2});

        }
        console.log(res)
      })
    },
    AfterSaleClick(price,id){
      this.sumPrice=price;
      this.orderId=id;
      this.dialogVisible=!this.dialogVisible;

    },
    determineRefund(){
      this.dialogVisible=!this.dialogVisible;
      let obj={
        amount:this.sumPrice,
        reason:this.textarea,
        logisticsStatus:this.radio,
        orderId:this.orderId,
        type:0,
        token:this.token
      };
      this.SetOrderRefund(obj)
    },
    SetOrderRefund(obj){
      SetOrderRefund(obj).then(res=>{
        this.A_SetOrderList({num:2})
        console.log('asdsadasd')
        if(res.msg=='success'){
          this.$message({
            message: '退款申请成功，请等待系统处理！',
            type: 'success'
          });
        }else if(res.msg=='请勿重复申请'){
          this.$message({
            message: '请勿重复申请',
            type: 'warning'
          });
        }

      })
    },
    CancelRefundClick(id){
      let obj={
        orderId:id,
        token:this.token
      }
      this.SetCancelRefund(obj)
    },
    SetCancelRefund(obj){
      SetCancelRefund(obj).then(res=>{
        console.log(res)
        if(res.msg=='success'){
          this.$message({
            message: '撤销申请成功',
            type: 'success'
          });
          this.A_SetOrderList({num:2})
        }
      })
    },

  },

}
</script>

<style scoped>
.sumPrice{
  display: flex;
  align-items: center;
}
.sumPrice-inp{
  margin-right: 10px;
}
.Refunding-item{
  display: flex;
  align-items: center;
  margin-right: 15px;
  font-size: 14px;
  color: red;
}
.Receipt{
  display: flex;
}
</style>