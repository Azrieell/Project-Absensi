import axios from "axios";

const perusahaan = {
    namespaced: true,
    state: {
        perusahaan: []
    },
    getters: {
        getPerusahaan: (state) => state.perusahaan
    },
    actions: {
        async fetchPerusahaan({
            commit
        }) {
            try {
                const response = await axios.get('https://api-absensi-indol.vercel.app/api/v1/users');
                commit('SET_PERUSAHAAN', response.data)
                return response.data
            } catch (error) {
                alert(error.message)
                return false
            }
        }
    },
    mutations: {
        SET_PERUSAHAAN(state, perusahaan) {
            state.perusahaan = perusahaan
        }
    }
}

export default perusahaan;