<template>
  <h1>City</h1>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions('city',['setAllCities'])
  },
  computed: {
    ...mapGetters('city',['getAllCities'])
  },

  mounted() {
    this.setAllCities()
  }
}
</script>

<style lang="sass" scoped>

</style>