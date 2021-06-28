import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import toast from 'components/common/toast'
// import mask from 'components/content/mask'
//安装toast插件
// Vue.use(mask)
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);

//安装toast插件
Vue.use(toast)
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
