import Vue from 'vue'
import Vuex from 'vuex'
import advisoryModule from "./modules/advisory";
import read from "./modules/read";
import questions from "./modules/questions";
import user from "./modules/user";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isToken:false,
    isPay:false,
    obj:'',
    isSetClass:false,
    userFlag:false,
  },
  mutations: {
    changeToken(state){
      state.isToken=true
    },
    removeToken(state){
      state.isToken=false
    },
    SetPay(state){
      state.isPay=true;
    },
    SetPay2(state){
      state.isPay=false;
    },
    SetPayInfo(state,payload){
      state.obj='';
      state.obj = payload;
    },
    setClass(state){
      state.isSetClass=true
    },
    removeClass(state){
      state.isSetClass=false
    },
    setUserFlag(state){
      state.userFlag=!state.userFlag
    }

  },
  actions: {
  },
  modules: {
    advisoryModule,
    read,
    questions,
    user,
  }
})
