import axios from "axios";

const posisi = {
  namespaced: true,
  state: {
    posisi: [],
    isLoading: false,
  },
  getters: {
    getPosisi: (state) => state.posisi,
    getPosisiById: (state) => (id) => {
      console.log("fetching single posisi by id:", id);
      console.log("ProductData:", state.posisi);
      const posisi = state.posisi;
      console.log("posisi:", posisi);
      return posisi;
    }
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
        Swal.fire(
          'Sukses!',
          'Berhasil Menambah Data User',
          'success'
        )
        return response.data
      } catch (error) {
        alert(error.message)
        return false
      }
    },
    deletePosition({
      commit,
      dispatch
    }, id) {
      axios.delete(`http://localhost:5000/api/v1/employee/position/delete/${id}`)
        .then(response => {
          console.log('Position deleted:', response.data);
          dispatch('fetchPosisi'); 
        })
        .catch(error => {
          console.error('Error deleting position:', error);
        });
    },
  },
  mutations: {
    SET_POSISI(state, posisi) {
      state.posisi = posisi
    },
    SET_ADDPOSISI(state, posisi) {
      state.posisi = posisi
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
  }
}

export default posisi;