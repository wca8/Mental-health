<template>
  <div class="pre-next">
    <div class="main">
      <div  @click="preNextList.pre&&preClcik(preNextList.pre.id)" class="pre">
          {{preNextList.pre?'上一篇':'已经到顶啦'}}
      </div>

      <div @click="preNextList.next&&preClcik(preNextList.next.id)" class="next">
          {{preNextList.next?'下一篇':'已经到底啦'}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreNext",
  props:{
    preNextList:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{

    preClcik(id){
      let categoryId=this.categoryId;
      let routeData = this.$router.resolve({ path: '/content', query: {  id,categoryId } });
      window.open(routeData.href, '_blank');
    }
  }
}
</script>

<style scoped>
.pre-next{
  margin: 30px 0 20px 0;
  background-color: rgba(242,242,242,1);
  line-height: 40px;
  border-radius: 20px;

}
.main{
  display: flex;
  justify-content: space-around;
}
.main>div{
  cursor: pointer;
}
</style>