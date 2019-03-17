import api from "./index";

export const userList = params => {
  return api.post("/userList", {
    params
  });
};
