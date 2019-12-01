import Vue from 'vue'
import Vuex from 'vuex'
import users from "@/store/users/Users.module";
import globales from "@/store/globales/Globales.module";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    globales
  }
})
