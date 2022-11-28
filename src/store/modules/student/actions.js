// import http from '../../../api/http'
import http from '@/api/http'
export default {
    async set_students({commit}) {
        let response = await http.get('student/')
        let result = await response.data
        commit('set_allStudent',result.data)
        console.log(111)
    }
}

