import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isToken:false,
    isPay:false,
    obj:'',
    isSetClass:false,
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
      // console.log(state.isPay)

    },
    SetPay2(state){
      state.isPay=false;
      // console.log(state.isPay)

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
    }
  },
  actions: {
  },
  modules: {
  }
})
