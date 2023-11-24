import axios from "axios";

const userkaryawan = {
  namespaced: true,
  state: {
    userkaryawan: [],
  },
  getters: {
    getUserKaryawan: (state) => state.userkaryawan,
  },
  actions: {
    async fetchUserKaryawan({
      commit
    }) {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/employee');
        commit('SET_USER_KARYAWAN', response.data)
        return response.data
      } catch (error) {
        alert(error.message)
        return false
      }
    },
  },
  mutations: {
    SET_USER_KARYAWAN(state, userkaryawan) {
      state.userkaryawan = userkaryawan
    },
  }
}

export default userkaryawan;