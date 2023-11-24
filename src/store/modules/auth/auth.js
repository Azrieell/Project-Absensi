import axios from 'axios';

const auth = {
  namespaced: true,
  state: {
    loginError: null,
    role: localStorage.getItem('role') || '',
    user: [],
    tokenExpiration: localStorage.getItem('tokenExpiration') || null,
  },
  getters: {
    isError: state => state.loginError,
    isAuthenticated: state => !!state.role,
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('/auth/login', credentials);

        const user = response.data.role;
        localStorage.setItem('role', user);

        // Set waktu kedaluwarsa token (12 jam dari sekarang)
        const expirationTime = new Date().getTime() + 6 * 60 * 60 * 1000;
        localStorage.setItem('tokenExpiration', expirationTime);
        commit('SET_USER_LOGIN', null);
        commit('SET_ROLE', user);

        // Set timeout untuk logout setelah 12 jam
        setTimeout(() => {
          commit('SET_ROLE', '');
          localStorage.removeItem('role');
          localStorage.removeItem('tokenExpiration');
          window.location.href = '/';
        }, 6 * 60 * 60 * 1000);

        return true;
      } catch (error) {
        const errorMessage = error.response.data.msg;
        commit("SET_LOGIN_ERROR", errorMessage);
        return false;
      }
    },
    async getMe({
      commit
    }) {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/auth/me');
        commit('SET_USER', response)
      } catch (error) {
        console.log(error.message);
      }
    },
    async logout({ commit }) {
      try {
        // Lakukan permintaan HTTP DELETE ke API logout
        await axios.delete('/auth/logout');

        // Lakukan commit untuk menghapus data pengguna dari toko atau melakukan penanganan lain yang diperlukan
        const role = localStorage.getItem('role');
        localStorage.removeItem('role');
        localStorage.removeItem('tokenExpiration');
        commit('SET_ROLE', '');
        // Log Token removed
        console.log("Role Removed:", role);
        window.location.href = '/';
        return true;
      } catch (error) {
        console.log(error.message);
        return false;
      }
    },
    checkTokenExpiration({ commit }) {
      // Periksa apakah token telah kedaluwarsa
      const currentTime = new Date().getTime();
      const tokenExpiration = localStorage.getItem('tokenExpiration');

      if (tokenExpiration && currentTime > tokenExpiration) {
        // Token telah kedaluwarsa, lakukan logout
        commit('SET_ROLE', '');
        localStorage.removeItem('role');
        localStorage.removeItem('tokenExpiration');
        window.location.href = '/';
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
