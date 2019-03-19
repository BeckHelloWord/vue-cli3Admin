const status = Vue => {
  Vue.directive("status", {
    inserted: function(el, binding) {
      let { value } = binding;
      console.log(value);
    }
  });
};

export default status;
