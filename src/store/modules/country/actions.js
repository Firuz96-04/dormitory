import http from '@/api/http'

export default {
    async setAllCountries({commit}) {
        let response = await http.get('country/')
        let result = await response.data
        commit('SET_ALL_COUNTRIES', result.data)
        console.log('country')
    }
}