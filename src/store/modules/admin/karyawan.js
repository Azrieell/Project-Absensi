import axios from "axios";

const karyawan = {
  namespaced: true,
  state: {
    karyawan: []
  },
  getters: {
    getkaryawan: (state) => state.karyawan
  },
  actions: {
    async fetchKaryawan({
      commit
    }) {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/employee');
        commit('SET_KARYAWAN', response.data)
        return response.data
      } catch (error) {
        alert(error.message)
        return false
      }
    },
    async AddKaryawan({ commit }, employeeData) {
      try {
        const response = await axios.post('http://localhost:5000/api/v1/employee/user/create', employeeData);
        commit('SET_ADD_KARYAWAN', response.data)
        return true
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.msg,
        })
        return false
      }
    }
  },
  mutations: {
    SET_KARYAWAN(state, karyawan) {
      state.karyawan = karyawan
    },
    SET_ADD_KARYAWAN(state, karyawan) {
      state.karyawan = karyawan
    }
  }
}

export default karyawan;