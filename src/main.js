import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './assets/fonts/iconfont.css'
import './assets/fonts/iconfont.js'

import VueWechatTitle from "vue-wechat-title";
Vue.use(VueWechatTitle);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
