<template>
  <div class="avatar">
    <div class="main">
      <el-upload
          class="avatar-uploader"
          action="#"
          :show-file-list="false"
          :on-change="uploadCertificateChange"
          :auto-upload="false"
         >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <el-button @click="SetUpClick" :disabled="imageUrl==''" class="SetUpClick" type="success" round>设置为头像</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {GetKey} from "../../../../network/article";
import {SetUserInfo} from "../../../../network/user";
import {mapMutations} from "vuex";

export default {
  name: "Avatar",
  data(){
    return{
      adminToken:'',
      imageUrl:'',
    }
  },
  created() {
    this.GetKey()
  },
  methods:{
    ...mapMutations("user", ["SetUserInfoChange"]),
    SetUserInfo(obj){
      SetUserInfo(obj).then(res=>{
        if(res.msg=='success'){
          this.$message({
            message: '头像设置成功！',
            type: 'success'
          });
          this.SetUserInfoChange()
          this.imageUrl='';
          this.$store.commit('setUserFlag');
        }
      })
    },
    GetKey(){
      GetKey().then(res=>{
        this.adminToken=res.data;
      })
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    // beforeAvatarUpload(file) {
    //   console.log('上传图片之前')
    //   const isJPG = file.type === 'image/jpeg';
    //   const isLt2M = file.size / 1024 / 1024 < 2;
    //
    //   if (!isJPG) {
    //     this.$message.error('上传头像图片只能是 JPG 格式!');
    //   }
    //   if (!isLt2M) {
    //     this.$message.error('上传头像图片大小不能超过 2MB!');
    //   }
    //   return isJPG && isLt2M;
    // },

    uploadCertificateChange(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if(!isLt2M){
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }else{
        let fd = new FormData();
        fd.append("upfile", file.raw);

        axios({
          headers: {
            "Content-Type": "multipart/form-data",
            'X-Token':this.adminToken,
            transformRequest: [file => file]
          },
          url:'https://user.api.it120.cc/fileUpload',
          method:'post',
          data: fd
        }).then(res=>{
          console.log(res)
          if(res.data.msg='success'){
            this.$message({
              message: '图片上传成功',
              type: 'success'
            });
            let {url}= res.data.data;
            this.imageUrl=url

          }

        })
      }
    },
    SetUpClick(){
      let obj={
        avatarUrl:this.imageUrl,
        token:localStorage.getItem('elementToken')
      }
      this.SetUserInfo(obj)
    },
  }
}
</script>

<style scoped>
.SetUpClick{
  margin-top: 30px;
}
</style>


<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  /*height: 179px;*/
  display: block;
}
.avatar-uploader .el-upload{
  margin-top:10px ;
}
</style>

