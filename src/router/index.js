import {createRouter, createWebHistory} from "vue-router";
// import  from '../views/Student.vue'
const routes = [
    {
        path:'/',
        name:'home',
        alias:'/',
        component: () => import('../views/Home.vue'),
        children: [
            {
                path:'',
                name:'home-building',
                component: () => import('../views/HomeBuilding.vue'),
            },
            {
                path:'home-room/:build',
                name:'home-room',
                component: () => import('../views/HomeRoom.vue'),
            },
            {
                path:'room-student/:room',
                name: 'room-student',
                component: () => import('../views/RoomStudent.vue')
            }
        ]
    },
    {
        path:'/student',
        name:'student',
        component: () => import('../views/Student.vue')
    },
    {
        path:'/city',
        name:'city',
        component: () => import('../views/City.vue')
    },
    {
        path:'/country',
        name:'country',
        component: () => import('../views/Country.vue')
    },
    {
        path:'/group',
        name:'group',
        component: () => import('../views/Group.vue')
    },
    {
        path:'/faculty',
        name:'faculty',
        component: () => import('../views/Faculty.vue')
    },
    {
        path:'/principal',
        name:'principal',
        component: () => import('../views/Principal.vue')
    },
    {
        path:'/privilege',
        name:'privilege',
        component: () => import('../views/Privilege.vue')
    },
    {
        path:'/building',
        name:'building',
        component: () => import('../views/Building.vue')
    },
    {
        path:'/booking',
        name:'booking',
        component: () => import('../views/Booking.vue')
    },
    {
        path:'/room',
        name:'room',
        component: () => import('../views/Room.vue')
    },
]


const router = createRouter({
    routes: routes,
    history: createWebHistory()
})


export default router