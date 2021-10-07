<template>
  <div class="links">

      <div class="content">
        <h4>友情链接</h4>
        <div v-for="item in list"  class="main">
          <a target="_blank" :href="item.linkUrl">{{item.title}}</a>
        </div>
      </div>

  </div>
</template>

<script>
import {GetLinks} from "../../../../network/footer";

export default {
  name: "Links",
  data(){
    return{
      list:[],
    }
  },
  created() {
    this.GetLinks()
  },
  methods:{
    GetLinks(){
      GetLinks().then(res=>{
        this.list=res.data
        // console.log(res)
      })
    }
  }
}
</script>

<style scoped>
.links{
  width: 1270px;
  margin: 0 auto;
  /*padding: 40px 0px;*/
  padding: 10px;
  box-sizing: border-box;

}
.content{
  display: flex;
  justify-content: center;
  align-items: center;
}
.main{
  margin-right: 30px;
  display: flex;
  align-items: center;
}
h4{
  text-align: center;
  color: #b1b0b0;
  margin-right: 10px;
  display: flex;
  align-items: center;
}
.links a{
  color: #b1b0b0;
  font-size: 13px;
}
</style>