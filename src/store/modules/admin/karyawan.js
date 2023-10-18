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
    async createEmployee({ commit }, employeeData) {
      try {
        const response = await axios.post('http://localhost:5000/api/v1/employee/user/create', employeeData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Set header Content-Type to multipart/form-data
          },
        });
        commit('SET_EMPLOYEE', response.data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  },
  mutations: {
    SET_KARYAWAN(state, karyawan) {
      state.karyawan = karyawan
    },
    SET_EMPLOYEE(state, karyawan) {
      state.karyawan = karyawan
    }
  }
}

export default karyawan;