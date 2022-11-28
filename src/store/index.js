import {createStore} from 'vuex'
import student from './modules/student'
import room from './modules/room'
import building from './modules/building'
import group from './modules/group'
import principal from './modules/principal'
import privilege from './modules/privilege'
import city from './modules/city'
import country from './modules/country'
import buildingHome from './modules/building-home'
import buildingRoom from './modules/building-room'
import roomStudent from './modules/room-student'


const store = createStore({
    modules: {
        student,
        room,
        building,
        group,
        principal,
        privilege,
        city,
        country,
        buildingHome,
        buildingRoom,
        roomStudent
    }
})


export default store