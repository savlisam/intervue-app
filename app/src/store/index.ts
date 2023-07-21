import Vue from 'vue'
import Vuex from 'vuex'
import {EventBus} from "@/utils/eventBus";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: false,
    language: "cs"
  },
  getters: {
    darkMode(state){
      return state.darkMode
    },
    language(state){
      return state.language
    }
  },
  mutations: {
    toggleDarkMode(state){
      state.darkMode = !state.darkMode
      EventBus.$emit("toggleDarkMode")
    },
    changeLanguage(state,newLanguage){
      state.language=newLanguage
      EventBus.$emit("switchLanguage")
    }
  },
  actions: {
  },
  modules: {
  }
})
