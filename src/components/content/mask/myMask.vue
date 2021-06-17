<template>
  <div v-show="isShow" class="mymask"  @touchmove.prevent @mousewheel.prevent>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "myMask",
  props:{
    isShow:{
      type:Boolean,
      default() {
        return false
      }
    }
  },
}
</script>

<style scoped>
.mymask{
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