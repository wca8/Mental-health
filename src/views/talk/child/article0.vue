<template>
  <div class="markdown-body">
    <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable>
    </el-input>

  </div>
</template>

<script>
export default {
  name: "article0",
  data(){
    return{
      input:''
    }
  },
  watch:{
    info(){
      this.input=this.info.id;
    }
  },
  mounted() {

  },
  props:{
    info:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>