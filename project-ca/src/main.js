import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import routes from "./route.js";
import Bootstrap from 'bootstrap-vue'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Bootstrap)
new Vue({
  render: h => h(App),
  router: routes
}).$mount('#app')

