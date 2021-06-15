<template>
  <div v-show="isShow" :style="{opacity:num}" class="toast" ref="toast">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "Toast",
  props:{
    // message:{
    //   type:String,
    //   default:''
    // },
    // show:{
    //   type:Boolean,
    //   default: false
    // },
  },
  data(){
    return {
      message: '',
      isShow: false,
      num:1
    }
  },
  methods: {
    show(message='默认文字', duration=2000,num=1) {

      this.isShow = true;
      this.message = message;
      this.num=num;
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0,0,0,.4);
  color:white;
  padding: 10px 40px ;
  border-radius: 15px;
  white-space: nowrap;
  z-index: 9999;
}
</style>
