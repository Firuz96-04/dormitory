import http from '@/api/http'

export default {
    async setAllBuildings({commit}) {
        let response = await http.get('building/')
        let result = await response.data
        commit('SET_ALL_BUILDINGS',result.data)
        console.log(111)
    
    }
}