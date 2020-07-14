import Vue from 'vue'
import Vuex from 'vuex'

import login from './module/login'
import article from './module/article'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openMenu: false
  },
  mutations: {

    setMenu(state, data) {
      state.openMenu = data
    },
  },
  getters: {
    openMenu(state) {
      return state.openMenu
    }
  },
  actions: {},
  modules: {
    login,
    article
  }
})