<template>
  <div class="user-article">
    <div class="main">
      <div v-for="item in articleList"     class="item">
        <div @click="itemClick(item.id,item.categoryId)" class="left">
          <img :src="item.pic" alt="">
        </div>

        <div @click="itemClick(item.id,item.categoryId)" class="right">
            <div class="title">
              <h3>{{item.title}}</h3>
            </div>
            <div class="time">
              {{item.dateAdd}}
            </div>
        </div>

        <div @click="removeUserArticle(item.id)" class="remove"><i class="el-icon-delete"></i>删除</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {GetKey} from "../../../../../../network/article";

export default {
  name: "UserArticle",
  props:{
    articleList:{
      type:Array,
      default(){
        return {}
      }
    }
  },
  created() {
    this.GetKey();
  },
  data(){
    return{
      adminToken:'',
    }
  },
  methods:{
    itemClick(id,categoryId){
      let routeData = this.$router.resolve({ path: '/content', query: {  id,categoryId } });
      window.open(routeData.href, '_blank');
    },
    GetKey(){
      GetKey().then(res=>{
        this.adminToken=res.data;
      })
    } ,
    remove(id){
      axios({
        url:'https://user.api.it120.cc/user/apiExtNews/del',
        headers: {
          'X-Token':this.adminToken,
        },
        method:'post',
        params:{
          id
        }
      }).then(res=>{
        if(res.data.msg=='success'){
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.$emit('removeSuccess')
        }
      })
    },
    removeUserArticle(id){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          confirmButtonClass:'determine-06151541'
        }).then(() => {
          this.remove(id)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });


    },

  }
}
</script>

<style scoped>
.main{
  padding: 20px;
}
.item{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  cursor: pointer;
}
.left{
  flex: 2;
}
.left img{
  width: 100%;
}
.right{
  flex: 7;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 6px;
}
.remove{
  display: flex;
  flex: 1;
  align-items: flex-end;
  font-size: 13px;
  padding-bottom: 6px;
  color: #a09d9d;
}
.time{
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #a09d9d;
}
</style>
<style>
.determine-06151541{
  background-color: rgb(74,179,68)!important;
}
</style>