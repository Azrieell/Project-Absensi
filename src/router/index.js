import { createWebHistory, createRouter } from "vue-router";
import AdminLayout from "../layouts/AdminLayout.vue";
import Login from "../views/auth/Login.vue";
import HomeAdmin from "../views/admin/HomeAdmin.vue";
import DataKaryawan from "../views/admin/DataKaryawan.vue";
import SingleDataKaryawan from "../views/admin/SingleDataKaryawan.vue";
import EditDataKaryawan from "../views/admin/EditDataKaryawan.vue";
import TambahKaryawan from "../views/admin/TambahKaryawan.vue";
import DataUser from "../views/admin/DataUser.vue";
import EditDataAdmin from "../views/admin/EditDataAdmin.vue";
import DataJabatan from "../views/admin/DataJabatan.vue";
import DataAbsen from "../views/admin/DataAbsen.vue";
import DataKeterangan from "../views/admin/DataKeterangan.vue";
import Perusahaan from "../views/admin/Perusahaan.vue";
import EditPerusahaan from "../views/admin/EditPerusahaan.vue";
import store from "../store";

import KaryawanLayout from "../layouts/KaryawanLayout.vue";
import HomeKaryawan from "../views/karyawan/HomeKaryawan.vue";
import AbsenKaryawan from "../views/karyawan/AbsenKaryawan.vue";
import AbsenPulang from "../views/karyawan/AbsenPulang.vue";
import SakitKaryawan from "../views/karyawan/SakitKaryawan.vue";
import IzinKaryawan from "../views/karyawan/IzinKaryawan.vue";
import InformasiKaryawan from "../views/karyawan/InformasiKaryawan.vue";
import profilekaryawan from "../views/karyawan/ProfileKaryawan.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      title: "login",
    },
    beforeEnter: (to, from, next) => {
      const isAuthenticated = store.getters["auth/isAuthenticated"];
      if (isAuthenticated) {
        // Jika pengguna sudah login, arahkan ke halaman yang sesuai dengan rolenya
        const role = localStorage.getItem("role");
        if (role === "admin") {
          next("/admin/home");
        } else if (role === "user") {
          next("/karyawan/home");
        } else {
          next("/");
        }
      } else {
        // Menampilkan halaman loading selama 1 detik sebelum masuk ke komponen
        setTimeout(() => {
          next();
        }, 1000);
      }
    },
  },

  {
    path: "/admin",
    component: AdminLayout,
    name: "AdminLayout",
    meta: {
      title: "Admin Dashboard",
      requiresLogin: true,
      requiresAdmin: true,
    },
    children: [
      {
        path: "/admin/home",
        component: HomeAdmin,
        name: "HomeAdmin",
        meta: {
          title: "Admin Dashboard",
        },
      },
      {
        path: "/admin/datakaryawan",
        component: DataKaryawan,
        name: "DataKaryawan",
        meta: {
          title: "Data Karyawan",
        },
      },
      {
        path: "/admin/karyawan/:uuid",
        component: SingleDataKaryawan,
        name: "SingleDataKaryawan",
        meta: {
          title: "Detail Data Karyawan",
        },
      },
      {
        path: "/admin/EditDataKaryawan/:uuid",
        component: EditDataKaryawan,
        name: "Edit Data Karyawan",
        meta: {
          title: "Edit Data Karyawan",
        },
      },
      {
        path: "/admin/datakaryawan/tambah",
        component: TambahKaryawan,
        name: "TamabahKaryawan",
        meta: {
          title: "Tambah Data Karyawan",
        },
      },
      {
        path: "/admin/datauser",
        component: DataUser,
        name: "DataUser",
        meta: {
          title: "Data User",
        },
      },
      {
        path: "/admin/datauser/edit/:uuid",
        component: EditDataAdmin,
        name: "EditDataAdmin",
        meta: {
          title: "Edit User",
        },
      },
      {
        path: "/admin/datajabatan",
        name: "DataJabatan",
        component: DataJabatan,
        meta: {
          title: "Data Jabatan",
        },
      },
      {
        path: "/admin/keterangan",
        name: "DataKeterangan",
        component: DataKeterangan,
        meta: {
          title: "Data Keterangan Karyawan",
        },
      },
      {
        path: "/admin/dataabsen",
        name: "DataAbsen",
        component: DataAbsen,
        meta: {
          title: "Data Absensi Karyawan",
        },
      },
      {
        path: "/admin/perusahaan",
        name: "Perusahaan",
        component: Perusahaan,
        meta: {
          title: "Data Perusahaan",
        },
      },
      {
        path: "/admin/perusahaan/edit",
        name: "EditPerusahaan",
        component: EditPerusahaan,
        meta: {
          title: "Edit Data Perusahaan",
        },
      },
    ],
  },
  //start page karyawan
  {
    path: "/karyawan/home",
    name: "KaryawanLayout",
    component: KaryawanLayout,
    meta: {
      requiresLogin: true,
      requiresUser: true,
    },
    beforeEnter: (to, from, next) => {
      // Menampilkan halaman loading selama 1 detik sebelum masuk ke komponen
      setTimeout(() => {
        next();
      }, 1000);
    },
    children: [
      {
        path: "/karyawan/home",
        name: "HomeKaryawan",
        component: HomeKaryawan,
      },
      {
        path: "/karyawan/absenkaryawan",
        name: "AbsenKaryawan",
        component: AbsenKaryawan,
      },
      {
        path: "/karyawan/absenpulang",
        name: "AbsenPulang",
        component: AbsenPulang,
      },
      {
        path: "/karyawan/sakitkaryawan",
        name: "SakitKaryawan",
        component: SakitKaryawan,
      },
      {
        path: "/karyawan/izinkaryawan",
        name: "IzinKaryawan",
        component: IzinKaryawan,
      },
      {
        path: "/karyawan/informasikaryawan",
        name: "InformasiKaryawan",
        component: InformasiKaryawan,
      },
      {
        path: "/karyawan/profile",
        name: "profilekaryawan",
        component: profilekaryawan,
      },
    ],
  },
  // end page karyawan
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = store.getters["auth/isAuthenticated"];

  // Pastikan status otentikasi dan role diperbarui
  if (!isAuthenticated) {
    await store.dispatch("auth/checkTokenExpiration");
  }

  const role = localStorage.getItem("role");

  if (to.meta.requiresLogin && !isAuthenticated) {
    // Jika halaman membutuhkan login dan pengguna belum login, arahkan ke halaman login
    next("/");
  } else if (to.meta.requiresGuest && isAuthenticated) {
    // Jika halaman membutuhkan tamu dan pengguna sudah login, arahkan sesuai rolenya
    if (role === "admin") {
      next("/admin/home");
    } else if (role === "user") {
      next("/karyawan/home");
    } else {
      next("/");
    }
  } else if (to.meta.requiresAdmin && role !== "admin") {
    // Jika halaman membutuhkan admin dan pengguna bukan admin
    next("/");
  } else if (to.meta.requiresUser && role !== "user") {
    // Jika halaman membutuhkan user dan pengguna bukan user
    next("/");
  } else {
    next(); // Melanjutkan ke halaman yang diminta
  }
});

export default router;
