import http from '@/api/http'

export default {
    async setAllBuildHomes({commit},payload) {
        console.log(payload.floor_number)
        try {
            let response = await http.get(`building-room/?build_name=${payload.build_id}&floor_number=${payload.floor_number}`)
            let result = await response.data
            commit('SET_ALL_BUILD_ROOMS',result.data)
            console.log(result.data)
                
        } catch (error) {
                console.log(error)            
        }
    },


    setEmptyHomes({commit}) {
        commit('SET_ALL_BUILD_ROOMS', [])
    }
}