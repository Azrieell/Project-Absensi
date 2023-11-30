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
        const response = await axios.get('/employee');
        const [ employeeData ] = response.data
        commit('SET_USER_KARYAWAN', employeeData)
        return employeeData
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