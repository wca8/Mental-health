<template>
  <div class="talk">
<!--      <error></error>-->
    {{num_}}
  </div>

</template>

<script>
import Error from "../../components/common/error/Error";
import axios from 'axios'
export default {
  name: "Talk",
  data() {
    return {
        num:0
      };

  },
  computed:{
    num_(){
      return this.num.toFixed(2)
    }
  },
  methods:{

  },
  created() {
      axios({
        url:'http://152.136.185.210:4000/login',
        data:{
          name:'coderwhy',
          password:'1234506',
        },
        method:'post'
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        // console.log([err])
        console.dir(err)
      })
  },
  components:{
    Error
  },

}


</script>

<style scoped>
.talk{
  padding-top: 72px;
}

</style>
<style>

</style>