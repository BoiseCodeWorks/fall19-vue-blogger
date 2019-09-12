import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import AuthService from './AuthService'
import axios from 'axios'

Vue.use(Vuex)
let api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/'
})

function getBaseState() {
  return {
    user: {}
  }
}

export default new Vuex.Store({
  state: getBaseState(),
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    resetState(state) {
      state = getBaseState()
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({ name: "home" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds)
        commit('setUser', user)
        router.push({ name: "home" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({ name: "login" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    //#endregion
    //#region --BLOG STUFF --
    async getBlogz({ commit, dispatch }) {
      try {
        let res = await api.get('blogs')
      } catch (error) {

      }
    }



    //#endregion

  }
})
