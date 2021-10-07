
const readModule = {
    namespaced: true,
    state() {
        return {
          currentIndex:0,
        }
    },
    getters: {

    },
    mutations: {
        SetCurrentIndex(state, payload){
            state.currentIndex=payload.index;
        }
    },
    actions: {

    }
}

export default readModule
