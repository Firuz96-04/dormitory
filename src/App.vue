<template>
  <div class="q-pa-md">
    <main-page/>
  </div>
</template>
<script>
import MainPage from './views/MainPage.vue'
import Login from './views/Login.vue'
export default {
  components:{
    'main-page': MainPage,
    'login': Login
  },
  data() {
    return {
  
    }
  },
}
</script>

<style lang="sass">
* 
  box-sizing: border-box
  margin: 0
  padding: 0
</style>
