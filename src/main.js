import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./vuex/store";
import ElementUI from "element-ui";
import commonComponents from "@/components";
import "@/assets/style/reset.css";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(commonComponents);
Vue.use(ElementUI, { size: "small", zIndex: 3000 });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
