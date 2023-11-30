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
    },
  },
  actions: {
    async fetchPosisi({ commit }) {
      try {
        const response = await axios.get("/employee/position/get");
        commit("SET_POSISI", response.data);
        return response.data;
      } catch (error) {
        alert(error.message);
        return false;
      }
    },
    async AddPosisi({ commit }, created) {
      try {
        const response = await axios.post("/employee/position/create", created);
        commit("SET_ADDPOSISI", response.data);
        return response.data;
      } catch (error) {
        alert(error.message);
        return false;
      }
    },
   async deletePosition({ commit, dispatch }, id) {
      // Tampilkan konfirmasi SweetAlert
      const confirmationResult = await Swal.fire({
        title: "Anda yakin?",
        text: "Ingin menghapus jabatan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, hapus!"
      });

      // Jika pengguna mengonfirmasi penghapusan
      if (confirmationResult.isConfirmed) {
        try {
          // Lakukan penghapusan
          await axios.delete(`/employee/position/delete/${id}`);
          
          // Tampilkan SweetAlert sukses
          Swal.fire({
            title: "Terhapus!",
            text: "jabatan Telah terhapus.",
            icon: "success"
          });

          // Perbarui daftar pengguna setelah penghapusan
          dispatch("fetchPosisi");
        } catch (error) {
          console.error("Error deleting jabatan:", error);

          // Tampilkan SweetAlert kesalahan jika penghapusan gagal
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error Menghapus jabatan!",
          });
        }
      }
    }
  },
  mutations: {
    SET_POSISI(state, posisi) {
      state.posisi = posisi;
    },
    SET_ADDPOSISI(state, posisi) {
      state.posisi.push(posisi);
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
};

export default posisi;
