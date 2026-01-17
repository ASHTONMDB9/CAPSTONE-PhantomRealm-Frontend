import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Store",
    name: "StoreView",

    component: () => import("../views/StoreView.vue"),
  },
  {
    path: "/Cart",
    name: "Cart",

    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/Checkout",
    name: "Checkout",

    component: () => import("../views/Checkout.vue"),
  },
  {
    path: "/Contact",
    name: "Contact",

    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/SignUp",
    name: "SignUp",

    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/Login",
    name: "Login",

    component: () => import("../views/Login.vue"),
  },
  {
    name: "ForgotPassword",
    path: "/forgot-password",

    component: () => import("../views/ForgotPassword.vue"),
  },
  {
    name: "ResetPassword",
    path: "/reset-password",

    component: () => import("../views/ResetPassword.vue"),
  },
  {
    path: "/Admin",
    name: "Admin",

    component: () => import("../views/Admin.vue"),
  },
  {
    path: "/Download",
    name: "Download",

    component: () => import("../views/Download.vue"),
  },
  {
    path: "/products/:id",
    name: "ProductView",

    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/products/update_product/:id",
    name: "EditProduct",
    component: () => import("../views/ProductView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
