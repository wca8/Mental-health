<template>
  <div class="OrderComment">
    <div class="OrderComment-content">

        <goods-info :goods="goods"></goods-info>
        <comment :id="String(goods.id)"></comment>


    </div>

    <my-footer></my-footer>

  </div>
</template>

<script>
import {GetOrderDetail} from "../../../network/order";
import GoodsInfo from "./child/GoodsInfo";
import Comment from "./child/Comment";

import MyFooter from "../../../components/content/footer/MyFooter";


export default {
  name: "OrderComment",
  data(){
    return{
      OrderId:0,
      token:'',
      goods:{},
    }
  },
  computed:{

  },
  components:{
    GoodsInfo,
    MyFooter,
    Comment,
  },
  created() {
    this.OrderId =this.$route.query.Oid;
    this.token=localStorage.getItem('elementToken');
    this.GetOrderDetail({id:this.OrderId,token:this.token})
  },
  methods:{
    GetOrderDetail(obj){
      GetOrderDetail(obj).then(res=>{
        console.log(res)
        this.goods=res.data.goods[0]
        console.log(typeof this.goods.id)

      })
    }
  }
}
</script>

<style scoped>
.OrderComment{
  padding-top: 72px;
  background-color: rgb(243,244,245);
}
.OrderComment-content{
  min-height: 700px;
  width: 970px;
  margin: 5px auto;
}

</style>