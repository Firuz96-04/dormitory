<template>
  <div class="main">
    <router-view/>
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
.main
  padding: 10px 30px
  background-color: #ffe
</style>