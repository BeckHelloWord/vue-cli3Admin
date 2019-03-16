import pagination from "./pagination";
import filtration from "./filtration";

const components = { pagination, filtration };

export default {
  install: function(Vue) {
    for (let key in components) {
      Vue.component(key, components[key]);
    }
  }
};
