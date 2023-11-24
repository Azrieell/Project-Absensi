import axios from "axios";
import Swal from "sweetalert2";

const karyawan = {
  namespaced: true,
  state: {
    karyawan: [],
    singleKaryawan: [],
    errorAdd: null,
    errorUpdated: null,
  },
  getters: {
    getkaryawan: (state) => state.karyawan,
    getErrorUpdated: (state) => state.errorUpdated,
    getEmployeeByUuid: (state) => (employeUuid) => {
      console.log("fetching single employee by uuid:", employeUuid);
      console.log("employeeData:", state.singleKaryawan);

      // Ambil elemen pertama dari array singleKaryawan jika ada
      const employee = state.singleKaryawan[0];

      console.log("employee:", employee);
      return employee;
    },
  },
  actions: {
    async fetchKaryawan({ commit }) {
      try {
        const response = await axios.get("/employee");
        commit("SET_EMPLOYEE", response.data);
        return response.data;
      } catch (error) {
        alert(error.message);
        return false;
      }
    },
    async fetchSingleKaryawan({ commit }, employeUuid) {
      try {
        const response = await axios.get(`/employee/${employeUuid}`);
        commit("SET_SINGLE_EMPLOYEE", response.data);
        return response.data;
      } catch (error) {
        alert(error.message);
        return false;
      }
    },
    resetSingleKaryawan({ commit }) {
      commit("SET_SINGLE_EMPLOYEE", null);
    },
    async createEmployee({ commit }, formData) {
      try {
        const response = await axios.post(
          "/employee/user/create",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const newEmployee = response.data; // Jika server mengembalikan data karyawan yang baru dibuat
        commit("SET_ADD_EMPLOYEE", newEmployee);
        return newEmployee;
      } catch (error) {
        const erroAddEmployee = error.response.data.msg;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: erroAddEmployee,
        });
        throw false;
      }
    },
    async updateEmployee({ commit }, { uuid, employeeEditData }) {
      try {
        const response = await axios.patch(
          `/employee/update/${uuid}`,
          employeeEditData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Set header Content-Type
            },
          }
        );

        commit("SET_UPDATE_EMPLOYEE", { uuid, karyawan: response.data });
        return response.data;
      } catch (error) {
        const updateError = error.response.data.msg;
        commit("ERROR_UPDATE_KARYAWAN", updateError);
        throw error;
      }
    },
  },
  mutations: {
    SET_ERROR_ADD(state, error) {
      state.errorAdd = error;
    },
    ERROR_UPDATE_KARYAWAN(state, error) {
      state.errorUpdated = error;
    },
    SET_EMPLOYEE(state, karyawan) {
      state.karyawan = karyawan;
    },
    SET_SINGLE_EMPLOYEE(state, karyawan) {
      state.singleKaryawan = [karyawan];
    },
    SET_SEARCH_EMPLOYEE(state, karyawan) {
      state.karyawan = karyawan;
    },
    SET_UPDATE_EMPLOYEE(state, { uuid, karyawan }) {
      const updatedKaryawan = state.karyawan.findIndex((u) => u.uuid === uuid);
      state.karyawan[updatedKaryawan] = karyawan;
      state.errorUpdated = null;
    },
    SET_ADD_EMPLOYEE(state, karyawan) {
      state.karyawan = karyawan;
    },
  },
};

export default karyawan;
