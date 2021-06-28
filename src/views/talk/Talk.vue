<template>
  <div class="talk">
    <article0 :info="info"></article0>
   </div>

</template>

<script>

import article0 from "./child/article0";
import {GetUserInfo} from "../../network/login";

export default {
  name: "Talk",
  data() {
    return {
      info:{},

    };
  },
  created() {
    let t=localStorage.getItem('elementToken');
    this.GetUserInfo(t)
  },
  components:{
    article0
  },
  methods: {
    GetUserInfo(t){
      GetUserInfo(t).then(res=>{
        console.log(res)
        this.info=res.data.base
        console.log(this.info)
      })
    }
  }
}


</script>

<style scoped>
.talk{
  padding-top: 72px;
}

</style>
<style>

</style>