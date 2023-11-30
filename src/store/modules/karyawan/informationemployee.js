import axios from "axios";

const informationEmployee = {
  namespaced: true,
  state: {
    information: [],
  },
  getters: {
    getInformation: (state) => state.information,
    getInformationLength: (state) => (type) => {
      const filteredInformation = state.information.filter(info => info.type === type);
      console.log(`Filtered Information (${type}):`, filteredInformation);
      return filteredInformation.length;
    },
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
        alert(error.message)
        return false
      }
    },
    async createInformationEmployee({
      commit
    }, informationData) {
      try {
        const response = await axios.post(
          "/employee/information/send",
          informationData, {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          }
        );
        const newInformationEmployee = response.data;
        commit("SET_ADD_INFORMATION_EMPLOYEE", newInformationEmployee);
        return newInformationEmployee;
      } catch (error) {
        alert(error.message);
      }
    },
    async createInformationPermissionEmployee({
      commit
    }, informationData) {
      try {
        const response = await axios.post(
          "/employee/information/send",
          informationData, {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          }
        );
        const newInformationPermissionEmployee = response.data;
        commit("SET_ADD_INFORMATION_PERMISSION_EMPLOYEE", newInformationPermissionEmployee);
        return newInformationPermissionEmployee;
      } catch (error) {
        alert(error.message);
      }
    },
  },
  mutations: {
    SET_EMPLOYEE_INFORMATION(state, information) {
      state.information = information
    },
    SET_ADD_INFORMATION_EMPLOYEE(state, information) {
      state.information = information
    },
    SET_ADD_INFORMATION_PERMISSION_EMPLOYEE(state, information) {
      state.information = information
    },
  }
}

export default informationEmployee;