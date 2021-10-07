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
const NameRegistered=()=>import('@/views/other/registered/NameRegistered')
const User=()=>import('@/views/other/user/User')
const Article=()=>import('@/views/other/user/child/tabcontrolChild/Article')
const Like=()=>import('@/views/other/user/child/tabcontrolChild/Like')
const Buddy=()=>import('@/views/other/user/child/tabcontrolChild/Buddy')
const Vip=()=>import('@/views/other/user/child/tabcontrolChild/Vip')
const Order=()=>import('@/views/other/user/child/tabcontrolChild/Order')
const waitingForPay=()=>import('@/views/other/user/child/tabcontrolChild/child/waitingForPay')
const WaitingForReceipt=()=>import('@/views/other/user/child/tabcontrolChild/child/WaitingForReceipt')
const WaitingForComment =()=>import('@/views/other/user/child/tabcontrolChild/child/WaitingForComment')
const WaitForDelivery=()=>import('@/views/other/user/child/tabcontrolChild/child/WaitForDelivery')
const AllOrders=()=>import('@/views/other/user/child/tabcontrolChild/child/AllOrders')

const Reward=()=>import('@/views/other/reward/Reward')
const myPay=()=>import('@/views/other/myPay/myPay')
const PostAnArticle=()=>import('@/views/other/Post_an_article/PostAnArticle')
const AskQuestions=()=>import('@/views/other/Ask_questions/AskQuestions')
const QuestionDetails=()=>import('@/views/other/Question_details/QuestionDetails')
const ControlCenter=()=>import('@/views/other/controlCenter/ControlCenter')
const RetrievePassword=()=>import('@/views/other/RetrievePassword/RetrievePassword')
const Search=()=>import('@/views/other/search/Search')
const TeacherDetail=()=>import('@/views/other/teacher_detail/TeacherDetail')
const PurchaseService=()=>import('@/views/other/teacher_detail/child/PurchaseService')

const OrderComment=()=>import('@/views/other/OrderComment/OrderComment')

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
      title:"心理栈-邮箱注册"
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
        path: '',
        redirect:'/user/order'
      },
     {
        path:"order",
        component:Order,
        children:[
          {
            path: '',
            redirect:'/user/order/WaitingForReceipt'
          },{
            path:"WaitingForReceipt",
            component:WaitingForReceipt
          },{
            path:"WaitForDelivery",
            component:WaitForDelivery
          },{
            path:"WaitingForComment",
            component:WaitingForComment
          },{
            path:"AllOrders",
            component:AllOrders
          },{
            path:"waitingForPay",
            component:waitingForPay
          }

        ]
      } ,
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
  },
  {
    path: '/reward',
    component:Reward,
    meta:{
      title:"心理栈-打赏中心"
    }
  },

  {
    path: '/pay/:other',
    component: myPay,
    meta:{
      title:"心理栈-支付中心"
    }
  },
  {
    path: '/PostAnArticle',
    component:PostAnArticle,
    meta:{
      title:"心理栈-发布文章"
    }
  },{
    path: '/AskQuestions',
    component:AskQuestions,
    meta:{
      title:"心理栈-在线提问"
    }
  },{
    path: '/QuestionDetails',
    component:QuestionDetails,
    meta:{
      title:"心理栈-提问详情"
    }
  },{
    path: '/ControlCenter',
    component:ControlCenter,
    meta:{
      title:"心理栈-管理中心"
    }
  },{
    path: '/RetrievePassword',
    component:RetrievePassword,
    meta:{
      title:"心理栈-找回密码"
    }
  },{
    path: '/NameRegistered',
    component:NameRegistered,
    meta:{
      title:"心理栈-用户名注册"
    }
  },
  {
    path: '/Search',
    component:Search,
    meta:{
      title:"心理栈-搜索中心"
    }
  }, {
        path: '/TeacherDetail',
        component: TeacherDetail,
        meta: {
            title: "心理栈-导师详情"
        }
    },
    {
        path: '/PurchaseService',
        component:PurchaseService,
        meta:{
            title:"心理栈-购买服务"
        }

    },
    {
    path: '/OrderComment',
    component:OrderComment,
    meta:{
      title:"心理栈-评价中心"
    }

   },



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
