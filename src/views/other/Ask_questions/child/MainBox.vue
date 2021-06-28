<template>
  <div class="main-box">
   <div class="main">
     <div class="left">
         <div class="title">
           <h2>发布提问</h2>
           <div>
             是否匿名：
             <el-switch

                 v-model="isAnonymous"
                 active-color="#13ce66"
                 inactive-color="#ccc">
             </el-switch>
           </div>
         </div>

          <div class="title1">
            <el-input
                placeholder="请输入问题标题,50个字以内"
                v-model="title"
                clearable>
            </el-input>

          </div>

          <div class="textarea">
            <el-input
                type="textarea"
                :rows="8"
                placeholder="描述问题50个字到400个字之间 【年龄-性别】 【大致经过】 【内心感受】【经历多长事件】"
                v-model="textarea">
            </el-input>
          </div>

       <div class="categoryId0">
         <el-select v-model="categoryId" placeholder="请选择提问类别">
           <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
           </el-option>
         </el-select>
       </div>

          <div class="tags">
            <div>选择1-3个问题标签（必选）</div>
            <div class="tags-item">
              <div class="tags-title">
                <div   v-for="(item,index) in tags"
                       @click="tagsClick(index)"
                      :class="{active06251935:index==currentIndex}">
                  {{item.name}}
                </div>
              </div>

              <div class="tags-val">
                  <div>
                    <el-checkbox-group v-model="checkboxGroup1">
                      <el-checkbox-button :change="groupChange" v-for="city in showTagsList" fill="#409EFF" :label="city" :key="city">{{city}}</el-checkbox-button>
                    </el-checkbox-group>
                  </div>
              </div>

            </div>
          </div>

        <div class="submit">
          <el-button :disabled="isFlag" @click="postAskClick" type="success">发布提问</el-button>
        </div>
     </div>

     <div class="right">
         <recommend></recommend>
     </div>
   </div>

  </div>
</template>

<script>
import {GetTags0} from "../../../../network/ask";
import recommend from "../../../questions/child/recommend";
import {PostAskQuestion} from "../../../../network/ask";
import {GetKey} from "../../../../network/article";
import {GetUserInfo} from "../../../../network/login";
import {isEmpty} from "../../../../common/utils";
import {GetarticleList} from "../../../../network/article";

export default {
  name: "MainBox",
  data(){
    return{
      isAnonymous:true,
      title:'',
      textarea:'',
      tags:[{child:[]}],
      currentIndex:0,
      checkboxGroup1: [],
      adminToken:'',
      categoryId:'',
      options: [{
        value: 49510,
        label: '心理贴吧'
      }, {
        value: 49511,
        label: '倾诉中心'
      }, {
        value: 49513,
        label: '紧急求助'
      }],
      userId:'',
      nick:'',
      isFlag:true,
    }
  },
  components:{
    recommend,
  },
  watch:{
    checkboxGroup1(){
      console.log(this.checkboxGroup1)
    },
    inputChange(){
      let a=isEmpty(this.title);
      let b=isEmpty(this.textarea);
      let c=isEmpty(this.categoryId);
      let d=isEmpty(this.checkboxGroup1);
      if(a!=true&&b!=true&&c!=true&&d!=true){
        this.isFlag=false
      }else {
        this.isFlag=true
      }
      console.log("技术")

    }
  },
  created() {
    this.GetTags0()
    let token=localStorage.getItem('elementToken')
    this.GetUserInfo(token)
    this.GetKey();
  },
  computed:{
    showTagsList(){
      return this.tags[this.currentIndex].child;
    },
    inputChange() {
      const {title, textarea,categoryId,checkboxGroup1} = this;
      return {title, textarea,categoryId,checkboxGroup1}
    }

  },
  methods:{

    GetKey(){
      GetKey().then(res=>{
        this.adminToken=res.data;
        console.log(res)
      })
    },
    GetUserInfo(token){
      GetUserInfo(token).then(res=>{
        this.userId=res.data.base.id;
        this.nick=res.data.base.nick;
        console.log(res)
      })
    },
    GetTags0(){
      GetTags0().then(res=>{
        console.log(1)
        this.tags=JSON.parse(res).data;

      })
    },
    tagsClick(index){
      this.currentIndex=index;
      // this.GetarticleList()
    },
    tagsListClick(e,index){
      console.log(index)
      console.log(e)

    },
    groupChange(){
      console.log(this.checkboxGroup1)
    },
    PostAskQuestion(headers,obj){
      PostAskQuestion(headers,obj).then(res=>{
        console.log(res)
        if(res.msg==="success"){
          this.$message({
            message: '提问发布成功,正在跳转到问答页面！',
            type: 'success'
          });

          setTimeout(()=>{
            this.$router.push('/questions')
          },1000)

        }else{
          this.$message.error('提问发送失败');
        }
      })
    },
    postAskClick(){
      this.GetKey();
      let headers={
        'X-Token':this.adminToken,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      let obj={
        categoryId:this.categoryId,
        keywords:this.checkboxGroup1.toString(),
        title:this.title,
        content:this.textarea,
        token:localStorage.getItem('changan'),
        status:2,
        author:this.isAnonymous?"匿名提问":this.nick,
        //作为唯一依据
        tags:this.userId
      }

      this.PostAskQuestion(headers,obj)

    },


  },

}
</script>

<style scoped>
.main-box{
  width: 1180px;
  margin: 20px auto;
}
.main{
  display: flex;
  justify-content: space-between;
}
.left{
  width: 760px;
  padding: 0 50px 50px 50px;
  min-height: 800px;
  background-color: white;
}
.right{
  margin-left: 30px;
  width: 345px;
  background-color: white;
  height: 550px;
}
.title{
  display: flex;
  align-items: center;
  margin: 15px 0px;
}
.title h2{
  margin-right: 15px;
}
.title h2,.title>div{
  line-height: 40px;
}
.textarea{
  margin: 30px 0;
}
.submit{
  margin-top: 40px;
}
.submit button{
  width: 100%;
}
.tags-title{
  display: flex;
  margin: 20px 0;
}
.tags-title >div,.tags-val>div{
  width: 70px;
  background-color: rgba(243,244,245);
  line-height: 40px;
  margin-right: 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
}
.active06251935{
  background-color: rgba(103,194,58,1)!important;
  color: white;
}
.tags-val{
  display: flex;
  flex-wrap: wrap;
}
.tags-val>div{
  width: 100%;
}
.categoryId0{
  margin-bottom: 30px;
}
</style>
<style>
.el-checkbox-group{
  display: flex;
  flex-wrap: wrap;
  /*justify-content: space-evenly;*/
  padding: 20px!important;
  width: 100%;
}
.el-checkbox-button.is-checked .el-checkbox-button__inner{
  background-color: rgb(103,194,58)!important;
  border-color: rgb(74,179,69)!important;
  box-shadow:rgb(74,179,69)!important ;
}
.el-checkbox-button{
  margin-right: 20px;
  margin-bottom: 20px;
  line-height: 30px;
  height: 30px;
  box-sizing: border-box;
}
</style>