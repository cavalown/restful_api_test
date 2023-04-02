import Vue from "vue";
import VueRouter from "vue-router";
import Todos from "../views/Todos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todos",
    component: Todos,
  },
  {
    path: "/todos-done",
    name: "TodosDone",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TodosDone.vue"),
  },
  {
    path: "/todos-left",
    name: "TodosLeft",
    component: () => import("../views/TodosLeft.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
