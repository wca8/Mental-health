<template>
  <div @click="itemClick" class="tab-bar-item">
    <div class="item" :style="activeStyle"><slot  name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"rgb(71,172,65)"
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  font-size: 14px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 2px 0px;
  border-right: 1px dashed #ccc
}

</style>
