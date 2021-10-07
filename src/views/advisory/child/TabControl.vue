<template>
  <div class="tab-control">
      <div class="categoryId">
        <h3><i class="el-icon-menu"></i>类别</h3>
        <div class="content">
          <div
              @click="itemClick(index,item.id)"
              :class="{active:index===currentIndex}"
              v-for="(item,index) in titleList"
              class="item">
            {{item.name}}
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {GetTitles} from "../../../network/advisory";

export default {
  name: "TabControl",
  created() {
    this.GetTitles();
  },
  data(){
    return{
      titleList:[],
      currentIndex:0,
    }
  },
  methods:{
    GetTitles(){
      GetTitles().then(res=>{
        this.titleList=res.data;

      })
    },
    itemClick(index,id){
      this.currentIndex=index;
      this.$emit('tabControl',id)
    }
  }
}
</script>

<style scoped>
.tab-control{
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}
.content{
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
}
.item{
  width: 25%;
  cursor: pointer;
  line-height: 40px;
  text-align: center;
}
.active{
  color: rgb(74,179,68);
}
h3 i{
  color: #5f5f5f;
}
</style>