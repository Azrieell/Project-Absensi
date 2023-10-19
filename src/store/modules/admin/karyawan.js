import axios from "axios";


const karyawan = {
  namespaced: true,
  state: {
    karyawan: [],
    errorAdd: []
  },
  getters: {
    getkaryawan: (state) => state.karyawan,
    isErrorAdd: (state) => state.errorAdd
  },
  actions: {
    async fetchKaryawan({
      commit
    }) {
      try {
        const response = await axios.get('/api/v1/employee',{
          withCredentials: true
        });
        commit('SET_KARYAWAN', response.data)
        return response.data
      } catch (error) {
        alert(error.message)
        return false
      }
    },
    async createEmployee({ commit }, employeeData) {
      try {
        const response = await axios.post('/api/v1/employee/user/create', employeeData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Set header Content-Type to multipart/form-data
          },
        });
        commit('SET_EMPLOYEE', response.data);
        return response.data;
      } catch (error) {
        const errorAdd = error.response.message
        commit('SET_ERROR_ADD', errorAdd)
        throw error;
      }
    },
  },
  mutations: {
    SET_ERROR_ADD(state, error){
      state.errorAdd = error
    },
    SET_KARYAWAN(state, karyawan) {
      state.karyawan = karyawan
    },
    SET_EMPLOYEE(state, karyawan) {
      state.karyawan = karyawan
    }
  }
}

export default karyawan;