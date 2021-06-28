<template>
  <div class="tabControl">
    <div
      class="tabControl-item"
      :class="{active:index===currentIndex}"
      @click="tabClick(index)"
      v-for="(item,index) in titles">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    tabClick(index){
      this.currentIndex=index
      this.$emit('tabClick',index)
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.tabControl{
  display: flex;
  background-color: #fff;
  z-index: 20;
  margin-top: 20px;
}
.tabControl-item{
  flex: 1;
  text-align: center;
  cursor: pointer;
  line-height: 35px;
}

.active{
  color:white ;
  /*border-radius: 15px;*/
  /*background-color: rgb(74,179,68);*/
  color:rgb(74,179,68) ;
}

</style>
