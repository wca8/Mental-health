<template>
  <div class="search">
    <form class="form" action="">
      <input maxlength="20" v-model="input" placeholder="爱生活，爱自己" type="text">
      <div @click="searchClick"></div>
    </form>
  </div>
</template>

<script>
import {isEmpty} from "../../../common/utils";

export default {
  name: "Search",
  data(){
    return{
      input:''
    }
  },
  methods:{
    searchClick(){
      let val=isEmpty(this.input);
      if(val==true){
        this.$message.error('搜索内容不得为空！');
      }else{
        let routeData = this.$router.resolve({ path: '/Search', query: { val:this.input } });
        window.open(routeData.href, '_blank');
      }

    }
  }
}
</script>

<style scoped>
input{
  width: 75%;
  box-sizing: border-box;
  height: 32px;
  outline: none;
  background-color:transparent;
  border:none;
  padding-left: 12px;
  color:rgba(51,51,51,1);
}
.form{
  display: flex;
  background-color: rgb(243,244,245);
  font-size: 12px;
}
div{
  width: 25%;
  height: 32px;
  background: url("~assets/img/home/search2.png") no-repeat center center;
  background-size: 48% auto;
  cursor: pointer;
}
</style>