import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Mint from 'mint-ui';
Vue.use(Mint);

import store from "./store";

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
