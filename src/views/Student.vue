<template>

  <div class="my_student">
    <q-icon name="tapas"/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {



  methods: {
  ...mapActions('student',['set_students'])
  },
  computed: {
    ...mapGetters('student',['getStudents'])
  },

  mounted() {
      this.set_students()
      console.log('eeeeeeeeee')
  }

}
</script>

<style lang="sass" scoped>
.my_student
  height: calc(100vh - 50px)
  background-color: #dde
</style>