<template>
  <div class="teacherList">
    <div class="main">
      <h3><i class="el-icon-s-custom"></i>心理咨询师</h3>
      <div class="content">
        <div
            @click="itemClick(item.id,item.name,item.subName)"
            v-for="item in teacherList"
            class="item">

          <div class="item-main">
            <div class="left">
              <img :src="item.pic" alt="">
            </div>

            <div class="right">
              <div class="name">
                <div class="name-item">{{item.name}}</div>
                <div class="subName">{{item.subName}}</div>
              </div>
              <div class="price">
                <div class="newPrice">￥{{item.minPrice}}</div>
                <div class="oldPrice">￥{{item.originalPrice}}</div>

              </div>
            </div>
          </div>

          <div class="reservation">
            <el-button size="medium" type="success" round>预约</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherList",
  props:{
    teacherList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    itemClick(id,name,subName){
      const details=name+subName;
      let routeData = this.$router.resolve({ path: '/TeacherDetail', query: {id,details  } });
      window.open(routeData.href, '_blank');
    }
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
h3 i{
  color: #5f5f5f;
}
.content{
  /*margin-top: 45px;*/
}
.item{
  display: flex;
  padding: 40px 0px;
  border-bottom: 1px solid #eae9e9;
  justify-content: space-between;
}
.item-main{
  display: flex;
}
.left img{
  width:68px;
  height: 68px;
  border-radius: 50%;
}
.right{
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.name{
  display: flex;
  align-items: center;

}
.subName{
  font-size: 14px;
  color: #3e3d3d;
}
.name-item{
  font-size: 18px;
  margin-right: 10px;
}
.price{
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.oldPrice{
  color: #cccccc;
  text-decoration:line-through;
  font-size: 13px;

}
.newPrice{
  color: #FE9A2E;
  margin-right: 15px;
  font-size: 15px;
}
</style>