import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {EventBus} from "@/utils/eventBus";
import i18n from './lang/i18n'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,

  created: function ():void {
    EventBus.$on('toggleDarkMode',()=>{
      this.$vuetify.theme.dark = this.$store.getters.darkMode
    });
    EventBus.$on('switchLanguage', ()=>{
      const newLang = this.$store.getters.language
      this.$vuetify.lang.current = newLang
      this.$i18n.locale=newLang

    })
  },

  i18n,
  render: h => h(App)
}).$mount('#app')
