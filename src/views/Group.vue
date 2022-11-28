<template>
  <h1>Group</h1>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions('group',['setAllGroups'])
  },
  computed: {
    ...mapGetters('group',[''])
  },

  mounted() {
      this.setAllGroups()
  }
}
</script>

<style>

</style>