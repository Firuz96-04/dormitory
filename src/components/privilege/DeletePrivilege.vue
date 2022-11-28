<template>
  <q-card style="min-width:300px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Удалить</div>
          <q-space />
          <q-btn icon="close" @click="closeModal" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
        <div class="delete_block">
           Вы хотите удалить привилегию <span>{{this.privilegeObj?.name}}</span>
        </div>
          <br/>
          <div class="style_submit">
            <q-btn color="red" no-caps label="Удалить" class="" />
          </div>
        </q-card-section>
      </q-card>
</template>

<script>
export default {
    emits:["close"],

    props:{
        privilegeObj: {
            type: Object,
            required: true 
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        }
    },
    
    mounted() {
        console.log(this.privilegeObj)
    }
}
</script>

<style lang="sass" scoped>
.style_submit
  display: flex
  justify-content: flex-end

.delete_block
    font-size: 16px
    
    span
        font-weight: 600      
</style>