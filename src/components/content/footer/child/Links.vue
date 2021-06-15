<template>
  <div class="links">
      <h3>友情链接</h3>
      <div class="content">
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
  padding: 30px 0px 30px 66px;
  box-sizing: border-box;
  border-bottom: .4px solid #4c4c4c;
}
.content{
  display: flex;
}
.main{
  margin-right: 30px;
  display: flex;

}
h3{
  color: white;
  margin-bottom: 10px;
}
.links a{
  color: white;
  font-size: 13px;
}
</style>