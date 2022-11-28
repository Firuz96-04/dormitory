import http from '@/api/http'

export default {
    async setAllPrincipal({commit}) {
        const response = await http.get('principal/')
        const result = await response.data
        commit('SET_ALL_PRINCIPAL', result.data)
        console.log(111)
    },

    async addPrincipal({commit}, payload) {
        try {
            const response = await http.post('principal/', payload.principal)
            const result = await response.data
            console.log(result)
            commit('ADD_PRINCIPAL', result.data)
            payload.cb()
                
        } catch (error) {
            console.log(error.response)  
            // console.log(error.response.data.error)       
        }
    },

    async editPricipal({commit},payload) {
        console.log(payload)
        try {
            const response = await http.put(`principal/?id=${payload.id}`, payload.principal)
            const result = await response.data
            console.log(response)
            payload.cb()
        } catch (error) {
            console.log(error)
        }
    }

}