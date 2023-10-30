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
import DataJabatan from "../views/admin/DataJabatan.vue"  ;
import DataAbsen from "../views/admin/DataAbsen.vue";
import DataKeterangan from "../views/admin/DataKeterangan.vue";
import Perusahaan from "../views/admin/Perusahaan.vue";
import EditPerusahaan from "../views/admin/EditPerusahaan.vue";
import  store  from "../store";

import HomeKaryawan from "../views/karyawan/HomeKaryawan.vue";
// import AbsenKaryawan from "../views/karyawan/AbsenKaryawan.vue";
// import SakitKaryawan from "../views/karyawan/SakitKaryawan.vue";
// import IzinKaryawan from "../views/karyawan/IzinKaryawan.vue";
// import InformasiKaryawan from "../views/karyawan/InformasiKaryawan.vue";
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { requiresGuest: true },
    beforeEnter: (to, from, next) => {
      // Menampilkan halaman loading selama 1 detik sebelum masuk ke komponen
      setTimeout(() => {
        next()
      }, 1000)
    },
  },

  {
    path: '/admin',
    component: AdminLayout,
    name: 'AdminLayout',
    meta: { requiresLogin: true },
    meta: { requiresAdmin: true },
    beforeEnter: (to, from, next) => {
      // Menampilkan halaman loading selama 1 detik sebelum masuk ke komponen
      setTimeout(() => {
        next()
      }, 1000)
    },
    children: [
      {
        path: '/admin/home',
        component: HomeAdmin,
        name: 'HomeAdmin',
        meta: { requiresLogin: true },
        meta: { requiresAdmin: true },
      },
      {
        path: '/admin/datakaryawan',
        component: DataKaryawan,
        name: 'DataKaryawan',
        meta: { requiresLogin: true },
        meta: { requiresAdmin: true },
      },
      {
        path: '/admin/datakaryawan/tambah',
        component: TambahKaryawan,
        name: 'TamabahKaryawan',
        meta: { requiresLogin: true },
        meta: { requiresAdmin: true },
      },
      {
        path: '/admin/datauser',
        component: DataUser,
        name: 'DataUser',
        meta: { requiresLogin: true },
        meta: { requiresAdmin: true },
      },
      {
        path: '/admin/datauser/edit/:uuid',
        component: EditDataAdmin,
        name: 'EditDataAdmin',
        meta: { requiresLogin: true },
        meta: { requiresAdmin: true },
      },
      {
        path: '/admin/datajabatan',
        name: 'DataJabatan',
        component: DataJabatan,
        meta: { requiresLogin: true },
        meta: { requiresAdmin: true },
      },
      {
        path: '/admin/keterangan',
        name: 'DataKeterangan',
        component: DataKeterangan,
        meta: { requiresLogin: true },
        meta: { requiresAdmin: true },
      },
      {
        path: '/admin/dataabsen',
        name: 'DataAbsen',
        component: DataAbsen,
        meta: { requiresLogin: true },
        meta: { requiresAdmin: true },
      },
      {
        path: '/admin/perusahaan',
        name: 'Perusahaan',
        component: Perusahaan,
        meta: { requiresLogin: true },
        meta: { requiresAdmin: true },
      },
      {
        path: '/admin/perusahaan/edit',
        name: 'EditPerusahaan',
        component: EditPerusahaan,
        meta: { requiresLogin: true },
        meta: { requiresAdmin: true },
      },
    ]
  },

  

  {
    path: '/karyawan/home',
    name: 'HomeKaryawan',
    component: HomeKaryawan,
    meta: { requiresLogin: true },
    meta: { requiresUser: true }
  },
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

router.beforeEach((to, from, next) => {
  const role =  localStorage.getItem('role');
  if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"] && role === 'admin') {
    next('/admin/home');
  } else if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"] && role === 'user') {
    next('/karyawan/home');
  } else {
    next()
  }
}); 
router.beforeEach((to, from, next) => {
  if (to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
    next("/");
  } else {
    next()
  }
});

router.beforeEach((to, from, next) => {
  const role =  localStorage.getItem('role');
  if (to.meta.requiresAdmin && role !== 'admin') {
    next("/");
  } else if (to.meta.requiresUser && role !== 'user') {
    next("/");
  } else {
    next()
  }
});
export default router;