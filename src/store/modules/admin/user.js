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
        alert(error.message);
        return false;
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
        commit("SET_UPDATE_USER", response.data);
        return response.data;
      } catch (error) {
        const updateError = error.response.data.msg;
        commit("ERROR_UPDATE_USER", updateError);
        return false;
      }
    },
    async deleteUser({ dispatch }, uuid) {
      try {
        await axios.delete(`/users/destroy/${uuid}`);
        dispatch("fetchUser");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
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