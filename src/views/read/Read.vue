<template>
    <div class="read">

    </div>



</template>

<script>
import HomeSwiper from "../home/child/HomeSwiper";
import {GetHomeBanner,GetarticleList,GetSortTitles

} from "../../network/home";


export default {
  name: "Read",
  data(){
    return{
      list:[],
      loading: true
    }
  },
  components:{
    HomeSwiper
  },
  created() {

      this.GetHomeBanner()

  },
  methods:{
    GetHomeBanner(){
      GetHomeBanner().then(res=>{
        console.log(res)
        this.list=res.data;
      })
    }
  }
}
</script>

<style scoped>

.read{
  padding-top: 72px;
  height: 100vh;
}
</style>