import http from '@/api/http'

export default {
    async setAllBuildHomes({commit}) {
        let response = await http.get('building-home/')
        let result = await response.data
        commit('SET_ALL_BUILD_HOMES',result.data)
        console.log('building-home')
    }
}