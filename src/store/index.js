import { createStore } from "vuex";
import auth from "./modules/auth/auth.js";
import user from "./modules/admin/user.js";
import karyawan from "./modules/admin/karyawan.js";
import posisi from "./modules/admin/posisi.js";
import presence from "./modules/admin/presence.js";
import information from "./modules/admin/information.js";
import company from "./modules/admin/company.js";
import userkaryawan from "./modules/karyawan/userkaryawan.js";
import informationemployee from "./modules/karyawan/informationemployee.js";
import presensi from "./modules/karyawan/presensi.js"

const store = createStore({
    state: {
        isLoading: false,   
    },
    modules: {
        auth,
        user,
        karyawan,
        posisi,
        company,
        presence,
        information,
        userkaryawan,
        informationemployee,
        presensi
    },
});

export default store;