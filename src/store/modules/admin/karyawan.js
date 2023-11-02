import axios from "axios";

const karyawan = {
  namespaced: true,
  state: {
    karyawan: [],
    singleKaryawan: [],
    errorAdd: null,
  },
  getters: {
    getkaryawan: (state) => state.karyawan,
    getEmployeeByUuid: (state) => (employeUuid) => {
      console.log("fetching single employee by slug:", employeUuid);
      console.log("employeeData:", state.singleKaryawan);
      const employee = state.singleKaryawan;
      console.log("employee:", employee);
      return employee;
    },
  },
  actions: {
    async fetchKaryawan({ commit }) {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/employee"
        );
        commit("SET_EMPLOYEE", response.data);
        return response.data;
      } catch (error) {
        alert(error.message);
        return false;
      }
    },
    async fetchSingleKaryawan({ commit }, employeUuid) {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/employee/${employeUuid}`
        );
        commit("SET_SINGLE_EMPLOYEE", response.data);
        return response.data;
      } catch (error) {
        alert(error.message);
        return false;
      }
    },
    async createEmployee({ commit }, employeeData) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/employee/user/create",
          employeeData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Set header Content-Type to multipart/form-data
            },
          }
        );
        commit("SET_ADD_EMPLOYEE", response.data);
        return response.data;
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    },
  },
  mutations: {
    SET_ERROR_ADD(state, error) {
      state.errorAdd = error;
    },
    SET_EMPLOYEE(state, karyawan) {
      state.karyawan = karyawan;
    },
    SET_SINGLE_EMPLOYEE(state, karyawan) {
      state.singleKaryawan = karyawan;
    },
    SET_ADD_EMPLOYEE(state, karyawan) {
      state.karyawan = karyawan;
    },
  },
};

export default karyawan;
