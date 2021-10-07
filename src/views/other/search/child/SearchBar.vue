<template>
  <div class="search-bar">
    <div class="main">
      <el-input
          ref="input"
          prefix-icon="el-icon-search"
          class="input"
          placeholder="请输入内容"
          v-model="input"
          clearable>
      </el-input>
      <el-button @click="searchClick" icon="el-icon-search" type="success">搜索</el-button>
    </div>
  </div>
</template>

<script>
import {isEmpty} from "../../../../common/utils";

export default {
  name: "SearchBar",
  created() {
    this.input=this.$route.query.val;
    this.oldinput=this.$route.query.val;
  },
  data(){
    return{
      input:'',
      oldinput:''
    }
  },
  methods:{
    searchClick() {
      let val=isEmpty(this.input);
      if(val==true){
        this.$message.error('搜索内容不得为空！');
      }else{
        let routeData = this.$router.resolve({ path: '/Search', query: { val:this.input } });
        window.open(routeData.href, '_blank');
      }

      this.input=this.oldinput;
    },
  }
}
</script>

<style scoped>
.main{
  width: 830px;
  padding: 10px;
  display: flex;
  box-sizing: border-box;

}
.input >>> input {
  outline: none;
  background-color: rgb(246,246,246);
  border: none!important;
}
</style>