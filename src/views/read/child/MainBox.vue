<template>
  <div class="main-box">
    <slot>

    </slot>

  </div>
</template>

<script>
export default {
name: "MainBox"
}
</script>

<style scoped>
.main-box{
  max-width: 1180px;
  margin: 0 auto;
  min-height: 100vh;

}
</style>