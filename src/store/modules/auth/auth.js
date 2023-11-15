import axios from 'axios';

const auth = {
  namespaced: true,
  state: {
    loginError: null,
    role: localStorage.getItem('role') || '',
    user: []
  },
  getters: {
    isError: state => state.loginError,
    isAuthenticated: state => !!state.role,
    getMe: (state) => state.user
  },
  actions: {
    async login({
      commit
    }, credentials) {
      try {
        const response = await axios.post('https://api-absensi-omega.vercel.app/api/v1/auth/login', credentials);

        const user = response.data.role;
        localStorage.setItem('role', user);
        commit('SET_USER_LOGIN', null);
        commit('SET_ROLE', user)
        return true
      } catch (error) {
        const errorMessage = error.response.data.msg;
        commit("SET_LOGIN_ERROR", errorMessage);
        return false;
      }
    },
    async fetchMe({
      commit
    }) {
      try {
        const response = await axios.get('https://api-absensi-omega.vercel.app/api/v1/auth/me');
        commit('SET_USER', response.data)
        return response.data
      } catch (error) {
        console.log(error.message);
        return false
      }
    },
    async logout({
      commit
    }) {
      try {
        // Lakukan permintaan HTTP DELETE ke API logout
        await axios.delete('https://api-absensi-omega.vercel.app/api/v1/auth/logout');

        // Lakukan commit untuk menghapus data pengguna dari toko atau melakukan penanganan lain yang diperlukan
        const role = localStorage.getItem('role');
        localStorage.removeItem('role');
        commit('SET_ROLE', '');
        //Log Token removed
        console.log("Role Removed:", role);
        window.location.href = '/';
        return true
      } catch (error) {
        console.log(error.message)
        return false
      }
    },

  },
  mutations: {
    SET_ROLE(state, role) {
      state.role = role;
    },
    SET_USER_LOGIN(state, auth) {
      state.user = auth;
    },
    SET_USER(state, auth) {
      state.user = auth;
    },
    SET_LOGIN_ERROR(state, error) {
      state.loginError = error;
    },
  },
};
export default auth;