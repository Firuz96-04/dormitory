<template>
  <q-header class="shadow-2 sibar_style">
    <q-toolbar>
      <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      <q-toolbar-title>Header</q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
    data() {
    return {
        drawer: false,
    }
},
};
</script>

<style lang="sass" scoped>
.sibar_style
  background-color: #CCCCFF
</style>
