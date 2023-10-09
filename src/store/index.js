import { createStore } from "vuex";
import auth from "./modules/auth/auth.js";
import user from "./modules/admin/user.js";
const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        user
    },
});

export default store;