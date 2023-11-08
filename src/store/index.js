import { createStore } from "vuex";
import auth from "./modules/auth/auth.js";
import user from "./modules/admin/user.js";
import karyawan from "./modules/admin/karyawan.js";
import posisi from "./modules/admin/posisi.js";
import perusahaan from "./modules/admin/perusahaan.js";
import userkaryawan from "./modules/karyawan/userkaryawan.js";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        user,
        karyawan,
        posisi,
        perusahaan,
        userkaryawan
    },
});

export default store;