<template>
      <q-card style="min-width:300px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Добавить</div>
          <q-space />
          <q-btn icon="close" @click="closeModal" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="addHandle">
                <q-input outlined v-model="principal.name" dense label="Имя" class="q-mb-sm"  />
                <q-input outlined v-model="principal.last_name" dense label="Фамилия" class="q-mb-sm" />
                <q-input outlined v-model="principal.phone" dense label="Телефон" class="q-mb-sm" />
                 <q-input
                    v-model="principal.address"
                    outlined
                    clearable
                    type="textarea"
                    color="blue-12"
                    label="Адрес"
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
import { mapGetters, mapActions } from 'vuex'

export default {
    emits:["close"],

    data() {
        return {
            principal: {
              name: '',
              last_name: '',
              phone: '',
              address: ''
            },
        }
    },

    methods:{
       ...mapActions("principal", ["setAllPrincipal", "addPrincipal"]),

        closeModal() {
            this.$emit('close')
        },

        addHandle() {
          this.addPrincipal({
            principal: this.principal,
            cb: this.closeModal
          })
        }

    },

    mounted() {
        console.log(this.setAllPrincipal())
       },
  
 }
</script>

<style lang="sass" scoped>
.style_submit
  display: flex
  justify-content: flex-end
</style>