<template>
  <div class="footer">
    <div class="main">
      <record></record>
      <links></links>
      <other></other>
    </div>
  </div>
</template>

<script>
import Links from "./child/Links";
import Record from "./child/Record";
import other from "./child/other";
export default {
  name: "MyFooter",
  components:{
    Links,
    Record,
    other,
  }
}
</script>

<style scoped>
.main{
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>