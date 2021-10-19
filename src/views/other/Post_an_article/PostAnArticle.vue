<template>
  <div class="Post-an-article">
    <top-info :is-flag=isFlag @submitClick="submit"></top-info>

    <div class="article-info">
      <div class="item1">
        <div>
          <el-input
              placeholder="请输入标题名"
              v-model="title"
              clearable>
          </el-input>
        </div>
        <div>
          <el-input
              placeholder="请输入关键词"
              v-model="keyword"
              clearable>
          </el-input>
        </div>
        <div>
          <el-select v-model="categoryId" placeholder="请选择文章类型">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div>
          <el-upload
              class="upload-demo"
              action="#"
              :on-change="uploadCertificateChange"
               multiple
              :limit="1"
              :file-list="fileList"
              :auto-upload="false"

          >
            <el-button :disabled="isPic" icon="el-icon-picture-outline" type="success" plain>点击上传封面图</el-button>
          </el-upload>
        </div>

      </div>

      <div class="item2">

      </div>
    </div>

    <mavon-editor

        v-model="content"
        ref="md"
        @change="change"
        @imgAdd="imgAdd"
        style="min-height: 600px">
      </mavon-editor>



  </div>
</template>

<script>
import 'github-markdown-css/github-markdown.css'
import marked from 'marked'
import axios from 'axios'
import {GetKey} from "../../../network/article";
import {PostArticle0} from "../../../network/article";
import {GetUserInfo} from "../../../network/login";
import TopInfo from "./child/TopInfo";

import qs from 'qs'
export default  {
  name:"PostAnArticle",
  data() {
    return {
      content:'',
      html:'',
      adminToken:'',
      userId:'',
      title:'',
      keyword:'',
      options: [{
        value: 49289,
        label: '用户文章',
      }

      ],
      categoryId: '',
      nick:'',
      numChange:0,
      isFlag: true,
      fileList:[],
      pic:'',
      isPic:false,
    }
  },
  components:{
    TopInfo
  },
  computed: {
    inputChange() {
      const {title, keyword,categoryId,html} = this;
      return {title, keyword,categoryId,html}
    }
  },
  watch:{
    inputChange(){
      let a=this.isEmpty(this.title);
      let b=this.isEmpty(this.keyword);
      let c=this.isEmpty(this.categoryId);
      let d=this.isEmpty(this.html);

      if(a!=true&&b!=true&&c!=true&&d!=true){
        this.isFlag=false
      }else {
        this.isFlag=true
      }

    }
  },

  created() {
    this.GetKey()
    let token=localStorage.getItem('elementToken')
    this.GetUserInfo(token)

  },

  methods: {
    isEmpty(obj) {
      if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
      }else{
        return  false
      }
    },
    GetUserInfo(token){
      GetUserInfo(token).then(res=>{
        console.log(res)
        this.userId=res.data.base.id;
        this.nick=res.data.base.nick;
      })
    },
    GetKey(){
      GetKey().then(res=>{
        this.adminToken=res.data;
      })
    } ,
    PostArticle0(headers,obj){
      PostArticle0(headers,obj).then(res=>{
        console.log(res)
        if(res.msg=='success'){
          this.$message({
            message: '恭喜你，文章发布成功,正在跳转到问答页面',
            type: 'success'
          });
          this.content='';
          this.html='';
          this.title='';
          this.keyword='';
          this.categoryId='';
          this.fileList=[];
          setTimeout(()=>{
            this.$router.push('/read');
          },2000)

        }
      })
    },
    change(value, render){
      this.html = render;

    },
    imgAdd(pos, $file){
      this.GetKey()
      console.log($file)
      let formdata = new FormData()
      formdata.append('upfile', $file)
      axios({
        headers: {
          "Content-Type": "multipart/form-data",
          'X-Token':this.adminToken,
          transformRequest: [$file => $file]
        },
        url:'https://user.api.it120.cc/fileUpload',
        method:'post',
        data: formdata
      }).then(res=>{
         let {url}= res.data.data;
         this.$refs.md.$img2Url(pos, url);
      })

    },

    submit(){
      console.log(this.html)
      this.GetKey()
      let obj={
        categoryId:this.categoryId,
        keywords:this. keyword,
        title:this.title,
        content:this.html,
        token:localStorage.getItem('changan'),
        status:2,
        // income:localStorage.getItem('elementToken'),
        author :this.nick,
        pic:this.pic,
        //作为唯一依据
        tags:this.userId
      }
      let headers={
        'X-Token':this.adminToken,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      this.PostArticle0(headers,obj);

    },

    postArticle(obj){
      postArticle(obj).then(res=>{
        console.log(res)
      })
    },


    uploadCertificateChange(file) {
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
        if(res.data.msg='success'){
          this.$message({
            message: '封面图上传成功',
            type: 'success'
          });
          let {url}= res.data.data;
          let {name}=res.data.data;
          this.pic=url;
          this.isPic=true;
        }

      })
    },


  },

}
</script>

<style>

.Post-an-article{
  position: relative;
  min-height: 100vh;
  background-color: white;
  z-index: 100;
}
.html{
  height: 1000px;
}
.article-info{
  padding: 0px 30px;
  box-sizing: border-box;
  margin: 30px 0;
}
.item1{
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
}
.item1 >div:nth-child(1){
  flex: 1;

}
.item1 >div{
  display: flex;
  box-sizing: border-box;
  margin-right: 20px;
}

.item1 >div:last-child div{
  width: 100%;
}
.item1 >div:last-child{
  margin-right: 0px;
}
</style>
<style>
.upload-demo{
  display: flex;

}
.upload-demo button{
  height: 40px;
  box-sizing: border-box;

}
.el-upload-list el-upload-list--text{
  display: flex;
  align-items: center;
  height: 40px;
}
</style>