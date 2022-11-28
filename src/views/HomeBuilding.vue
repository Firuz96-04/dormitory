<template>
<div class="main_home">
      <card-building v-for="(item, index) in getAllBuildHomes" :key="index"
          :buildName="item.name_build"
          :floorSize="item.floor_size"
          :totalRooms="item.total_rooms"
          :busyRooms="item.busy_rooms"
          :freeRooms="item.free_rooms"
          :allStudents="item.all_student"
          :women="item.women"
          :men="item.men"
      />
</div>      
</template>

<script>

import CardBuilding from '@/components/CardBuilding.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
 components:{
    CardBuilding
  },

  methods: {
    ...mapActions('buildingHome',['setAllBuildHomes'])
  },
  computed: {
    ...mapGetters('buildingHome',['getAllBuildHomes'])
  },

  mounted() {
      this.setAllBuildHomes()
  }
}
</script>

<style lang="sass" scoped>
.main_home
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  margin-top: 25px
</style>