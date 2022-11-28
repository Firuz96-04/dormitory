import http from '@/api/http'

export default {
   async setAllRoom({commit}) {
        let response = await http.get('room/')
        let result = await response.data
        commit('SET_ALL_ROOM',result.data)
        console.log(111)
    
    }
}