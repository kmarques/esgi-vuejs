import Vue from "vue";
import VueRouter from "vue-router";
import TodoBoard from "../components/TodoBoard.vue";
import TodoBoardList from "../components/TodoBoardList.vue";
import TodoBoardNew from "../components/TodoBoardNew.vue";
import TodoBoardHeader from "../components/TodoBoardHeader.vue";
import Home from "../views/Home.vue";
import Page404 from "../views/Page404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/todos/new",
    name: "TodoBoardNew",
    components: {
      default: TodoBoardNew,
      header: TodoBoardHeader,
    },
  },
  {
    path: "/todos",
    name: "TodoBoard",
    meta: { private: false },
    components: {
      default: TodoBoard,
      header: TodoBoardHeader,
    },
    children: [
      {
        path: "new",
        component: TodoBoardNew,
      },
      {
        path: ":id",
        name: "TodoBoardList",
        component: TodoBoardList,
        props: true,
        children: [],
      },
    ],
    props: {
      default: {
        msg: "coucou",
      },
      header: {
        msg: "je suis un header",
      },
    },
  },

  {
    path: "*",
    name: "Page404",
    component: Page404,
    props: (route) => ({
      msg: "coucou",
      restUrl: route.params.pathMatch,
    }),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("beforeEach", to, from);
  const auth = { isLoggued: false };
  if (to.matched.some((route) => route.meta.private) && !auth.isLoggued) {
    next({
      path: "/",
    });
  }
  next();
});

export default router;
