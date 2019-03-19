import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./vuex/store";
import ElementUI from "element-ui";
import commonComponents from "@/components";
import directives from "@/directive";
import "@/assets/style/reset.css";
import "@/assets/icon/icon.css";
import "element-ui/lib/theme-chalk/index.css";
import "@/mock";
import "@/filtres"; //过滤器
Vue.use(commonComponents); //组件
Vue.use(directives); //自定义指令
Vue.use(ElementUI, { size: "small", zIndex: 3000 });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
