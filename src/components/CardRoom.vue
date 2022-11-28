<template>
  <div class="room" @click="toCardStudent(room_id)">
    <div class="room_header">
      <div class="room_header_type">{{room_place}}</div>
      <div class="room_header_number" :class="room_full ? 'num_red' : 'num_green' " >{{room_number}}</div>
    </div>
    <div class="room_footer">

      <div class="room_footer_free">
        <div class="room_footer_free_icon">
           <q-icon name="person" class="icon" size="30px"  />
        </div>
        <div class="room_footer_free_title">{{free_place}}</div>
      </div>
      
      <div  class="room_footer_busy">
        <div class="room_footer_busy_icon">
          <q-icon name="person_off" class="icon" size="30px" />
        </div>
        <div class="room_footer_busy_title">{{busy_place}}</div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props:{
    room_id:{
      type: Number,
      default: 1
    },
    room_place:{
      type: Number,
      default: 0
    },
    room_number:{
      type: Number,
      default: 0
    },
    free_place:{
      type: Number
    },
    busy_place:{
      type: Number
    },
    room_full:{
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      
    }
  },

  methods: {
    toCardStudent(room_id) {
          this.$router.push({
                name:'room-student',
                params: { room: room_id }
                })
    }
  }
}
</script>

<style lang="sass" scoped>

.num_red
  color: #183153
  font-weight: 600
  background-color: #EC7063

.num_green
  color: #183153
  font-weight: 600
  background-color: #27AE60

.icon
  padding: 5px
  color: #183153
.room
    width: 100px
    min-height: 100px
    border-radius: 5px
    background-color: #FFFFFF
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px
    cursor: pointer
    transition: .3s all
    display: flex
    flex-direction: column
    overflow: hidden
    // margin: 2px
    &:hover
      background-color: #ef3
    
    &_header
      position: relative
      height: 30%

      &_type
        position: absolute
        padding: 0 5px
        top: 0
        right: 0
        background-color: #B2BABB
        border: none
        border-bottom-left-radius: 5px
        color: #183153
        font-weight: 600

      &_number
        position: absolute
        display: flex
        align-items: center
        justify-content: center
        padding: 5px
        // background-color: #f33
        border-radius: 100%
        bottom: -50%
        left: 50%
        transform: translateX(-50%)

    &_footer
      // background-color: #aef
      display: flex
      height: 70%
      border-top-right-radius: 10px
      border-top-left-radius: 10px   
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px
      overflow: inherit

      &_free
        display: flex
        flex-direction: column
        align-items: center
        padding: 7px 0
        width: 50%
        align-items: center
        background-color: #ccd

        &_icon
          height: 50%


        &_title
          height: 50%
          color: #183153
          font-size: 18px
          font-weight: 600
          margin-top: 4px

      &_busy
        display: flex
        flex-direction: column
        align-items: center
        width: 50%
        padding: 7px 0
        background-color: #aad

        &_icon
          height: 50%

        &_title
          height: 50%
          color: #183153
          font-size: 18px
          font-weight: 600
          margin-top: 4px
        
</style>