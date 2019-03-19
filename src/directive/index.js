import status from "./status";

const directives = { status };

export default {
  install: Vue => {
    Object.keys(directives).forEach(key => {
      directives[key](Vue);
    });
  }
};
