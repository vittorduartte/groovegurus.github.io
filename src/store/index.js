import { createStore } from 'vuex'

const store = createStore({
  state: {
    modal: false
  },
  getters: {
  },
  mutations: {
    handleModal(state) {
      state.modal = !state.modal
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store 
