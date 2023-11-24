import axios from "axios";

const presensi = {
  namespaced: true,
  state: {
    presensiemployee: [],
  },
  getters: {
    getpresensiemployee: (state) => state.presensiemployee,
  },
  actions: {
    async fetchPresensiEmployee({
      commit
    }) {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/employee/presence/get');
        commit('SET_PRESENSI_EMPLOYEE', response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching presensi employee data:', error);
        res.status(500).json({
          error: 'Error fetching presensi employee data'
        });
        // Lepaskan kembali error untuk menanganinya di komponen atau bagian lain dari aplikasi Anda
      }
    },
    async createInformationEmployee({
      commit
    }, informationData) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/employee/information/send",
          informationData
        );
        const newPresensiEmployee = response.data;
        commit("SET_ADD_PRESENSI_EMPLOYEE", newPresensiEmployee);
        return newPresensiEmployee;
      } catch (error) {
        alert(error.message);
      }
    }
  },
  mutations: {
    SET_PRESENSI_EMPLOYEE(state, presensiemployee) {
      state.presensiemployee = presensiemployee
    },
    SET_ADD_PRESENSI_EMPLOYEE(state, presensiemployee) {
      state.presensiemployee = presensiemployee
    },
  }
}

export default presensi;