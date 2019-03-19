import Vue from "vue";
const money = value => {
  return value + "过滤器";
};

const filters = { money };

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
