import axios from "axios";

const user = {
    namespaced: true,
    state: {
        user: []
    },
    getters: {
        getuser: (state) => state.user,
        getUserByuuid: (state) => (uuid) => {
            console.log("fetching single user by uuid:", uuid);
            console.log("ProductData:", state.user);
            const user = state.user;
            console.log("user:", user);
            return user;
          }
    },
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
        async AddUser({
            commit
        }, userData) {
            try {
                const response = await axios.post('http://localhost:5000/api/v1/users/add', userData );
                commit('SET_ADD_USER', response.data);
                Swal.fire(
                    'Berhasil!',
                    'Berhasil Menambah User',
                    'success'
                )
                return response.data;
            } catch (error) {
                throw error;
            }
        },
        async deleteUser({
            commit,
            dispatch
          }, uuid) {
            axios.delete(`http://localhost:5000/api/v1/users/destroy/${uuid}`)
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
        SET_USER(state, user) {
            state.user = user
        },
        SET_ADD_USER(state, user) {
            state.user = user
        }
    }
}

export default user;