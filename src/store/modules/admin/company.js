import axios from "axios";

const company = {
  namespaced: true,
  state: {
    company: [],
  },
  getters: {
    getCompany: (state) => state.company,
  },
  actions: {
    async fetchCompany({ commit }) {
      try {
        const response = await axios.get(
          "/employee/company/get"
        );
        commit("SET_COMPANY", response.data);
        return response.data;
      } catch (error) {
        console.log(error.message);
        return false;
      }
    },
    async updateCompany({commit, dispatch}, companyData){
      try {
        const response = await axios.patch('/employee/company/update', companyData);
        commit('SET_UPDATE_COMPANY', response.data)
        // dispatch('fetchCompany')
        return response.data
      } catch (error) {
        console.log(error.message)
        throw false
      }
    }
  },
  mutations: {
    SET_COMPANY(state, company) {
      state.company = company;
    },
    SET_UPDATE_COMPANY(state, company){
      state.company = company
    }
  },
};
export default company;
