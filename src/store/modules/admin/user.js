// Di dalam file user.js (module Vuex user)
import axios from "axios";

const user = {
  namespaced: true,
  state: {
    users: [],
    singleId: [],
    errorUpdated: null,
  },
  getters: {
    getusers: (state) => state.users,
    getError: (state) => state.errorUpdated,
    getSingleById: (state) => (useruuid) => {
      const singleUser = state.users.find((p) => p.uuid === useruuid);
      console.log("user:", singleUser);
      return singleUser;
    },
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const response = await axios.get("/users");
        commit("SET_USERS", response.data);
        return response.data;
      } catch (error) {
        alert(error.message);
        return false;
      }
    },
    async fetchUserById({ commit }, useruuid) {
      try {
        const response = await axios.get(`/users/${useruuid}`);
        commit("SET_SINGLE_ID", response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching user by ID:", error);
        commit("SET_SINGLE_ID", null); // Setel menjadi null jika user tidak ditemukan
        return null;
      }
    },
    async AddUser({ commit }, userData) {
      try {
        const response = await axios.post("/users/add", userData);
        commit("SET_ADD_USER", response.data);
        Swal.fire("Berhasil!", "Berhasil Menambah User", "success");
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    async updateUser({ commit }, { uuid, userDataEdit }) {
      try {
        const response = await axios.patch(`/users/update/${uuid}`, userDataEdit);
        
        // Tambahkan log untuk melihat respons dari server
        console.log('Server Response:', response.data);
  
        commit("SET_UPDATE_USER", response.data);
        return response.data;
      } catch (error) {
        // Tambahkan log untuk melihat kesalahan saat update
        console.error("Error updating user:", error);
  
        const updateError = error.response.data.msg;
        commit("ERROR_UPDATE_USER", updateError);
        throw error;
      }
    },
    async deleteUser({ commit, dispatch }, uuid) {
      // Tampilkan konfirmasi SweetAlert
      const confirmationResult = await Swal.fire({
        title: "Anda yakin?",
        text: "Ingin menghapus User!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, hapus!"
      });

      // Jika pengguna mengonfirmasi penghapusan
      if (confirmationResult.isConfirmed) {
        try {
          // Lakukan penghapusan
          await axios.delete(`/users/destroy/${uuid}`);
          
          // Tampilkan SweetAlert sukses
          Swal.fire({
            title: "Terhapus!",
            text: "User Telah terhapus.",
            icon: "success"
          });

          // Perbarui daftar pengguna setelah penghapusan
          dispatch("fetchUser");
        } catch (error) {
          console.error("Error deleting jabatan:", error);

          // Tampilkan SweetAlert kesalahan jika penghapusan gagal
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error Menghapus user!",
          });
        }
      }
    }
  },
  mutations: {
    ERROR_UPDATE_USER(state, error) {
      state.errorUpdated = error;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_ADD_USER(state, user) {
      state.users.push(user); // Menambahkan pengguna baru ke dalam array
    },
    SET_UPDATE_USER(state, user) {
      state.singleId = user;
    },
    SET_SINGLE_ID(state, user) {
      state.singleId = user;
    },
  },
};

export default user;