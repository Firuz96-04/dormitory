<template>
  <div class="principal">
    <div class="principal_filter"></div>
    <div class="principal_table">
        <q-table
          class="my-sticky-virtscroll-table"
          :virtual-scroll-sticky-size-start="48"
          row-key="index"
          title="Привилегии"
          virtual-scroll
          :rows-per-page-options="[0]"
          :rows="getAllPrincipals"
          dense
          :columns="columns">
          <template v-slot:top-right>
            <div>
              <q-btn @click="openModal" color="light-green-6" label="Добавить" dense no-caps />
            </div>
          </template>
          <template v-slot:top-left> </template>
          <template v-slot:header="props">
            <q-tr>
              <q-th :props="props" key="index" rowspan="1">#</q-th>
              <q-th :props="props" key="name" rowspan="1">Имя</q-th>
              <q-th :props="props" key="last_name" rowspan="1">Фамилия</q-th>
              <q-th :props="props" key="phone" rowspan="1">Телефон</q-th>
              <q-th :props="props" key="address" rowspan="1">Адрес</q-th>
              <q-th
                :props="props"
                key="actions"
                rowspan="1"
                style="text-align: center"
              ></q-th>
            </q-tr>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="index">{{ props.rowIndex + 1 }}</q-td>
              <q-td key="name" :props="props">
                {{ props.row.name }}
              </q-td>
               <q-td key="last_name" :props="props">
                {{ props.row.last_name }}
              </q-td>
               <q-td key="phone" :props="props">
                {{ props.row.phone }}
              </q-td>
               <q-td key="address" :props="props">
                {{ props.row.address }}
              </q-td>
              <q-td key="actions" :props="props">
                  <q-icon name="edit" size="sm" color="orange" class="table_action_icon"  @click="editHandle(props.row)" />
                  <q-icon name="delete" size="sm"  color="red" class="table_action_icon"  @click="deleteHandle(props.row)"/>
                
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>

     
  <teleport to="body">
      <q-dialog v-model="addModal" persistent>
          <add-principal @close="closeModal"/>
      </q-dialog>
      <q-dialog v-model="editModal" persistent>
          <edit-principal :principalObj="principalObj" @close="closeModal"/>
      </q-dialog>
      <q-dialog v-model="deleteModal">
          <delete-principal :principalObj="principalObj" @close="closeModal"/>
      </q-dialog>
  </teleport>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddPrincipal from '../components/principal/AddPrincipal.vue'
import EditPrincipal from '../components/principal/EditPrincipal.vue'
import DeletePrincipal from '../components/principal/DeletePrincipal.vue'
export default {
  components: {
   'add-principal': AddPrincipal,
   'edit-principal': EditPrincipal,
   'delete-principal': DeletePrincipal
  },
  data() {
    return {
      addModal: false,
      editModal: false,
      deleteModal: false,
      principalObj: null,
      columns: [
        {
          name: "index",
          label: "#",
          field: "index",
          align: "left",
        },
        {
          name: "name",
          required: true,
          field: "name",
          align: "left",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "last_name",
          required: true,
          field: "last_name",
          align: "left",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "phone",
          required: true,
          field: "phone",
          align: "left",
          field: (row) => row.phone,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "address",
          required: true,
          field: "address",
          align: "left",
        },
        { name: "actions" },
      ],
      my_arr : [
        {name:'aaaaa', last_nameL:'bbbbb',phone:'22222222', address:'12512312dscsd'},
        {name:'aaaaa', last_nameL:'bbbbb',phone:'22222222', address:'12512312dscsd'},
        {name:'aaaaa', last_nameL:'bbbbb',phone:'22222222', address:'12512312dscsd'},
        {name:'aaaaa', last_nameL:'bbbbb',phone:'22222222', address:'12512312dscsd'}
      ]
    };
  },
  methods: {
    ...mapActions("principal", ["setAllPrincipal"]),

    closeModal() {
      this.addModal=false
      this.editModal=false
      this.deleteModal=false
    },

    openModal() {
      this.addModal=true
      console.log('1111')
      console.log(this.addModal)
    },
    editHandle(obj) {
      this.editModal = true
      this.principalObj = obj
    },
    deleteHandle(obj) {
      this.deleteModal=true
      this.principalObj = {
        id: obj.id,
        name: obj.name + ' ' + obj.last_name
      }
      // console.log(obj)
    }
  },
  computed: {
    ...mapGetters("principal", ["getAllPrincipals"]),
  },

  mounted() {
    this.setAllPrincipal();
  },
};
</script>

<style lang="sass" scoped>
.principal
  &_table
    padding: 10px 100px

table
  th
    font-weight: 600
    font-size: 18px

  td
    font-size: 14px

</style>