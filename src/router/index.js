import {
  createWebHistory,
  createRouter,
} from "vue-router";
import HomeAdmin from "../views/admin/HomeAdmin.vue";
import DataKaryawan from "../views/admin/DataKaryawan.vue";
import DataUser from "../views/admin/DataUser.vue"
import EditDataAdmin from "../views/admin/EditDataAdmin.vue"

import HomeKaryawan from "../views/karyawan/HomeKaryawan.vue";
import AbsenKaryawan from "../views/karyawan/AbsenKaryawan.vue";
import SakitKaryawan from "../views/karyawan/SakitKaryawan.vue";
import IzinKaryawan from "../views/karyawan/IzinKaryawan.vue";
import InformasiKaryawan from "../views/karyawan/InformasiKaryawan.vue";
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
    path: '/homekaryawan',
    name: 'HomeKaryawan',
    component: HomeKaryawan
  },
  {
    path: '/absenkaryawan',
    name: 'AbsenKaryawan',
    component: AbsenKaryawan
  },
  {
    path: '/sakitkaryawan',
    name: 'SakitKaryawan',
    component: SakitKaryawan
  },
  {
    path: '/izinkaryawan',
    name: 'IzinKaryawan',
    component: IzinKaryawan
  },
  {
    path: '/informasikaryawan',
    name: 'InformasiKaryawan',
    component: InformasiKaryawan
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;