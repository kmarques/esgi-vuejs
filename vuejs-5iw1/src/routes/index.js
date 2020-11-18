import Vue from "vue";
import VueRouter from "vue-router";
import todoRouter from "./todoRouter";
import Hello from "../components/views/Hello.vue";
import Page404 from "../components/views/Page404.vue";
import notificationCenter from "../lib/NotifCenter";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Hello,
  },
  ...todoRouter,
  {
    path: "/*",
    component: Page404,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = {
    isLoggued: false,
  };
  if (to.matched.some((route) => route.meta.private) && !auth.isLoggued) {
    next({
      path: "/",
      params: {
        id: "redirect",
      },
    });
    notificationCenter.notify({
      msg: "Vous devez être loggué",
      severity: "error",
    });
  }
  next();
});

export default router;
