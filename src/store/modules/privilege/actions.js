import http from '@/api/http'

export default {
   async setAllPrivileges({commit}) {
        let response = await http.get('privilege/')
        let result = await response.data
        commit('SET_ALL_PRIVILEGES',result.data)
        console.log('this is privilege')
    
    }
}