const status = Vue => {
  Vue.directive("status", {
    inserted: function(el, { value }) {
      console.log(value);
    }
  });
};

export default status;
