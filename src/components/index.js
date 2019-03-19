import pagination from "./pagination";
import filtration from "./filtration";

const components = { pagination, filtration };

export default {
  install: function(Vue) {
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key]);
    });
  }
};
