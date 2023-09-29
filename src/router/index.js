import {
  createWebHistory,
  createRouter,
} from "vue-router";
import HomeAdmin from "../views/admin/HomeAdmin.vue";
import DataKaryawan from "../views/admin/DataKaryawan.vue";
import DataUser from "../views/admin/DataUser.vue";
import EditDataAdmin from "../views/admin/EditDataAdmin.vue";
import DataJabatan from "../views/admin/DataJabatan.vue";

const routes = [
  {
    path: '/beranda',
    name: 'HomeAdmin',
    component: HomeAdmin
  },
  {
    path: '/datakaryawan',
    name: 'DataKaryawan',
    component: DataKaryawan
  },
  {
    path: '/datauser',
    name: 'DataUser',
    component: DataUser
  },
  {
    path: '/editadmin',
    name: 'EditDataAdmin',
    component: EditDataAdmin
  },
  {
    path: '/datajabatan',
    name: 'DataJabatan',
    component: DataJabatan,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;