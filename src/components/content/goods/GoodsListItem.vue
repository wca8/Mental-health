<template>
  <div
    @click="itemClick"
    class="goods-item" >
    <img v-lazy="showImage" @load="imageLoad" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥ {{goodsItem.price}}</span>
      <span class="collect">★{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    showImage() {
      return this.goodsItem.image||this.goodsItem.show.img
    }
  },
  methods:{
    imageLoad(){
      this.$bus.$emit('itemImgLoad')
    },
    itemClick(){
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 47%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info{
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
  bottom: 5px;
  text-align: center;
}
.goods-info p{
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-info .price{
  color: var(--color-high-text);

}
.goods-info span{
  font-size: 14px;
}
</style>
