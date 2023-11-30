import axios from "axios";

const informationEmployee = {
  namespaced: true,
  state: {
    information: [],
  },
  getters: {
    getInformation: (state) => state.information,
  },
  actions: {
    async fetchInformation({
      commit
    }) {
      try {
        const response = await axios.get('/employee/information/get');
        const [ information ] = response.data
        commit('SET_EMPLOYEE_INFORMATION', information);
        return information
      } catch (error) {
        alert(error.message);
        return false;
      }
    },

    async checkSickExistenceForDate({
      commit,
      state
    }, date) {
      try {
        const sickRecords = state.information.informationSick || [];
        const existingRecord = sickRecords.find(record => record.tgl_keterangan === date);
        return Boolean(existingRecord);
      } catch (error) {
        throw error;
      }
    },
    async checkPermissionExistenceForDate({
      commit,
      state
    }, date) {
      try {
        const permissionRecords = state.information.informationPermission || [];
        const existingRecord = permissionRecords.find(record => record.tgl_keterangan === date);
        return Boolean(existingRecord);
      } catch (error) {
        throw error;
      }
    },

    async createInformationEmployee({
      commit
    }, informationData) {
      try {
        const formData = new FormData();
        formData.append('tgl_keterangan', informationData.tgl_keterangan);
        formData.append('keterangan', informationData.keterangan);
        formData.append('alasan', informationData.alasan);
        formData.append('file', informationData.file);
        const response = await axios.post(
          "/employee/information/send",
          formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const newInformationEmployee = response.data;
        commit("SET_ADD_INFORMATION_EMPLOYEE", newInformationEmployee);
        return newInformationEmployee;
      } catch (error) {
        throw error;
      }
    },
  },

  mutations: {
    SET_EMPLOYEE_INFORMATION(state, information) {
      state.information = information;
    },
    SET_ADD_INFORMATION_EMPLOYEE(state, information) {
      state.information = information;
    },
    SET_ADD_INFORMATION_PERMISSION_EMPLOYEE(state, information) {
      state.information = information;
    },
  }
};

export default informationEmployee;