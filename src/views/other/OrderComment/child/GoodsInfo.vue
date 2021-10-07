<template>

      <div class="goods-info">
        <div class="left">
          <img :src="goods.pic" alt="">
        </div>

        <div class="right">
           <div class="title">
             {{goods.goodsName+goods.goodsSubName}}
           </div>
          <div class="price public-father">
             <div class="public-dv1">价格</div>
             <div>
               {{goods.amount}}元
             </div>
          </div>

          <div class="Delivery public-father">
            <div class="public-dv1">配送</div>
            <div>快递(0.00元)</div>
          </div>

          <div class="public-father">
            <div class="public-dv1">时间</div>
            <div>{{goods.dateAdd}}</div>
          </div>

          <div class="public-father">
            <div class="public-dv1">店铺</div>
            <div>
              {{goods.shopName}}
            </div>
          </div>
        </div>
      </div>

</template>

<script>
export default {
  name: "GoodsInfo",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.main{
  padding-top: 10px;
}
.goods-info{
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 50px;
  min-height: 230px;
}
 .left{
  width: 200px;
  margin-right: 20px;
}
.left img{
  width: 100%;
}
 .right{
  width: 670px;
}
 .title{
   font-size: 26px;
   font-weight: 540;
 }
 .price{
   align-items: center;

 }

.price>div:nth-child(2){
  color: rgb(103,194,58);
  font-size: 28px;
  font-weight: 550;
}
.public-father{
  display: flex;
  margin-top: 15px;
}

.public-dv1{
  width: 60px;
  color: #6a6868;
  font-size: 14px;
}
</style>