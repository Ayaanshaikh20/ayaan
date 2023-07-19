import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import routes from "./route.js";
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  render: h => h(App),
  router: routes
}).$mount('#app')

