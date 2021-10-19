<template>
    <div class="read">
      <main-box>
          <main-content></main-content>
      </main-box>
      <my-footer ref="my_footer"  class="my-footer"></my-footer>
    </div>
</template>

<script>
import MainBox from "./child/MainBox";
import MainContent from "./child/MainContent";
import MyFooter from "../../components/content/footer/MyFooter";
export default {
  name: "Read",
  data(){
    return{

    }
  },
  components:{
    MainBox,
    MainContent,
    MyFooter,
  },
  created() {
     window.scrollTo(0,0)
  },
  mounted() {
    // 监听滚动事件
    // document.getElementById("blockmain").addEventListener("scroll", this.handleScroll)
    // window.addEventListener('scroll', this.handleScroll)
    this.$nextTick(function () {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleScroll(){
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop//获取滚动距离
      this.scrollTop = scrollTop//data里return了一个全局的scrollTop
      let Mtop=this.$refs.my_footer.$el.offsetTop;
      let top=Mtop-this.scrollTop;
      if(top<740){
        this.$store.commit('setClass')
      }else{
        this.$store.commit('removeClass')
      }
    },
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  
}
.read{
  padding-top: 3.57rem;
  background-color: rgba(243,243,245,1);
  min-height: 100vh;
}
.my-footer{
  z-index: 9999;
}
</style>