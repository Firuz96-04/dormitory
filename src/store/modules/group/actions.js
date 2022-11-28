import http from '@/api/http'

export default {
    async setAllGroups({commit}) {
        let response = await http.get('group/')
        let result = await response.data
        commit('SET_ALL_GROUPS',result.data)
    }
}