<template>
  <div class="main">
    <div class="item">
      <div
          v-for="item in orderList"
          @click="contentClick(item.goods[0].goodsId,item.goods[0].goodsName,item.goods[0].goodsSubName)"
          class="content">
        <div class="shop">
          <div>
            <i class="el-icon-s-shop"></i>
            {{item.goods[0].shopName}}
            <span class="official">官方</span>
          </div>
          <div>
           <slot name="orderState" :content="item"></slot>
          </div>
        </div>
        <div class="main-content">
          <div class="left">
            <img :src="item.goods[0].pic" alt="">
          </div>

          <div class="right">
            <div class="title">{{item.goods[0].goodsName+item.goods[0].goodsSubName}}</div>
            <div class="price">
              <div class="unit-price">￥{{item.goods[0].amountSingleBase.toFixed(2)}}</div>
              <div class="goodsNumber">x{{item.orderInfo.goodsNumber}}</div>
            </div>
            <div class="sum">
              <div> 订单id: {{item.orderInfo.id}}</div>
              <div>{{item.goods[0].dateAdd}}</div>
              实付: {{item.orderInfo.amount.toFixed(2)}}

            </div>
            <div class="other">

                <slot name="other" :content="item" ></slot>

            </div>

          </div>
        </div>
      </div>
      <div class="mask">
        <slot name="mask" ></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "OrderItem",
  data(){
    return{
      dialogVisible: false,
      sumPrice:0,
      textarea:"",
      orderId:0,
      token:'',
    }
  },
  created() {
    this.token=localStorage.getItem('elementToken')
  },
  props:{
    orderList:{
      type:Array,
      default(){
        return []
      }
    },

  },
  methods:{
    contentClick(id,name,subName){
      const details=name+subName;
      let routeData = this.$router.resolve({ path: '/TeacherDetail', query: {id,details  } });
      window.open(routeData.href, '_blank');
    },

  }
}
</script>

<style scoped>
.item{
  /*padding-top: 20px;*/
}
.main-content{
  margin-bottom: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}

.left{
  width: 80px;
  height:80px;
  margin-right: 15px;
}
.left img{
  width: 100%;
}
.right{
  width: 490px;
}
.title{
  font-size: 18px;
}
.shop{
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.shop>div:nth-child(2){
  font-size: 14px;
  color:rgb(90, 173, 48);

}
.official{
  background-color:rgb(90, 173, 48);
  color: white;
  font-size: 13px;
  padding: 0px 4px;
}
.price{
  display: flex;
}
.price>div:nth-child(1){
  margin-right: 10px;
}
.other{
  display: flex;
  justify-content: flex-end;
}
</style>

<style>
.el-icon-s-shop{
    opacity: .5;
    font-size: 20px;
  }
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