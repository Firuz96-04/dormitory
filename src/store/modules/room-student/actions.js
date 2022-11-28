import http from '@/api/http'

export default {
    async setAllBuildHomes({commit},payload) {
        console.log(payload.room_id)
        try {
            let response = await http.get(`room-students/?room_id=${payload.room_id}`)
            let result = await response.data
            commit('SET_ALL_ROOM_STUDENTS',result.data)
            console.log(result.data)
                
        } catch (error) {
                console.log(error)            
        }
    },


   
}