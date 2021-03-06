import Vue from "vue";
import Axios from "axios";
import App from "@/App.vue";
import Vuesax from "vuesax";

import 'vuesax/dist/vuesax.css'; //Vuesax styles
import 'material-icons/iconfont/material-icons.css';
import router from './router';
import './assets/css/main.css'
import VueApexCharts from 'vue-apexcharts'


Vue.use(
  Vuesax,
  //option here
);
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

Vue.config.productionTip = false
Vue.prototype.$http = Axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
