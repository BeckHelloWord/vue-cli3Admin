const layout = () => import(/* webpackChunkName: "Layout" */ "@/views/layout");
const userList = () => import(/* webpackChunkName: "group-foo" */ "@/views/user");

export default {
  path: "/user",
  component: layout,
  children: [
    {
      path: "userList",
      component: userList
    }
  ]
};
