import axios from "axios";

const posisi = {
  namespaced: true,
  state: {
    posisi: []
  },
  getters: {
    getPosisi: (state) => state.posisi
  },
  actions: {
    async fetchPosisi({
      commit
    }) {
      try {
        const response = await axios.get('/api/v1/employee/position/get');
        commit('SET_POSISI', response.data)
        return response.data
      } catch (error) {
        alert(error.message)
        return false
      }
    },
    async AddPosisi({
      commit
    }, created) {
      try {
        const response = await axios.post('/api/v1/employee/position/create', created);
        commit('SET_ADDPOSISI', response.data)
        return response.data
      } catch (error) {
        alert(error.message)
        return false
      }
    },
  },
  mutations: {
    SET_POSISI(state, posisi) {
      state.posisi = posisi
    },
    SET_ADDPOSISI(state, posisi) {
      state.posisi = posisi
    },
  }
}

export default posisi;