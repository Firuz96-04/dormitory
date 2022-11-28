<template>
  <div class="main_privilege">
    <div class="main_privilege_filter">1</div>
    <div class="main_privilege_table">
      <div class="q-pa-md">
    <q-table
      class="my-sticky-virtscroll-table"
      virtual-scroll
      :rows-per-page-options="[0]"
      :virtual-scroll-sticky-size-start="48"
      row-key="index"
      title="Привилегии"
      :rows="getAllPrivileges"
      dense
      :columns="columns">
      <template v-slot:top-right>
        <div>
          <q-btn color="light-green-6"  label="Добавить" @click="openModal" no-caps/>
        </div>
      </template>
      <template v-slot:top-left>
        
      </template>
      <template v-slot:header="props">
          <q-tr>
              <q-th :props="props" key="index" rowspan="1" >#</q-th>
              <q-th :props="props" key="name" rowspan="1">Привилегия</q-th>
              <q-th :props="props" key="description" rowspan="1">Описание</q-th>
              <q-th :props="props" key="actions" rowspan="1" style="text-align:center"></q-th>
           </q-tr>
       </template>  
    <template v-slot:body="props">       
        <q-tr :props="props">
           <q-td key="index" >{{props.rowIndex+1}}</q-td>
           <q-td key="name" :props="props">
               {{ props.row.name}}
          </q-td>
             <q-td key="description" :props="props">
               {{ props.row.description}}
          </q-td>
            <q-td key="actions" :props="props">
                <q-icon name="edit" size="sm" color="orange" class="table_action_icon"  @click="editHandle(props.row)" />
                <q-icon name="delete" size="sm"  color="red" class="table_action_icon"  @click="deleteHandle({id:props.row.id, name:props.row.name})"/>
            </q-td>
        </q-tr>
      </template>  
    </q-table>
</div>
    </div>
  </div>
  <teleport to="body">

    <q-dialog v-model="addModal" persistent>
          <add-privilege @close="closeModal"/>
    </q-dialog>
    
    <q-dialog v-model="editModal" persistent>
          <edit-privilege :privilegeObj="privilegeObj" />
    </q-dialog>
    
    <q-dialog v-model="deleteModal">
          <delete-privilege :privilegeObj="privilegeObj" />
    </q-dialog>

  </teleport>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import DeletePrivilege from '../components/privilege/DeletePrivilege.vue'
const AddPrivilege = () => '../components/privilege/AddPrivilege.vue'
const EditPrivilege = () => '../components/privilege/EditPrivilege.vue'
const DeletePrivilege = () => import('../components/privilege/DeletePrivilege.vue')
export default {
    components: {
      'add-privilege': AddPrivilege,
      'edit-privilege': EditPrivilege,
      'delete-privilege': DeletePrivilege
    },
    data() {
        return {
          addModal: false,
          editModal: false,
          deleteModal: false,
          privilegeObj: {},
          columns : [
      {
          name: 'index',
          label: '#',
          field: 'index',
          align:'left'
        },
        {
          name: 'name',
          required: true,
          label: 'привилегия',
          field: 'name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
         {
          name: 'description',
          required: true,
          label: 'привилегия',
          field: 'description',
          align: 'left',
  
        },
        {name:'actions'}
          ],
        }
    },
    methods: {
      ...mapActions('privilege',['setAllPrivileges']),

      openModal(){
        this.addModal = true
      },
      editHandle(obj) {
        this.editModal = true
        this.privilegeObj = obj
      },
      deleteHandle(obj) {
          this.deleteModal = true
          this.privilegeObj = obj
      },
      closeModal() {
        this.addModal = false
        this.editModal = false
        this.deleteModal = false
      }
    },
    computed: {
      ...mapGetters('privilege',['getAllPrivileges'])
    },
    
    mounted() {
      this.setAllPrivileges()
    }
}
</script>

<style lang="sass" scoped>
.main_privilege
  display: flex
  flex-direction: column
  background-color: #F2F3F7
  width: 100%

  &_filter
    padding: 10px
    background-color: #ddd

  &_table
    padding: 10px 100px

table
  th
    font-weight: 600
    font-size: 16px

  td
    font-size: 14px

</style>