const layout = () => import(/* webpackChunkName: "Layout" */ "@/views/layout");
const index = () => import(/* webpackChunkName: "group-foo" */ "@/views/index");

export default {
  path: "/",
  redirect: { path: "index" },
  component: layout,
  children: [
    {
      path: "index",
      component: index,
    }
  ]
};
