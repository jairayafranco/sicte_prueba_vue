<template>
  <q-page>
    <div class="">
      <q-tabs v-model="tab" inline-label class="bg-primary text-white shadow-2">

        <q-tab name="crear_usuario" icon="person" label="Crear Usuario">
        </q-tab>
        <q-tab name="consultar_usuarios" icon="search" label="Consultar Usuarios">
        </q-tab>

      </q-tabs>

      <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="slide-right" transition-next="slide-left">

        <q-tab-panel name="crear_usuario">
          <FormUser />
        </q-tab-panel>
        <q-tab-panel name="consultar_usuarios">
          <DataTable />
        </q-tab-panel>

      </q-tab-panels>

    </div>
  </q-page>

</template>

<script>
import { defineComponent, ref } from 'vue'
import FormUser from '../components/FormUser.vue'
import DataTable from '../components/DataTable.vue'

export default defineComponent({
  name: 'IndexPage',

  components: {
    FormUser,
    DataTable
  },

  setup() {
    return {
      tab: ref('crear_usuario')
    }
  }
})
</script>
