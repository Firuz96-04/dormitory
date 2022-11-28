<template>
<div class="main_room">
  <div class="home_filter">
    <div class="floor_filter">
       <div class="floor_filter_title">Етаж</div>
       <q-select outlined v-model="floor"
        :options="floors"
        @update:model-value="val => showChannel(val)"
         class="floor_filter_block" dense />  
    </div>
  </div>

  <div class="home_room">
    <card-room v-for="(item, index) in getAllBuildRooms" :key="index"
      :room_number="item.room_number"
      :room_place="item.room_place"
      :free_place="item.free_place"
      :busy_place="item.busy_place"
      :room_full="item.room_full"
      :room_id="item.room_id"
     />
  </div>
</div>

</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import CardRoom from '../components/CardRoom.vue'
export default {
  components: {
    'card-room': CardRoom
  },
  data() {
    return {
      build_id: null,
     
      floors:[
        1,2,3,4
      ],
      floor:null
    }
  },
  methods: {
      ...mapActions('buildingRoom',['setAllBuildHomes','setEmptyHomes']),
      show() {
        console.log(this.room_id,' room')
        this.$router.push({name: 'room-student'})
      },
      showChannel(floor) {
        this.build_id = this.$route.params.build 
        console.log(floor,' component')
        console.log(`build ${this.build_id}`)
        this.setAllBuildHomes({
          build_id: this.build_id,
          floor_number: floor}
          ) 
       console.log('aaa')
     }
     
  },

  computed: {
      ...mapGetters('buildingRoom',['getAllBuildRooms'])
  },

  mounted() {
    
  },

  beforeUnmount() {
    console.log('qqq')
    this.setEmptyHomes() 
  }
 
}
</script>

<style lang="sass" scoped>
.main_room
  display: flex
  flex-direction: column
.home_room
  display: flex
  padding: 0
  margin: 0
  justify-content: flex-start
  flex-wrap: wrap
  align-content: flex-start
  grid-gap: 5px

.home_filter
  display: flex
  background-color: #FBFCFC
  margin-bottom: 15px
  padding: 5px
  border-radius: 5px
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px

.floor_filter
  display: flex
  justify-content: center
  text-align: center
  align-items: center

  &_title
    color: #183153
    font-weight: 600
    font-size: 16px
    margin-right: 10px
  &_block
    width: 80px  
</style>