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
        const response = await axios.get("http://localhost:5000/api/v1/users");
        commit("SET_USER", response.data);
        return response.data;
      } catch (error) {
        alert(error.message);
        return false;
      }
    },
    async fetchUserById({ commit }, useruuid) {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/users/${useruuid}`
        );
        commit("SET_SINGLE_USER", response.data);
        return response.data;
      } catch (error) {
        alert(error.message);
        return false;
      }
    },
    async AddUser({ commit }, userData) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/users/add",
          userData
        );
        commit("SET_ADD_USER", response.data);
        Swal.fire("Berhasil!", "Berhasil Menambah User", "success");
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    async updateUser({ commit }, uuid, userDataEdit ) {
      try {
        const response = await axios.patch(
          `http://localhost:5000/api/v1/users/update/${uuid}`,
          userDataEdit
        );
        commit("SET_UPDATE_USER", response.data);
        return response.data;
      } catch (error) {
        const updateError = error.response.data.msg;
        commit("ERROR_UPDATE_USER", updateError);
        return false
      }
    },
    async deleteUser({ commit, dispatch }, uuid) {
      axios
        .delete(`http://localhost:5000/api/v1/users/destroy/${uuid}`)
        .then((response) => {
          console.log("user deleted:", response.data);
          dispatch("fetchUser");
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    },
  },
  mutations: {
    ERROR_UPDATE_USER(state, error) {
      state.errorUpdated = error; // Jika Anda ingin menyimpan pesan kesalahan, Anda bisa menyimpannya di state juga
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_ADD_USER(state, user) {
      state.user = user;
    },
    SET_UPDATE_USER(state, user) {
      state.singleId = user;
    },
    SET_SINGLE_USER(state, user) {
      state.singleId = user;
    },
  },
};
export default user;