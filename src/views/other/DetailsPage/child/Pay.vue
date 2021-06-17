<template>
  <div class="pay">
    <div class="top">
      <div class="pay-top">
        打赏
      </div>
      <div @click="shutDownClick" class="shut-down">
        <i class="el-icon-close"></i>
      </div>
    </div>

    <div class="center">
      <h4>每一种付出，都值得被鼓励</h4>
      <div class="center-num">
        <div
            v-for="(item,index) in moneyList"
            @click="moneyListClick(index)"
            :class="{active_20210616:index==current}">{{item.val}}</div>
      </div>
      <div class="input-content">
        <el-input
            oninput ="value=value.replace(/[^0-9.]/g,'')"
            class="input-num"
            maxLength='5'
            placeholder="或输入其他金额 1-10000元"
            v-model.number="input"
            clearable>
        </el-input>
      </div>
      <div class="payment-method">
        <div
            v-for="(item,index) in goPayList"
            @click="goPayClick(index)"
            :class="{active_20210616:index==current2}">{{item.name}}</div>
      </div>

      <el-button @click="PayClick" class="go-pay" type="success">去支付</el-button>

    </div>


  </div>
</template>

<script>
import {randomRange} from "../../../../common/utils";

export default {
  name: "Pay",
  data(){
    return{
      input:null,
      current:null,
      current2:null,
      moneyList:[
        {
          num:1,
          val:"1元"
        },
        {
          num:2,
          val:"2元"
        },
        {
          num:5,
          val:"5元"
        },
        {
          num:10,
          val:"10元"
        }
      ],
      goPayList:[
        {
          id:1,
          name:'微信支付'
        },{
          id:2,
          name:'支付宝'
        }
      ],
      moneynum:null,
      pay_method:null,
    }
  },

  methods:{
    shutDownClick(){
      this.$emit('shutDownClick')
    },
    moneyListClick(index){
      this.current=index;
      this.moneynum=this.moneyList[index].num;
      console.log("选择"+this.moneynum)
    },
    goPayClick(index){
      this.current2=index;
      this.pay_method=this.goPayList[index].name;
      console.log("选择"+this.pay_method)
    },
    PayClick(){
      let flag=this.moneynum!=null&&this.pay_method!=null||this.input!=null
      &&this.pay_method!=null;
      if(flag){
        let obj={
          money:this.moneynum||this.input,
          payName:"心理栈官方打赏",
          remark:"爱心打赏",
          token:localStorage.getItem('elementToken')
        }
        console.log(obj)
        this.$store.commit('SetPayInfo',obj)
        let random = randomRange(5,22);
        this.$router.push('/pay/'+ random)

      }else {
        console.log("错误")
      }
    }
  }
}
</script>

<style scoped>
.pay{
  width: 350px;
  height: 460px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 20px;
}
.pay-top{
  width: 100px;
  height: 100px;
  background:linear-gradient(rgb(74,179,68),rgb(74,175,34));
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -50px;
}
.shut-down{
  position: absolute;
  right: 0;
  /*width: 100px;*/
  font-size: 30px;
  padding: 10px;
  cursor: pointer;
  color: #666464;
}
.center{
  width: 100%;
  /*background-color: pink;*/
  min-height: 400px;
  position: relative;
  top:50px;
  padding: 22px;
  box-sizing: border-box;
  color: #3d3c3c;
}
.el-radio-group{
  display: flex;
  justify-content: space-between;
}
.el-radio{
  flex: 1;
  display: flex;
  justify-content: center;
  height: 40px;
  align-items: center;
  border: 1px solid rgb(74,179,68);
}
.center-num{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.center-num>div{
  width: 65px;
  text-align: center;
  line-height: 40px;
  border: 1px solid rgb(74,179,68);
  border-radius: 10px;
  cursor: pointer;
}
h4{
  text-align: center;
}
.input-content{
  margin-top: 15px;

}
.payment-method{
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
.payment-method>div{
  width: 135px;
  text-align: center;
  line-height: 40px;
  border: 1px solid rgb(74,179,68);
  border-radius: 10px;
  cursor: pointer;
}
.go-pay{
  width: 100%;
  margin-top: 20px;
}
.active_20210616{
  background-color: rgb(74,179,68);
  color: white;
}
</style>
<style>
.input-num input{
  border-color: rgb(74,179,68)!important;

}
</style>