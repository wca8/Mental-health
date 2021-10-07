<template>
  <div class="tab-control">
    <div class="main">
      <router-link tag="div" to="/user/order"><i class="el-icon-s-goods"></i>订单中心</router-link>
      <router-link tag="div" to="/user/article"><i class="el-icon-s-order"></i>文章</router-link>
      <router-link tag="div" to="/user/like"><i class="el-icon-star-on"></i>收藏</router-link>
      <router-link tag="div" to="/user/buddy"><i class="el-icon-user-solid"></i>好友</router-link>
      <router-link tag="div" to="/user/vip"><i class="el-icon-ice-cream"></i>会员</router-link>

    </div>
  </div>
</template>

<script>
export default {
name: "TabControl"
}
</script>

<style scoped>
.tab-control{
  margin-top: 30px;

}
.main{
  display: flex;
  margin-top: 30px;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
}
.main>div{
  width: 16%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding:  8px 0px;
  font-size: 16px;
}

.router-link-active{
  border-bottom: 3px solid rgb(74,179,68);
}
</style>