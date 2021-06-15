<template>
  <div class="test">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
      <el-form-item >
        <el-select v-model="ruleForm.value" placeholder="请选择">
          <el-option
              v-for="item in ruleForm.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        </el-form-item >
      </el-form>

  </div>
</template>

<script>


export default {
  name: "Test",

  data() {
    return{
      ruleForm: {
        username: '',
        password:'',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      },
      rules: {
        username: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            validator: function(rule, value, callback) {
              if (/^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value) == false) {
                callback(new Error("请输入邮箱"));
              } else {
                //校验通过
                callback();
              }
            },
            trigger: "blur"
          }
        ],

        password:[
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            validator: function(rule, value, callback) {
              if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,18}$/.test(value) == false) {
                callback(new Error("密码须包含数字、字母两种元素，且密码位数为6-16位"));
              } else {
                //校验通过
                callback();
              }
            },
          }
        ]

      }
    }
  }
}
</script>

<style scoped>
.test{
  padding-top: 72px;
}
</style>