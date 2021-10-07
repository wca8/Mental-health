<template>
  <div class="comment">
      <h2>其他买家,需要你的建议呦!</h2>
      <div class="content">
        <div class="Text-evaluation">
          <el-input
              type="textarea"
              :rows="7"
              placeholder="请输入您的评价"
              v-model="textarea">
          </el-input>
          <div v-if="isFlag">评价字数不少于10个字！</div>
        </div>

        <div class="rating">
          <div>
            <div>
              老师服务
              <el-rate
                  :allow-half="true"
                  v-model="value"
                  show-text>
              </el-rate>
            </div>
            <div>
              安排速度
              <el-rate
                  :allow-half="true"
                  v-model="value2"
                  show-text>
              </el-rate>
            </div>
            <div>
             <div>整体评价</div>
              <el-radio v-model="radio" label="2">好评</el-radio>
              <el-radio v-model="radio" label="1">中评</el-radio>
              <el-radio v-model="radio" label="0">差评</el-radio>
            </div>
          </div>
        </div>
      </div>


    <div class="Submit">
      <el-button  :disabled="isFlag" size="medium" @click="submitClick" type="success">提交评价</el-button>
    </div>

  </div>
</template>

<script>
import {SetOrderComment} from "../../../../network/order";

export default {
  name: "Comment",
  data() {
    return {
      value: null,
      value2: null,
      value3:null,
      textarea:'',
      token:'',
      OrderId:'',
      radio:'2',
      isFlag:true,
    }
  },
  created() {
    this.OrderId =this.$route.query.Oid;
    this.token=localStorage.getItem('elementToken');
    console.log(!this.textarea.length>10)

  },
  computed:{
    textLength(){
      return this.textarea.length>10
    }
  },
  props:{
    id:{
      type:String,
      default(){
        return '0'
      }
    }
  },
  watch:{
    textarea(){
      if(this.textarea.trim().length>=10){
        this.isFlag=false
      }else{
        this.isFlag=true
      }
    }
  },
  methods:{
    SetOrderComment(obj){
      SetOrderComment(obj).then(res=>{
        if(res.msg=='success'){
          this.$message({
            message: '感谢您,评论成功,正在跳转到心理咨询页面!',
            type: 'success'
          });
          setTimeout(()=>{
            this.$router.replace({
              path:'/advisory'
            })
          },1000)
        }
      })
    },
    submitClick(){
      let obj= {

        postJsonString:JSON.stringify(
            {
              token: this.token,
              orderId: this.OrderId,
              reputations: [{
                id: this.id,
                reputation:this.radio,
                remark: this.textarea,
              }]
            }
        )
      }
      this.SetOrderComment(obj)




    }
  }
}
</script>

<style scoped>
.comment{
  background-color: #fff;
  padding:0 50px 80px 50px;
}
.Text-evaluation{
  width: 670px;
}
.Text-evaluation>div{
  font-size: 13px;
  margin-top: 10px;
  color: #6a6868;
}
.content{
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.rating{
  width: 180px;
  display: flex;
  justify-content: center;
}
.rating div{
  margin-bottom: 6px;

}
.Submit{
  margin-top: 30px;
  width: 670px;
  text-align: right;
}

</style>