<template>
  <div class="main_student">
    <card-student v-for="(item, index) in getAllRoomStudents" :key="index"
      :country="item.country"
      :faculty="item.faculty"
      :phone="item.phone"
      :name="item.name"
      :gender="item.gender"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CardStudent from '../components/CardStudent.vue'
export default {

  components: {
    'card-student': CardStudent
  },
  data() {
    return {
      room_id: null
    }
  },
  methods: {
      ...mapActions('roomStudent',['setAllBuildHomes'])
  },

  computed:{
      ...mapGetters('roomStudent',['getAllRoomStudents'])
  },
  mounted() {
    this.room_id = this.$route.params.room
    console.log(this.room_id)
    this.setAllBuildHomes({
      room_id: this.room_id
    })
  },
}
</script>

<style lang="sass" scoped>
.main_student
  display: flex
  flex-wrap: wrap
</style>