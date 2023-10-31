import axios from "axios";

const user = {
    namespaced: true,
    state: {
        user: [],
        singleId: [],
        errorUpdated: null
    },
    getters: {
        getuser: (state) => state.user,
        getError: (state) => state.errorUpdated,
        getUserById: (state) => (uuid) => {
            console.log("fetching single User by id:", uuid);
            console.log("ProductData:", state.user);
            const user = state.user;
            console.log("user:", user);
            return user;
        },
        getSingleById: (state) => (useruuid) => {
            const getSingleUser = state.user.find((p) => p.uuid == useruuid);
            console.log("User:", getSingleUser);
            return getSingleUser;
        },
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
        async updateUser({
            commit
        }, {
            useruuid,
            userData
        }) {
            try {
                const response = await axios.patch(`http://localhost:5000/api/v1/users/update/${useruuid}`, userData);
                commit('updateUserData', response.data);
                return response.data
            } catch (error) {
                const updateError = error.response.data.message;
                commit('ERROR_UPDATE_USER', updateError)
                throw error
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
        updateUserData(state, updatedUser) {
            const index = state.user.findIndex((userItem) => userItem.uuid === updatedUser.uuid);
            if (index !== -1) {
                Object.assign(state.user[index], updatedUser);
            }
        }
    }
}
export default user;