import http from '@/api/http'

export default {
    async setAllCities({commit}) {
        let response = await http.get('city/')
        let result = await response.data
        commit('SET_ALL_CITIES',result.data)
        console.log('city')
    }
}