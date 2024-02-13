import { createRouter, createWebHistory } from "vue-router";

import Usuarios from "@/components/Usuarios.vue";
import Productos from "@/components/Productos.vue";


const routes = [
  {
    path: "/usuarios",
    name: "Usuarios",
    component: Usuarios,
  },
  {
    path: "/productos",
    name: "Productos",
    component: Productos,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
