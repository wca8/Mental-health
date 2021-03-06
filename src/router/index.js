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
      title:"?????????-??????"
    }
  },
  {
    path: '/read',
    component:Read,
    meta:{
      title:"?????????-??????"
    }
  },
  {
    path: '/questions',
    component:Questions,
    meta:{
      title:"?????????-??????"
    }
  },
  {
    path: '/test',
    component:Test,
    meta:{
      title:"?????????-??????"
    }
  },
  {
    path: '/course',
    component:Course,
    meta:{
      title:"?????????-??????"
    }
  },
  {
    path: '/advisory',
    component:Advisory,
    meta:{
      title:"?????????-????????????"
    }
  },
  {
    path: '/talk',
    component:Talk,
    meta:{
      title:"?????????-??????"
    }
  },
  {
    path: '/content',
    component:Content,
    meta:{
      title:"?????????-????????????"
    }
  },
  {
    path: '/login',
    component:Login,
    meta:{
      title:"?????????-??????"
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
      title:"?????????-????????????"
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
          message: '?????????????????????????????????',
          type: 'warning'
        });
        next('/login')
      }


    },
    meta:{
      title:"?????????-????????????"
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
      title:"?????????-????????????"
    }
  },

  {
    path: '/pay/:other',
    component: myPay,
    meta:{
      title:"?????????-????????????"
    }
  },
  {
    path: '/PostAnArticle',
    component:PostAnArticle,
    meta:{
      title:"?????????-????????????"
    }
  },{
    path: '/AskQuestions',
    component:AskQuestions,
    meta:{
      title:"?????????-????????????"
    }
  },{
    path: '/QuestionDetails',
    component:QuestionDetails,
    meta:{
      title:"?????????-????????????"
    }
  },{
    path: '/ControlCenter',
    component:ControlCenter,
    meta:{
      title:"?????????-????????????"
    }
  },{
    path: '/RetrievePassword',
    component:RetrievePassword,
    meta:{
      title:"?????????-????????????"
    }
  },{
    path: '/NameRegistered',
    component:NameRegistered,
    meta:{
      title:"?????????-???????????????"
    }
  },
  {
    path: '/Search',
    component:Search,
    meta:{
      title:"?????????-????????????"
    }
  }, {
        path: '/TeacherDetail',
        component: TeacherDetail,
        meta: {
            title: "?????????-????????????"
        }
    },
    {
        path: '/PurchaseService',
        component:PurchaseService,
        meta:{
            title:"?????????-????????????"
        }

    },
    {
    path: '/OrderComment',
    component:OrderComment,
    meta:{
      title:"?????????-????????????"
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
