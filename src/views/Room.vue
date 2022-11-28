<template>
  <h1>Room</h1>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      
    }
  },

  methods: {
    ...mapActions('room',['setAllRoom'])
  },
  computed:{
    ...mapGetters('room',['getAllRooms'])
  },

  mounted() {
      this.setAllRoom()
  }

}
</script>

<style>

</style>