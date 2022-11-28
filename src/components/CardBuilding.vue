<template>
  <div class="card" @click="show(buildName)">
    
    <div class="card_top">
        <div class="card_header">{{buildName}}</div> 
        <div class="card_block">{{floorSize}}</div> 
    </div>
    <div class="card_bottom">
        <div class="card_bottom_student">
                <div class="card_bottom_title">Количетсво студентов</div>
                <div class="card_bottom_text">{{allStudents}}</div>

                <div class="card_bottom_title">Мужчины</div>
                <div class="card_bottom_text">{{men}}</div>

                <div class="card_bottom_title">Женшины</div>
                <div class="card_bottom_text">{{women}}</div>
        </div>

        <div class="card_bottom_room">
                <div class="card_bottom_title">Количетсво комнат</div>
                <div class="card_bottom_text">{{totalRooms}}</div>
    
                <div class="card_bottom_title">Свободные</div>
                <div class="card_bottom_text">{{freeRooms}}</div>

                <div class="card_bottom_title">Занятыйе</div>
                <div class="card_bottom_text">{{busyRooms}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        buildName: {
            type: String,
            required:false
        },
        floorSize:{
            type: Number,
            required: false,
        },
        totalRooms:{
            type: Number,
            required: false,
        },
        busyRooms: {
            type: Number,
            required: false,
        },
        freeRooms:{
            type: Number,
            required: false,
        },
        allStudents:{
            type: Number,
            required: false,
        },
        women:{
            type: Number,
            required: false,
        },
        men:{
            type: Number,
            required: false,
        }
    },
    data() {
        return {
            
        }
    },

    methods: {
        show(build_name) {
            this.$router.push({
                name:'home-room',
                params: { build: build_name }
                })
        }
    },
}
</script>

<style lang="sass" scoped>
.card
    display: flex
    flex-direction: column
    width: 400px
    height: 260px
    border-radius: 10px
    background-color: #fff
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px
    margin-bottom: 30px
    // overflow: hidden
    cursor: pointer
    .card_top
        position: relative
        height: 30%
        border-top-left-radius:10px
        border-top-right-radius:10px
    .card_header
        // font-family: 'Roboto'
        position: absolute
        display: flex
        border-radius: 5px
        justify-content: center
        align-items: center
        min-width: 150px
        height: 50px
        top: 0
        left: 50%
        transform: translate(-50%, -50%)
        background: #ee3
        font-weight: 600
        font-size: 20px
        color: #183153
    .card_block
        position: absolute
        display: flex
        font-size: 22px
        font-weight: 600
        justify-content: center
        align-items: center
        min-width: 60px
        height: 60px
        top: 0
        right: 0
        border-top-right-radius: inherit
        border-bottom-left-radius: 10px
        background: #d31fff
        
    .card_bottom
        display: flex
        height: 70%  
        border-bottom-left-radius: inherit

        &_title
            font-weight: 600
            color: #183153
            font-size: 16px
            text-align: center
        &_text
            display: flex
            font-weight: 600
            color: #183153
            font-size: 16px
            justify-content: center
            text-align: center
            width: 50px
            border-radius: 20px 
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px
        &_student
            width: 50%
            display: flex
            flex-direction: column
            justify-content: space-between
            align-items: center
            border-bottom-left-radius: inherit
            padding: 5px
            // overflow: hidden

        &_room
            width: 50%
            display: flex
            flex-direction: column
            justify-content: space-around
            align-items: center
            padding: 5px
</style>