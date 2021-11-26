import App from './App.vue'
import Vue from 'vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import '/src/assets/scss/_resets.scss'
import '/src/assets/scss/custom.scss'



// d'abord bootstrap puis bootstrap-vue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
