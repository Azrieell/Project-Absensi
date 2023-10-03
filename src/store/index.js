import { createStore } from "vuex";
import auth from "./modules/auth.js";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth
    },
});

export default store;