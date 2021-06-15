import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isToken:false
  },
  mutations: {
    changeToken(state){
      state.isToken=true
    },
    removeToken(state){
      state.isToken=false
    }
  },
  actions: {
  },
  modules: {
  }
})
