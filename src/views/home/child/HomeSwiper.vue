<template>
  <div>
    <swiper
        class="swiper"
        ref="mySwiper" v-if="bannerList.length>0" :options="swiperOptions">
      <swiper-slide v-for="item in bannerList" >
        <a  target="_blank" :href="item.linkUrl">
       		<img :src="item.picUrl" alt="">
         </a>
      </swiper-slide>


      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev" slot="button-next"></div>
      <div class="swiper-button-next" slot="button-prev"></div>


    </swiper>
  </div>
</template>

<script>

export default {
  name: "HomeSwiper",
  props:{
    bannerList: {
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        // 如果需要前进后退按钮
        autoplay : {
          delay:3000,
          disableOnInteraction: false,  //用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // effect : 'cube',
        // 如果需要滚动条

        // Some Swiper option/callback...
      }
    }
  },

}
</script>

<style scoped>
.swiper{
  width: 100%;
  height: 300px;
}
.swiper img{
  width: 100%;
  height: 100%;
}
.swiper-button-prev,.swiper-button-next{
  display: none;
}
.swiper:hover .swiper-button-prev{
  display: block;
}
.swiper:hover .swiper-button-next{
  display: block;
}
</style>