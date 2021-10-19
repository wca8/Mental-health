<template>
  <div class="talk">
    <error></error>
  </div>
</template>

<script>
import Error from "../../components/common/error/Error";

import axios from "axios";
export default {
  name: "Talk",
  data() {
    return {};
  },
  computed: {
    num_() {
      return this.num.toFixed(2);
    },
  },
  methods: {},
  created() {
    axios({
      url: "http://152.136.185.210:4000/login",
      data: {
        name: "coderwhy",
        password: "1234506",
      },
      method: "post",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        // console.log([err])
        console.dir(err);
      });
  },
  components: {
    Error,
  },
};
</script>

<style scoped>
.test {
  height: 200px;
  background-color: red;
  width: 1000px;
}
.talk {
  padding-top: 72px;
}
</style>
<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
