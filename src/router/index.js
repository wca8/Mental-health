import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import ('@/views/home/Home')
const Read=()=>import('@/views/read/Read')
const Questions=()=>import('@/views/questions/Questions')
const Test=()=>import('@/views/test/Test')
const Course=()=>import('@/views/course/Course')
const Advisory=()=>import('@/views/advisory/Advisory')
const Talk=()=>import('@/views/talk/Talk')
const Content=()=>import('@/views/other/DetailsPage/Content')
const Login=()=>import('@/views/other/login/Login')
const Mailbox=()=>import('@/views/other/login/child/Mailbox')
const Username=()=>import('@/views/other/login/child/Username')
const Registered=()=>import('@/views/other/registered/Registered')
const User=()=>import('@/views/other/user/User')
const Article=()=>import('@/views/other/user/child/tabcontrolChild/Article')
const Like=()=>import('@/views/other/user/child/tabcontrolChild/Like')
const Buddy=()=>import('@/views/other/user/child/tabcontrolChild/Buddy')
const Vip=()=>import('@/views/other/user/child/tabcontrolChild/Vip')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },{
    path: '/home',
    component:Home,
    meta:{
      title:"心理栈-首页"
    }
  },
  {
    path: '/read',
    component:Read,
    meta:{
      title:"心理栈-阅读"
    }
  },
  {
    path: '/questions',
    component:Questions,
    meta:{
      title:"心理栈-问答"
    }
  },
  {
    path: '/test',
    component:Test,
    meta:{
      title:"心理栈-测试"
    }
  },
  {
    path: '/course',
    component:Course,
    meta:{
      title:"心理栈-课程"
    }
  },
  {
    path: '/advisory',
    component:Advisory,
    meta:{
      title:"心理栈-心理咨询"
    }
  },
  {
    path: '/talk',
    component:Talk,
    meta:{
      title:"心理栈-倾诉"
    }
  },
  {
    path: '/content',
    component:Content,
    meta:{
      title:"心理栈-文章详情"
    }
  },
  {
    path: '/login',
    component:Login,
    meta:{
      title:"心理栈-登录"
    },
    children:[
      {
        path: '/',
        redirect:'mailbox'
      },
      {
        path:"mailbox",
        component:Mailbox
      },{
        path:"username",
        component:Username
      }
    ]
  },
  {
    path: '/registered',
    component:Registered,
    meta:{
      title:"心理栈-注册"
    }
  },
  {
    path: '/user',
    component:User,
    beforeEnter:(to,from,next)=>{
      if(localStorage.elementToken){
        next()
      }else{
        Vue.prototype.$message({
          showClose: true,
          message: '您还未登录，请先登录！',
          type: 'warning'
        });
        next('/login')
      }


    },
    meta:{
      title:"心理栈-个人中心"
    },
    children:[
      {
        path: '/',
        redirect:'article'
      },
      {
        path:"article",
        component:Article
      },{
        path:"like",
        component:Like
      },{
        path:"vip",
        component:Vip
      },{
        path:"buddy",
        component:Buddy
      }
    ]
  }

]

const router = new VueRouter({
  routes,
  // mode:"history",
})

router.beforeEach((to,from,next)=>{
  document.title=to.matched[0].meta.title;
  next();
})

export default router
