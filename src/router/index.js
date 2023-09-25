import { createWebHistory, createRouter } from "vue-router";
import HomeAdmin from "../views/HomeAdmin.vue";
import HomeKaryawan from "../views/HomeKaryawan.vue";

const routes = [
   {
    path: '/homeadmin',
    name: 'HomeAdmin',
    component: HomeAdmin
   },
   {
    path: '/homekaryawan',
    name: 'HomeKaryawan',
    component: HomeKaryawan
   }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;