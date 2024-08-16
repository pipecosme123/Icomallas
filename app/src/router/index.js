import { createRouter, createWebHistory } from "vue-router";
import links from "../constants/links";

// const isAuthenticated = () => {
//   // Reemplaza esto con la lógica real de autenticación
//   return !!localStorage.getItem('authToken');
// };

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
      component: () => import("@/components/Home.vue"),
      // meta: {
      //   requiresAuth: true
      // }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   // Si la ruta requiere autenticación y el usuario no está autenticado, redirigir a login
//   if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated()) {
//     next('/login');
//   } else {
//     next();
//   }
// });


export default router