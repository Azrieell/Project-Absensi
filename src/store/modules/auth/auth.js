import axios from "axios";

let timeoutId; // Variabel global untuk menyimpan ID timeout

const auth = {
  namespaced: true,
  state: {
    loginError: null,
    role: localStorage.getItem("role") || "",
    token: localStorage.getItem("token") || "",
    user: [],
    tokenExpiration: localStorage.getItem("tokenExpiration") || null,
  },
  getters: {
    isError: (state) => state.loginError,
    isRole: (state) => !!state.role && state.role !== "",
    isAuthenticated: (state) => !!state.token && state.token !== "",
    getMe: (state) => state.user,
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post("/auth/login", credentials);

        const user = response.data;
        localStorage.setItem("role", user.role);
        localStorage.setItem("token", user.accessToken);

        // Set waktu kedaluwarsa token (12 jam dari sekarang)
        const expirationTime = new Date().getTime() + 12 * 60 * 60 * 1000; // 12 hours
        localStorage.setItem("tokenExpiration", expirationTime);
        commit("SET_USER_LOGIN", null);
        commit("SET_ROLE", user.role);
        commit("SET_TOKEN", user.accessToken);

        // Set timeout untuk logout setelah 12 jam
        timeoutId = setTimeout(() => {
          commit("SET_ROLE", "");
          commit("SET_TOKEN", "");
          localStorage.removeItem("role");
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
          window.location.href = "/";
        }, 12 * 60 * 60 * 1000); // 12 hours

        return true;
      } catch (error) {
        const errorMessage = error.response.data.msg;
        commit("SET_LOGIN_ERROR", errorMessage);
        return false;
      }
    },
    async fetchMe({ commit, dispatch }) {
      // Pemeriksaan token kedaluwarsa sebelum mengambil data pengguna
      await dispatch("checkTokenExpiration");

      try {
        const response = await axios.get("/auth/me");
        // Menggunakan array destructuring untuk mengambil data yang diubah dari server
        const [userData] = response.data;

        // Committing ke mutations untuk mengubah state
        commit("SET_USER", userData);
        return userData;
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        return false;
      }
    },
    async logout({ commit }) {
        // Lakukan commit untuk menghapus data pengguna dari toko atau melakukan penanganan lain yang diperlukan
        const role = localStorage.getItem("role");
        const token = localStorage.getItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
        commit("SET_ROLE", "");
        commit("SET_TOKEN", "");
        // Hapus timeout untuk menghindari pemanggilan tidak perlu setelah logout
        clearTimeout(timeoutId);
        // Log Token removed
        console.log("Role Removed:", role);
        console.log("Role Removed:", token);
        window.location.href = "/";
        return true;
    },
    checkTokenExpiration({ commit }) {
      // Periksa apakah token telah kedaluwarsa
      const currentTime = new Date().getTime();
      const tokenExpiration = localStorage.getItem("tokenExpiration");

      if (tokenExpiration && currentTime > tokenExpiration) {
        // Token telah kedaluwarsa, lakukan logout
        commit("SET_ROLE", "");
        commit("SET_TOKEN", "");
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
        window.location.href = "/";
      }
    },
    async resetPassword({ commit }, { email }) {
      try {
        const response = await axios.post("/auth/reset-password", { email });

        // Tampilkan notifikasi berhasil
        Swal.fire({
          icon: 'success',
          title: 'Reset Password Berhasil!',
          text: response.data.msg,
        });
        
        return true;
      } catch (error) {
        // Handle error
        console.error(error);

        // Tampilkan notifikasi error
        Swal.fire({
          icon: 'error',
          title: 'Gagal Mereset Password',
          text: error.response.data.msg || 'Terjadi kesalahan saat mereset password. Silakan coba lagi.',
        });

        return false;
      }
    },

    async changePasswordWithoutToken({ commit }, { resetLink, newPassword }) {
      try {
        const response = await axios.post("/auth/change-password", { resetLink, newPassword });

        // Tampilkan notifikasi berhasil
        Swal.fire({
          icon: 'success',
          title: 'Ganti Password Berhasil!',
          text: response.data.msg,
        });

        return true;
      } catch (error) {
        // Handle error
        console.error(error);

        // Tampilkan notifikasi error
        Swal.fire({
          icon: 'error',
          title: 'Gagal Mengganti Password',
          text: error.response.data.msg || 'Terjadi kesalahan saat mengganti password. Silakan coba lagi.',
        });

        return false;
      }
    },
  },
  mutations: {
    SET_ROLE(state, role) {
      state.role = role;
    },
    SET_TOKEN(state, token) {
      state.token = token;
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
