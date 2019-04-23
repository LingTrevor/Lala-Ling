import Vue from "vue";
import Router from "vue-router";
import Todos from "./views/Todos.vue";
// import AddTodo from "./views/AddTodo.vue";
// import EditTodo from "./views/EditTodo.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Todos",
      component: Todos
    },
    {
      path: "/todo/add",
      name: "AddTodo",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "addTodo" */ "./views/AddTodo.vue")
    },
    {
      path: "/todo/edit/:id",
      name: "EditTodo",
      component: () =>
        import(/* webpackChunkName: "editTodo" */ "./views/EditTodo.vue")
    },
    {
      path: "*",
      name: "NotFound",
      component: () =>
        import(/* webpackChunkName: "notFound" */ "./views/NotFound.vue")
    }
  ]
});
