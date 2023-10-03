import {
  createWebHistory,
  createRouter,
} from "vue-router";
import AdminLayout from "../layouts/AdminLayout.vue"
import Login from "../views/auth/Login.vue"
import HomeAdmin from "../views/admin/HomeAdmin.vue";
import DataKaryawan from "../views/admin/DataKaryawan.vue";
import TambahKaryawan from "../views/admin/TambahKaryawan.vue";
import DataUser from "../views/admin/DataUser.vue";
import EditDataAdmin from "../views/admin/EditDataAdmin.vue";
import DataJabatan from "../views/admin/DataJabatan.vue";
import DataAbsen from "../views/admin/DataAbsen.vue";
import DataKeterangan from "../views/admin/DataKeterangan.vue";
import Perusahaan from "../views/admin/Perusahaan.vue";
import EditPerusahaan from "../views/admin/EditPerusahaan.vue";

// import HomeKaryawan from "../views/karyawan/HomeKaryawan.vue";
// import AbsenKaryawan from "../views/karyawan/AbsenKaryawan.vue";
// import SakitKaryawan from "../views/karyawan/SakitKaryawan.vue";
// import IzinKaryawan from "../views/karyawan/IzinKaryawan.vue";
// import InformasiKaryawan from "../views/karyawan/InformasiKaryawan.vue";
const routes = [
  {
    path: '/auth/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/admin/home',
    component: AdminLayout,
    children: [
      {
        path: '/admin/home',
        component: HomeAdmin,
        name: 'HomeAdmin',
      },
      {
        path: '/admin/datakaryawan',
        component: DataKaryawan,
        name: 'DataKaryawan',
      },
      {
        path: '/admin/datakaryawan/tambah',
        component: TambahKaryawan,
        name: 'TamabahKaryawan',
      },
      {
        path: '/admin/datauser',
        component: DataUser,
        name: 'DataUser',
      },
      {
        path: '/admin/datauser/edit',
        component: EditDataAdmin,
        name: 'EditDataAdmin',
      },
      {
        path: '/admin/datajabatan',
        name: 'DataJabatan',
        component: DataJabatan,
      },
      {
        path: '/admin/keterangan',
        name: 'DataKeterangan',
        component: DataKeterangan,
      },
      {
        path: '/admin/dataabsen',
        name: 'DataAbsen',
        component: DataAbsen,
      },
      {
        path: '/admin/perusahaan',
        name: 'Perusahaan',
        component: Perusahaan,
      },
      {
        path: '/admin/perusahaan/edit',
        name: 'EditPerusahaan',
        component: EditPerusahaan,
      },
    ]
  },

  

  // {
  //   path: '/homekaryawan',
  //   name: 'HomeKaryawan',
  //   component: HomeKaryawan
  // },
  // {
  //   path: '/absenkaryawan',
  //   name: 'AbsenKaryawan',
  //   component: AbsenKaryawan
  // },
  // {
  //   path: '/sakitkaryawan',
  //   name: 'SakitKaryawan',
  //   component: SakitKaryawan
  // },
  // {
  //   path: '/izinkaryawan',
  //   name: 'IzinKaryawan',
  //   component: IzinKaryawan
  // },
  // {
  //   path: '/informasikaryawan',
  //   name: 'InformasiKaryawan',
  //   component: InformasiKaryawan
  // },



  // {
  //   path: '/homekaryawan',
  //   name: 'HomeKaryawan',
  //   component: HomeKaryawan
  // },
  // {
  //   path: '/absenkaryawan',
  //   name: 'AbsenKaryawan',
  //   component: AbsenKaryawan
  // },
  // {
  //   path: '/sakitkaryawan',
  //   name: 'SakitKaryawan',
  //   component: SakitKaryawan
  // },
  // {
  //   path: '/izinkaryawan',
  //   name: 'IzinKaryawan',
  //   component: IzinKaryawan
  // },
  // {
  //   path: '/informasikaryawan',
  //   name: 'InformasiKaryawan',
  //   component: InformasiKaryawan
  // },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;