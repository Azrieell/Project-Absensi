import axios from "axios";

const information = {
  namespaced: true,
  state: {
    information: [],
  },
  getters: {
    getInformation: (state) => state.information,
  },
  actions: {
    async fetchInformation({ commit }) {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/employee/information/get"
        );
        commit("SET_INFORMATION", response.data);
        return response.data;
      } catch (error) {
        console.log(error.message);
        return false;
      }
    },
  },
  mutations: {
    SET_INFORMATION(state, information) {
      state.information = information;
    },
  },
};
export default information;
