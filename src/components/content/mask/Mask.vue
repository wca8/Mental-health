<template>
  <div v-show="isShow" class="mask"  @touchmove.prevent @mousewheel.prevent>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Mask",
  data(){
    return {

    }
  },
  props:{
    isShow:{
      type:Boolean,
      default() {
         return false
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.mask{
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0,0,0,.4);
  box-sizing: border-box;
}
</style>