
const userModule = {
    namespaced: true,
    state() {
        return {
          userInfoChange:true,
        }
    },
    getters: {

    },
    mutations: {
      SetUserInfoChange(state, payload){
          state.userInfoChange=!state.userInfoChange
      }
    },
    actions: {

    }
}

export default userModule
