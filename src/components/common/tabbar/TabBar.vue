<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  #tab-bar{
    margin-top: 1.428571rem;
    display: block!important;
  }
}
#tab-bar{
  display: flex;
  z-index: 10;
  /*box-shadow: 0 -1px 1px rgba(100,100,100,.2);*/
  /*background-color: #f6f6f6;*/
}
</style>
