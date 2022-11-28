<template>
      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :width="200"
        :breakpoint="500">

        <q-scroll-area class="fit my_style" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
             <router-link class="link_style" v-for="(item, index) in menu" :key="index" :to="{name:item.path}">
                <q-item :style="url_path==item.path ? 'background:red' : ''">
                  <q-item-section avatar >
                    <q-icon :name="item.icon" class="icon" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{item.title}}</q-item-label>
                  </q-item-section>
                </q-item>
              </router-link>
          </q-list>
        </q-scroll-area>
      </q-drawer>
</template>

<script>
export default {
    data() {
        return {
            url_path: '',
            drawer: false,
            miniState: true         
        }
    },
    computed:{
        menu() {
            return [
               {
                    path:'home-building',
                    icon:'home',
                    title:'Главная'
                },
                {
                    path:'booking',
                    icon:'add_home',
                    title:'Забронировать'
                },
                {
                    path:'student',
                    icon:'groups',
                    title:'Студенты'
                },
                {
                    path:'city',
                    icon:'place',
                    title:'Города'
                },
                {
                    path:'country',
                    icon:'public',
                    title:'Страны'
                },
                {
                    path:'group',
                    icon:'grid_view',
                    title:'Группы'
                },
                {
                    path:'faculty',
                    icon:'account_balance',
                    title:'Факультеты'
                },
                {
                    path:'room',
                    icon:'meeting_room',
                    title:'Комнаты'
                },
                {
                    path:'building',
                    icon:'apartment',
                    title:'Здании'
                },
                
                {
                    path:'principal',
                    icon:'person_4',
                    title:'Коменданты'
                },
                {
                    path:'privilege',
                    icon:'local_police',
                    title:'Привилегии'
                },
            ]
        }
    },

    mounted() {
      this.url_path = this.$route.name
    },
}
</script>

<style lang="sass" scoped>
.my_style
  background-color: #FCFCFC

.link_style
  font-weight: 700
  text-decoration: none
  color: #183153
.icon
  color: #183153  
</style>