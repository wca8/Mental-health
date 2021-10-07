<template>
  <div ref="main" class="main">
      <div class="left">
        <h2 class="title"><i class="el-icon-circle-check"></i>基本信息</h2>
        <div class="baseinfo-item">
          <div class="content">
            <div>
              <i class="el-icon-document-checked"></i>
            </div>
            <div><h3>认证资质</h3></div>
          </div>
          <div class="baseItme" v-for="item in baseItme">
            {{item}}
          </div>

          <div class="content">
            <div>
              <i class="el-icon-position"></i>
            </div>
            <div><h3>擅长方向</h3></div>
          </div>

          <div class="baseItme" v-for="item in GoodDirection">
            {{item}}
          </div>


          <div class="content">
            <div>
              <i class="el-icon-user"></i>
            </div>
            <div><h3>咨询对象</h3></div>
          </div>

          <div class="baseItme" v-for="item in ConsultationObject">
            {{item}}
          </div>
        </div>

        <div class="Suggestions">
          <h2 class="public-title">推荐语</h2>
          <div class="Suggestions-item">
            {{Suggestions}}
          </div>

        </div>

<!--        个人简介-->
        <div class="synopsis">
            <h2 class="public-title">个人简介</h2>
            <div class="teacher-img">
              <img :src="pic[1]" alt="">
            </div>
            <div class="synopsisContent">
              <div v-html="synopsisContent"></div>
            </div>
        </div>

      </div>

      <div class="right">
         <div ref="Reserve" class="Reserve">
           <div >
             <div class="mode">
               <div><i class="el-icon-phone"></i> 语音咨询</div>
               <div>￥{{basicInfo.minPrice}} /次</div>
             </div>

           </div>
           <div>
             <div class="mode">
               <div> <i class="el-icon-video-camera-solid"></i> 视频咨询</div>
               <div>￥{{basicInfo.minPrice}} /次</div>
             </div>

           </div>
           <div>
             <div class="mode">
               <div><i class="el-icon-user-solid"></i> 面对面咨询</div>
               <div>￥{{basicInfo.minPrice+300}} /次</div>
             </div>

           </div>

           <div class="Reserve_f">
                <el-button @click="ReserveClick"  class="Reserve_btn"  size="medium" type="success" round>立即预约</el-button>
           </div>

         </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {GetTokenStatus} from "../../../../network/user";
import {GetPurchaseService} from "../../../../network/advisory";

export default {
  name: "centerBaseInfo",
  props:{
    skill:{
     type:Object,
      default(){
       return {}
      }
    },
    pic:{
      type:Array,
      default(){
        return {}
      }
    },
    synopsisContent:{
      type:String,
      default(){
        return ""
      }
    },
    basicInfo:{
      type:Object,
      default(){
        return {}
      }
    },
    mainContentHeight:{
      type:Number,
      default(){
        return 4000
      }
    },
    tId:{
      type:Number,
      default(){
        return 0
      }
    }
  },
  data(){
    return{

    }
  },
  created() {

  },
  computed:{
    ...mapState("advisoryModule",["centerTop"]),
    baseItme(){
      return (this.skill.Certification||' ').split('  ')
    },
    ConsultationObject(){
      return (this.skill.Consultation_object||' ').split('、')
    },
    GoodDirection(){
      return (this.skill.Good_direction||' ').split(' ')
    },
    Suggestions(){
      return this.skill.Suggestions
    }
  },
  methods:{
    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let Reserve=this.$refs.Reserve
      let maxMove=this.mainContentHeight-window.innerHeight
      if(scrollTop>300&&scrollTop<maxMove){
        Reserve.classList.add('fixed')
      }else{
        Reserve.classList.remove('fixed')
      }
    },
    GetTokenStatus(){
      let token=localStorage.getItem('elementToken');
      GetTokenStatus(token).then(res=>{
        if(res.msg=='当前登录token无效，请重新登录'){
          let routeData = this.$router.resolve({ path: '/login', query: {  } });
          window.open(routeData.href, '_blank');
        }else{
          this.$router.push({
            path:'PurchaseService',
            query:{
             tId:this.tId
            }
          })
        }
      })
    },
    pay(){

    },
    ReserveClick(){
        this.GetTokenStatus()
    }
  },
  mounted() {
    this.$nextTick(()=>{
      console.log(this.centerTop)
      this.$refs.main.style.marginTop=this.centerTop+'px'
    })

    window.addEventListener("scroll",this.handleScroll);

  }

}
</script>

<style scoped>

.main{
  display: flex;
  margin: 0 auto;
  width: 1184px;
  justify-content: space-between;

}
.left{
  width: 750px;
  min-height: 600px;
  padding: 20px;

}
.right{
  width: 345px;
  min-height: 600px;

}
.title{
  padding-bottom: 30px;
  border-bottom: 2px solid rgb(58,176,68);
}
.content{
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.content div:nth-child(1){
  margin-right: 40px;
  font-size: 50px;

}
.baseItme{
  padding-left: 92px;
}
.public-title{
  margin-top: 60px;
  padding-bottom: 30px;
  border-bottom: 2px solid rgb(58,176,68);
  position: relative;
  padding-left: 20px;
  display: flex;
  align-items: center;
}
.public-title:before{
  content: ' ';
  position: absolute;
  left: 0;
  width: 10px;
  height:10px;
  background-color: rgb(58,176,68);
}
.Suggestions-item{
  margin-top: 30px;
}

.teacher-img{
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.teacher-img img{
  width: 95%;
}
.synopsisContent{
  margin-top:30px;
  padding: 30px 0 0 20px;
}
.Reserve{
  padding:10px 30px;
  min-height: 300px;
  box-shadow:0 8px 27px 0 rgb(243, 244, 245);
}
.Reserve i{
  font-size: 35px;
  margin-right: 10px;
  color:rgb(58,176,68) ;
}
.Reserve>div{
  margin-bottom: 50px;
}

.mode{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mode>div{
  display: flex;
  align-items: center;
}
.mode>div:nth-child(2){
  color:rgb(58,176,68) ;
}
.Reserve_btn{
  width: 100%;
  height: 45px;
  font-size:20px;
}

.fixed{
  position: fixed;
  top: 95px;
  bottom: auto;
  z-index: 9999;
  width: 345px;
  box-sizing: border-box;
}
</style>