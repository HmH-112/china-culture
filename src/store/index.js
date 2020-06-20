import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    poemSearch: []
  },
  mutations: {
    setUserName(state, val) {
      state.userName = val;
    },
    getpoemSearch(state, val) {
      state.poemSearch = val;
    }
  },
  actions: {},
  modules: {}
})