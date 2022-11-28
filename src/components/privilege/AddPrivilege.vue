<template>
      <q-card style="min-width:300px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Добавить</div>
          <q-space />
          <q-btn icon="close" @click="closeModal" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="addHandle">
                <q-input outlined v-model="privilege.name" dense label="Привилегия" class="q-mb-sm"  />
                 <q-input
                    v-model="privilege.description"
                    outlined
                    clearable
                    type="textarea"
                    color="blue-12"
                    label="Описание"
                    class="q-mb-sm"
                    dense
                  />
                  <div class="style_submit">
                      <q-btn color="primary" type="submit" no-caps label="Добавит" />
                  </div>
          </q-form>
        </q-card-section>

      </q-card>
</template>

<script>
export default {
    emits:["close"],
    data() {
        return {
            privilege: {
              name: '',
              description: ''
            }
        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        },
        addHandle() {
            
        }
    },


    
}
</script>

<style lang="sass" scoped>
.style_submit
  display: flex
  justify-content: flex-end
</style>