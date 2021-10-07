<template>
  <div class="main">
    <div v-if="OrderList_dzx.length>0">
      <order-item :order-list="OrderList_dzx">


        <template v-slot:other="item">
          <div class="Receipt" v-if="item.content.orderInfo.refundStatus==0">
            <div @click.stop="RefundClick(item.content.orderInfo.amount.toFixed(2),item.content.orderInfo.id)" class="Refund"> <el-button size="mini" type="success" plain>申请退款</el-button></div>
            <div @click.stop="ShipClick()"> <el-button size="mini" type="success" plain>催发货</el-button></div>
          </div>
          <div class="Receipt" v-else>
            <div class="Refunding-item">退款中...</div>
            <el-button size="mini"  @click.stop="CancelRefundClick(item.content.orderInfo.id)" type="success">撤销退款</el-button>
          </div>
        </template>



        <template v-slot:orderState="item">
          待咨询
        </template>


        <template v-slot:mask>
          <el-dialog
              title="申请退款"
              :visible.sync="dialogVisible"
              width="30%"
          >
            <div class="Refund-content">
              <div>
                <div>退款金额</div>
                <div>
                  ￥{{sumPrice}}元
                </div>
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
              <el-button @click.stop="dialogVisible = false">取消申请</el-button>
              <el-button type="primary" @click.stop="determineRefund">确定</el-button>
          </span>
          </el-dialog>
        </template>



      </order-item>
    </div>




    <div v-else>
      <null></null>
    </div>
  </div>
</template>

<script>
import {mapState ,mapActions} from 'vuex'
import OrderItem from "./OrderItem";
import Null from "./Null";
import {SetCancelRefund, SetOrderRefund} from "../../../../../../network/order";
export default {
 name: "WaitForDelivery",
  data(){
   return{
     dialogVisible: false,
     textarea:'',
     sumPrice:0,
     orderId:0,
     token:''
    }
  },
  components:{
    OrderItem,
    Null
  },
  created() {
    this.A_SetOrderList({num:1});
    this.token=localStorage.getItem('elementToken');
  },
  computed:{
    ...mapState("advisoryModule", ["OrderList_dzx"]),
  },
  methods:{
    ...mapActions("advisoryModule", ["A_SetOrderList"]),
    RefundClick(price,id){
      this.sumPrice=  price;
      this.orderId=id;
      this.dialogVisible =! this.dialogVisible
    },
    ShipClick(){
      this.open1()
    },
    open1() {
      const h = this.$createElement;

      this.$notify({
        title: '催发货反馈',
        message: h('i', { style: 'color: teal'}, '尊敬的用户，我们已经收到您的申请，系统会尽快安排发货！')
      });
    },
    determineRefund(){
      this.dialogVisible =! this.dialogVisible;
      let obj={
        amount:this.sumPrice,
        reason:this.textarea,
        logisticsStatus:0,
        orderId:this.orderId,
        type:0,
        token:this.token
      };
      this.SetOrderRefund(obj)
    },
    SetOrderRefund(obj){
      SetOrderRefund(obj).then(res=>{
        this.A_SetOrderList({num:1})
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
      console.log(1)
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
          this.A_SetOrderList({num:1})
        }
      })
    },
  },
}
</script>

<style scoped>
.shop>div:nth-child(2){
  font-size: 14px;
  color:rgb(90, 173, 48);
}
.price>div:nth-child(1){
  margin-right: 10px;
}

.Refund{
  margin-right: 20px;
}

.Refunding-item{
  margin-right: 15px;
}
.Receipt{
  display: flex;
  align-items: center;
}
.Refunding-item{
  display: flex;
  align-items: center;
  color: #ff0000;
}
</style>



<style>

.Refund-content>div{
  display: flex;
  margin-bottom: 30px;
}
.Refund-content>div>div:nth-child(1){
  flex: 2;
}
.Refund-content>div>div:nth-child(2){
  flex: 8;
}
</style>