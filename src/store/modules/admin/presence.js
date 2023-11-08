import axios from "axios";

const presence =  {
namespaced: true,
state:{
 presence: []
},
getters:{
getPresence: (state) => state.presence
},
actions:{
    async fetchPresence({commit}){
       try {
        const response = await axios.get('http://localhost:5000/api/v1/employee/presence/get');
        commit('SET_PRESENCE', response.data);
        return response.data
       } catch (error) {
        console.log(error.message);
        return false
       }
    }
},
mutations:{
    SET_PRESENCE(state, presence){
        state.presence = presence
    }
}
}
export default presence