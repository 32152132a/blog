import Vue from 'vue'
import Vuex from 'vuex'

import login from './module/login'
import article from './module/article'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {},
  actions: {},
  modules: {
    login,
    article
  }
})