import pagination from "./pagination";

const components = { pagination };

export default {
  install: function(Vue) {
    for (let key in components) {
      Vue.component(key, components[key]);
    }
  }
};
