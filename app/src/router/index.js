import { createRouter, createWebHistory } from "vue-router";
import links from "../constants/links";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: links.LOGIN,
      component: () => import("@/components/Login.vue")
    },
    {
      path: "/registrar",
      name: links.REGISTRAR,
      component: () => import("@/components/Registrar.vue")
    },
    {
      path: "/home",
      name: links.HOME,
      component: () => import("@/components/Home.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: links.LOGIN }
    }
  ]
});

export default router