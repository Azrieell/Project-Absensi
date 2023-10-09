import axios from "axios";

const user = {
namespaced: true,
state: {
    user: []
},
getters: {
    getuser: (state) => state.user
},
actions: {
    async fetchUser({ commit }){
        try {
            const response = await axios.get('http://localhost:5000/api/v1/users');
            commit('SET_USER', response.data)
            return response.data
        } catch (error) {
            alert(error.message)
            return false
        }
    }
},
mutations: {
    SET_USER(state, user){
        state.user = user
    }
}
}

export default user;