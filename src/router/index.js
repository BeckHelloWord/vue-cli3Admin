import Vue from "vue";
import Router from "vue-router";
import home from "./home.js";
import user from "./user.js";

Vue.use(Router);

const routes = [home, user];

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: routes
});
