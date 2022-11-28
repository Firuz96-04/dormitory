<template>
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Удалить</div>
          <q-space />
          <q-btn icon="close" @click="closeModal" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
        <div class="delete_block">
            Вы хотите удалить коменданта <span>{{this.principalObj.name}}</span>
        </div>
          <br/>
          <div class="delete_block">
            <q-btn color="red" no-caps label="Удалить" class="" />
          </div>
        </q-card-section>
      </q-card>
</template>

<script>
export default {
    emits:["close"],
    props:{
      principalObj:{
        type: Object,
        required: true
      }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        }
    },

    mounted() {
      console.log(this.principalObj)
    }
}
</script>

<style lang="sass" scoped>
.delete_block
    font-size: 16px  
    span
        font-weight: 600

.style_submit
  display: flex
  justify-content: flex-end            
</style>