<template>
  <div class="main">
    <div ref="top" class="top">
      <div ref="info" class="info">
        <div class="Avatar">
          <img :src="basicInfo.pic" alt="">
        </div>
        <div class="name">
          <div class="name-item">{{basicInfo.name}}</div>
          <div class="tags">{{basicInfo.tags}}</div>
          <div class="service-info">
            <div class="service-num">
              <div>
                <div>心理栈服务人数</div>
                <div>{{basicInfo.numberSells}}人</div>
              </div>
              <div>
                <div>收藏人数</div>
                <div>{{basicInfo.numberFav}}人</div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topBaseInfo",
  props:{
    basicInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  mounted(){
    this.$nextTick(()=>{
      let h=(this.$refs.top.offsetHeight)/2;
      this.$refs.info.style.top=h+'px'
      this.$store.commit("advisoryModule/SetCenterTop",{centerTop:h})
    })
  },
}
</script>

<style scoped>
.top{
  height: 200px;
  background: url("https://dcdn.it120.cc/2021/08/13/cda91d9a-e56c-405a-abaf-b9440d65c41a.png") no-repeat;
  background-size: 100% auto;
  min-width: 1519px;
}
.info{
  display: flex;
  margin: 0 auto;
  position: relative;
  width: 1184px;
  justify-content: space-between;

}
.Avatar{
  width: 190px;
  height:190px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid rgba(255,255,255,.3);
}
.Avatar img{
  width: 180px;
  height: 180px;
  border-radius: 10px;
}
.name{
  width: 970px;
  position: relative;
}
.name-item{
  font-size: 40px;
  font-weight: 550;
  color: white;
}
.tags{
  padding-top: 8px;
  color: white;
  font-size: 20px;
}
.service-info{
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 35px;
  box-sizing: border-box;
}
.service-num{
  display: flex;
}
.service-num>div:nth-child(1){
  margin-right: 56px;
}

.service-num>div>div:nth-of-type(1){
  font-size: 16px;
  color: rgba(0,0,0,.5);
}
.service-num>div>div:nth-of-type(2){
  color: rgb(103,194,58);
  padding-top: 8px;
  text-align: center;
  font-size: 35px;
}
</style>