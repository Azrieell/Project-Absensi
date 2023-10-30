import axios from "axios";

const user = {
    namespaced: true,
    state: {
        user: []
    },
    getters: {
        getuser: (state) => state.user,
        getUserById: (state) => (uuid) => {
            console.log("fetching single User by id:", uuid);
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
        async updateUser({
            commit
        }, {
            uuid,
            updatedData
        }) {
            try {
                const response = await axios.patch(`http://localhost:5000/api/v1/users/update/${uuid}`, updatedData);
                commit('updateUser', response.data);
            } catch (error) {
                console.error('Error updating user', error);
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
        SET_USER(state, user) {
            state.user = user
        },
        SET_ADD_USER(state, user) {
            state.user = user
        },
        updateUser(state, updatedUser) {
            const index = state.user.findIndex((user) => user.uuid === updatedUser.uuid);
            if (index !== -1) {
                state.users.splice(index, 1, updatedUser);
            }
        },
    }
}

export default user;