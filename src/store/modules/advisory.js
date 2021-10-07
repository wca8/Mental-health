import {GetTokenStatus} from "../../network/user";
import {GetOrderDetail, GetOrderList, GetOrderAllList} from "../../network/order";

const advisoryModule = {
    namespaced: true,
    state() {
        return {
            centerTop:null,
            OrderList_dzf:[],
            OrderList_dzx:[],
            OrderList_dsh:[],
            OrderList_dpl:[],
            OrderList_all:{
                page:0,
                list:[],
            },
        }
    },
    getters: {

    },
    mutations: {
        SetCenterTop(state,payload){
           state.centerTop=payload.centerTop;

        },

    },
    actions: {
        //待咨询
        A_GetOrderDetail_dzf(context, payload){
            GetOrderDetail(payload).then(res=>{
                context.state.OrderList_dzf.push(res.data)

            })
        },
        //待咨询
        A_GetOrderDetail_dzx(context, payload){
            GetOrderDetail(payload).then(res=>{
               context.state.OrderList_dzx.push(res.data)

            })
        },
        //待收货
        A_GetOrderDetail_dsh(context, payload){
            GetOrderDetail(payload).then(res=>{
                context.state.OrderList_dsh.push(res.data)
            })
        },
        //待评论
        A_GetOrderDetail_dpl(context, payload){
            GetOrderDetail(payload).then(res=>{
                context.state.OrderList_dpl.push(res.data)

            })
        },

        A_SetOrderList(context, payload){
            //先清除之前的数据
            switch (payload.num){
                case 0:context.state.OrderList_dzf=[];
                    break;
                case 1:context.state.OrderList_dzx=[];
                    break;
                case 2:context.state.OrderList_dsh=[];
                    break;
                case 3:context.state.OrderList_dpl=[];
                    break;
            }

            let token=localStorage.getItem('elementToken');
            GetTokenStatus(token).then(res=>{
                if(res.msg=='当前登录token无效，请重新登录'){
                    let routeData = this.$router.resolve({ path: '/login', query: {  } });
                    window.open(routeData.href, '_blank');
                }else{
                    GetOrderList(token).then(res=>{
                        this.orderList=res.data.orderList;
                        let num=payload.num;
                        switch (num){
                            case 0:const waitingForPay=this.orderList.filter((item)=>{
                                return item.status==0
                                 })
                                waitingForPay.forEach((item,index)=>{
                                    context.dispatch('A_GetOrderDetail_dzf',{id:item.id,token})
                                });
                                break;
                            case 1:const toBeDelivered=this.orderList.filter((item)=>{
                                return item.status==1
                                 })
                                toBeDelivered.forEach((item,index)=>{
                                    context.dispatch('A_GetOrderDetail_dzx',{id:item.id,token})
                                });
                                break;
                            case 2:const WaitingForReceipt=this.orderList.filter((item)=>{
                                return item.status==2
                                 })
                                WaitingForReceipt.forEach((item,index)=>{
                                    context.dispatch('A_GetOrderDetail_dsh',{id:item.id,token})
                                });
                                break;
                            case 3:const WaitingForComment=this.orderList.filter((item)=>{
                                return item.status==3
                                 })
                                WaitingForComment.forEach((item,index)=>{
                                    context.dispatch('A_GetOrderDetail_dpl',{id:item.id,token})
                                });
                                break;

                        }
                    })
                }
            })
        },



        SetOrderList_all(context, payload){
            let token=localStorage.getItem('elementToken');
            GetTokenStatus(token).then(res=>{
                if(res.msg=='当前登录token无效，请重新登录'){
                    let routeData = this.$router.resolve({ path: '/login', query: {  } });
                    window.open(routeData.href, '_blank');
                }else{
                    const page=context.state.OrderList_all.page+1;
                    GetOrderAllList(token,page).then(res=>{
                        let orderList=res.data.orderList;
                        orderList.forEach((item,index)=>{
                            GetOrderDetail({id:item.id,token}).then(res=>{
                                context.state.OrderList_all.list.push(res.data)
                            })
                        })
                        context.state.OrderList_all.page++;

                    })
                }
            })
        }
    }
}

export default advisoryModule
