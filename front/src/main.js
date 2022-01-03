import App from './App.vue'
import Vue from 'vue'
import router from './router'

import Vodal from 'vodal'

import { BootstrapVue } from 'bootstrap-vue'
import '/src/assets/scss/_resets.scss'
import '@/assets/scss/custom.scss'

import Minion from './components/Minion.vue'

// d'abord bootstrap puis bootstrap-vue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'
// include animation styles
import 'vodal/common.css'
import 'vodal/rotate.css'

import vuetify from './plugins/vuetify'

Vue.component('Minion', Minion)
Vue.component(Vodal.name, Vodal)

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
