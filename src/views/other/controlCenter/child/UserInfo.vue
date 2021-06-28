<template>
  <div class="user-info">
    <div v-show="isFlag" class="main">
      <div>
        <div>昵称：</div>
        <div>{{userInfo_.nick}}</div>
      </div>

      <div>
        <div>ID：</div>
        <div>{{userInfo_.id}}</div>
      </div>

      <div>
        <div>email:</div>
        <div>{{userInfo_.email}}</div>
      </div>
      <div>
        <div>注册日期:</div>
        <div>{{userInfo_.dateAdd}}</div>
      </div>

      <div>
        <div>性别:</div>
        <div v-if="userInfo_.gender">{{userInfo_.gender==1?'男':'女'}}</div>
        <div v-else>保密</div>
      </div>

      <div>
        <div>我的简介:</div>
        <div class="textarea-box">
          暂未设置简介
        </div>
      </div>

      <el-button @click="modifyClick" type="success" round>修改资料</el-button>

    </div>

    <div v-show="!isFlag" class="modify main">
      <div>
        <div>昵称：</div>
        <div class="input">
          <el-input
            placeholder="请输入内容昵称"
            v-model="nick"
            clearable>
            </el-input>
        </div>
      </div>

      <div>
        <div>性别:</div>
        <div>
          <el-radio v-model="radio" label="1">男</el-radio>
          <el-radio v-model="radio" label="2">女</el-radio>
        </div>
      </div>

      <div>
        <div>城市:</div>
        <div class="province-box">
          <el-select    @change="provinceChange"  v-model="province" placeholder="请选择省份">
            <el-option

                v-for="item in provinceList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
            </el-option>
          </el-select>
        </div>

        <div>
          <el-select v-model="city" placeholder="请选择城市">
            <el-option
                v-for="item in cityList"
                :key="item.value"
                :label="item.name"
                :value="item.name">
            </el-option>
          </el-select>

        </div>
      </div>

      <div>
        <div>个性签名：</div>
        <div class="input">
          <el-input
              placeholder="请输入内容昵称"
              v-model="Signature"
              clearable>
          </el-input>
        </div>
      </div>


      <div>
        <div>我的简介:</div>
        <div class="textarea-box">
          <el-input
              type="textarea"
              :rows="6"
              placeholder="请输入内容个人简介"
              v-model="textarea">
          </el-input>
        </div>
      </div>

      <el-button @click="modifyClick_" type="success" round>确认修改</el-button>
    </div>

  </div>
</template>

<script>
import {SetUserInfo} from "../../../../network/user";
import axios from "axios";
export default {
  name: "UserInfo",
  data(){
    return{
      textarea:'',
      isFlag:true,
      nick:'',
      radio: '1',
      Signature:'',
      province:'',
      provinceList:[],
      city:'',
      cityList:[],
    }
  },
  watch:{
    userInfo_(){
      this.nick=this.userInfo_.nick;
    }
  },
  computed:{
    showgender(){

    }
  },
  props:{
    userInfo_:{
      type:Object,
       default(){
        return {}
      }
    }
  },
  created() {
    this.GetProvince();
  },
  methods:{
    SetUserInfo(obj){
      SetUserInfo(obj).then(res=>{
        console.log(res)
        if(res.msg=='success'){
          this.$message({
            message: '信息修改成功！',
            type: 'success'
          });
          this.$emit('Refresh_')
        }
      })
    },
    GetProvince(){
      axios({
        method:'get',
        url:'https://api.it120.cc/common/region/v2/province',
      }).then(res=>{
        this.provinceList=res.data.data;
        console.log(res)
      })
    },
    GetCity(id){
      axios({
        method:'get',
        url:'https://api.it120.cc/common/region/v2/child',
        params:{
          pid:id,
        }
      }).then(res=>{
        this.city=""
        this.cityList=res.data.data;
        console.log(res)
      })
    },
    provinceChange(id){
      this.GetCity(id)
      let Newprovince=this.provinceList.filter(item=>{
        return item.id==id;
      })
      this.province=Newprovince[0].name;

    },
    modifyClick(){
      this.isFlag=!this.isFlag;
    },
    modifyClick_(){
      this.isFlag=!this.isFlag;
      let obj={
        city:this.city,
        nick:this.nick,
        gender:this.radio,
        extJsonStr:{
          "Signature":this.Signature,
          "textarea":this.textarea,
        },
        token:localStorage.getItem('elementToken')
      }
      this.SetUserInfo(obj)
    }
  }
}
</script>

<style scoped>
.main>div{
  display: flex;
  margin-bottom: 36px;
}
.main>div>div:nth-child(1){
 width: 100px;

}
.main>div>div:nth-child(2){
  color: #555454;
}
.textarea-box{
  width: 65%;
}
.input{
  width: 65%;
}
</style>
<style>
.el-radio__input.is-checked .el-radio__inner{
  background-color: rgb(77,177,68)!important;
}
.province-box{
  margin-right: 20px;
}
</style>
