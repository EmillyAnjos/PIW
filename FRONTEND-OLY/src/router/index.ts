import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  
  {
    path: "/",
    component: () => import("../layouts/default.vue"),
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("../pages/Login.vue"),
      },
      {
        path: "/home",
        name: "Home",
        component: () => import("../pages/Home.vue"),
      },

      {
        path: "/perfil",
        name: "Perfil",
        component: () => import("../pages/Perfil.vue"),
      },

      {
        path: "/carrinho",
        name: "Carrinho",
        component: () => import("../pages/Cart.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
})

export default router