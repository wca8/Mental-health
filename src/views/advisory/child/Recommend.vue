<template>
  <div class="Recommend">
    <h3><i class="el-icon-user-solid"></i>最新入驻</h3>
    <div class="content">
     <div
         v-for="item in teacherList"
         class="item">
       <div class="left">
         <img :src="item.pic" alt="">
       </div>

       <div class="right">
         <div class="name">{{item.name}}</div>
         <div class="subName">{{item.subName}}</div>
         <div class="time">{{item.dateAdd}}入驻</div>
       </div>
     </div>
    </div>
  </div>
</template>

<script>
import {GetTeacherList} from "../../../network/advisory";

export default {
  name: "Recommend",
  data(){
    return{
      teacherList:[],
    }
  },
  created() {
    this.GetTeacherList(239491)
  },
  methods:{
    GetTeacherList(categoryId){
      GetTeacherList(categoryId).then(res=>{
        this.teacherList=res.data.result;
      })
    },
  }
}
</script>

<style scoped>
.teacherList{
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}
.Recommend{
  background-color: #fff;
  margin-top: 20px;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}

.item{
  display: flex;
  padding: 25px 0;
  align-items: center;
}
.left img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.right{
  margin-left: 20px;
}
.time{
  color: #cccccc;
  font-size: 13px;
  margin-top: 6px;
}
.name{
  font-size: 17px;
  margin-bottom: 8px;
}
.subName{
  font-size: 14px;
  color: #5a5757;
}
h3 i{
  color: #5f5f5f;
}
</style>