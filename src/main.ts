import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from '@/plugins/vuetify'

import { i18n } from '@/plugins/i18n'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
