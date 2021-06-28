<template>
  <div class="user-comment">
    <div>
      <div class="main">
        <div class="left">
          <el-avatar :size="40" :src="circleUrl"></el-avatar>
        </div>

        <div class="right">
          <div class="content">
            <div>
              <h4>匿名：</h4>
            </div>
            <div>
              {{commentList.content}}
            </div>
          </div>
          <div class="time">
            <div>{{commentList.dateAdd}}</div>
            <div @click="ReportClcik" class="Report">举报</div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "UserComment",
  data(){
    return{
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  },
  created() {
    console.log(this.commentList)
  },
  props:{
    commentList:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    ReportClcik(){
      const h = this.$createElement;

      this.$notify({
        title: '举报通知',
        message: h('i', { style: 'color: teal'}, '尊敬的用户，您的举报通知我们已经收到，系统将会尽快核实！')
      });
    }
  }
}
</script>

<style scoped>
.user-comment{
  padding: 30px 0;
  border-bottom: 1px solid #e8e6e6;
}
.user-comment .main{
  display: flex;
  justify-content: space-between;
}
.user-comment .left{

  display: flex;
  align-items: center;

}
.user-comment .right{
  margin-left: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.time{
  display: flex;
  color: #848282;
  margin-top: 12px;
  font-size: 14px;
}
.Report{
  margin-left: 20px;
  cursor: pointer;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
h4{
  margin-bottom: 5px;
}
</style>