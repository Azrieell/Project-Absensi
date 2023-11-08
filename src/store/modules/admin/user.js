import axios from "axios";

const user = {
  namespaced: true,
  state: {
    user: [],
    singleId: [],
    errorUpdated: null,
  },
  getters: {
    getuser: (state) => state.user,
    getError: (state) => state.errorUpdated,
    getSingleById: state => useruuid => {
        // Coba mencari data dalam state.user berdasarkan useruuid
        const singleUser = state.user.find(p => p.uuid === useruuid);
        console.log('user:', singleUser);
        return singleUser
      }
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/users");
        commit("SET_USER", response.data);
        return response.data;
      } catch (error) {
        alert(error.message);
        return false;
      }
    },
    async fetchUserById({ commit }, useruuid) {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/users/${useruuid}`
        );
        commit("SET_SINGLE_USER", response.data);
        return response.data;
      } catch (error) {
        alert(error.message);
        return false;
      }
    },
<<<<<<< HEAD
    actions: {
        async fetchUser({
            commit
        }) {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/users');
                commit('SET_USER', response.data)
                return response.data
            } catch (error) {
                alert(error.message)
                return false
            }
        },
        async fetchUserById({
            commit
        }, useruuid) {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/users/${useruuid}`);
                commit('SET_SINGLE_USER', response.data)
                return response.data
            } catch (error) {
                alert(error.message)
                return false
            }
        },
        async AddUser({
            commit
        }, userData) {
            try {
                const response = await axios.post('http://localhost:5000/api/v1/employee/user/create', userData);
                commit('SET_ADD_USER', response.data);
                Swal.fire(
                    'Berhasil!',
                    'Berhasil Menambah User',
                    'success'
                )
                return response.data;
            } catch (error) {
                throw error;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            }
        },
        async updateUser({commit,useruuid}, userData) {
            try {
                const response = await axios.patch(`http://localhost:5000/api/v1/users/update/${useruuid}`, userData, {
                    headers:{

                    }
                });
            
                commit('UPDATE_USER_DATA', response.data);
                return response.data
            } catch (error) {
                // alert(000error)
                console.log(error)
            } 
        },
        deleteUser({
            commit,
            dispatch
        }, uuid) {
            axios.delete(`http://localhost:5000/api/v1/users/destroy/${uuid}`)
                .then(response => {
                    console.log('Position deleted:', response.data);
                    dispatch('fetchUser');
                })
                .catch(error => {
                    console.error('Error deleting position:', error);
                });
        },
    },
    mutations: {
        ERROR_UPDATE_USER(state, error) {
            state.errorUpdated = error
        },
        SET_USER(state, user) {
            state.user = user
        },
        SET_ADD_USER(state, user) {
            state.user = user
        },
        SET_SINGLE_USER(state, user) {
            state.singleId = user
        },
        UPDATE_USER_DATA(state, user) {
            state.user = user
        },
    }
}
export default user;
=======
    async AddUser({ commit }, userData) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/users/add",
          userData
        );
        commit("SET_ADD_USER", response.data);
        Swal.fire("Berhasil!", "Berhasil Menambah User", "success");
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    async updateUser({ commit }, uuid, userDataEdit ) {
      try {
        const response = await axios.patch(
          `http://localhost:5000/api/v1/users/update/${uuid}`,
          userDataEdit
        );
        commit("SET_UPDATE_USER", response.data);
        return response.data;
      } catch (error) {
        const updateError = error.response.data.msg;
        commit("ERROR_UPDATE_USER", updateError);
        return false
      }
    },
    async deleteUser({ commit, dispatch }, uuid) {
      axios
        .delete(`http://localhost:5000/api/v1/users/destroy/${uuid}`)
        .then((response) => {
          console.log("user deleted:", response.data);
          dispatch("fetchUser");
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    },
  },
  mutations: {
    ERROR_UPDATE_USER(state, error) {
      state.errorUpdated = error; // Jika Anda ingin menyimpan pesan kesalahan, Anda bisa menyimpannya di state juga
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_ADD_USER(state, user) {
      state.user = user;
    },
    SET_UPDATE_USER(state, user) {
      state.singleId = user;
    },
    SET_SINGLE_USER(state, user) {
      state.singleId = user;
    },
  },
};
export default user;
>>>>>>> 5ea518a798066ff76b1ed86268f5360d01cdae20
