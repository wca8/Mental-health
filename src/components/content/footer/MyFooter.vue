<template>
  <div class="myfooter">
    <contact></contact>
    <links></links>
    <record></record>
  </div>
</template>

<script>
import Links from "./child/Links";
import Contact from "./child/Contact";
import Record from "./child/Record";
export default {
  name: "MyFooter",
  components:{
    Links,
    Contact,
    Record,
  }
}
</script>

<style scoped>
.myfooter{
  min-height: 400px;
  background: linear-gradient(rgb(36, 40, 43),rgb(40,45,50),rgb(48,53,59));
  margin-top: 40px;
}
</style>