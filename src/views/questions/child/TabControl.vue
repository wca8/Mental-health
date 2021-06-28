<template>
  <div class="tabcontrol">
    <div class="main">
      <div :class="{active20210625:index===currentIndex}" @click="itemClick(index,item.id)" v-for="(item,index) in titleList" class="item">
        <div>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {GetSortTitles0} from "../../../network/home";
import {GetarticleList} from "../../../network/article";

export default {
  name: "TabControl",
  data(){
    return{
      titleList:[],
      currentIndex:0,

    }
  },
  created() {
    this.GetSortTitles0();

  },
  methods:{

    GetSortTitles0(){
      GetSortTitles0().then(res=>{
        this.titleList=res.data;
        console.log(res)
      })
    },
    itemClick(index,id){
      this.currentIndex=index
      console.log(index,id)
      this.$emit('itemClick',index,id)

    }
  }
}
</script>

<style scoped>
.tabcontrol{
  background-color: white;
  border-radius: 6px;
  padding: 30px ;
}
.main{
  display: flex;
}
.item{
  margin-right: 30px;
  font-size: 18px;
  cursor: pointer;
}
.active20210625{
  color: rgba(74,177,68,1);
}
</style>