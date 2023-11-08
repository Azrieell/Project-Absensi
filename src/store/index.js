import { createStore } from "vuex";
import auth from "./modules/auth/auth.js";
import user from "./modules/admin/user.js";
import karyawan from "./modules/admin/karyawan.js";
import posisi from "./modules/admin/posisi.js";
import presence from "./modules/admin/presence.js";
import information from "./modules/admin/information.js";
import company from "./modules/admin/company.js";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        user,
        karyawan,
        posisi,
        presence,
        information,
        company
    },
});

export default store;