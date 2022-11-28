<template>
  <h1>Building</h1>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions('building',['setAllBuildings'])
  },
  computed: {
    ...mapGetters('building',['getAllBuildings'])
  },

  mounted() {
      this.setAllBuildings()
  }
}
</script>

<style>

</style>