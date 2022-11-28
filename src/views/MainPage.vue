<template>
  <q-layout view="lHh Lpr lFf">
    <my-header/>
    <sidebar/>
    <q-page-container>
      <!-- <keep-alive> -->
        <router-view />
      <!-- </keep-alive> -->
    </q-page-container>
  </q-layout>
</template>

<script>

import Header from './layouts/Header.vue';
import Sidebar from './layouts/Sidebar.vue';
export default {
    components:{
        'sidebar': Sidebar,
        'my-header': Header,
    }
};
</script>

<style></style>
