<template>
    <div>
        <q-table title="Informacion de los usuarios" :rows="rows" :columns="columns" row-key="name" />
    </div>
</template>
  
<script>
import { defineComponent, ref, onMounted } from 'vue';
import { getUsers } from '../api/api';

const rows = ref([]);

const columns = [
    { name: 'nombres', label: 'Nombres', align: 'left', field: "nombres", sortable: true },
    { name: 'documento', label: 'Documento', align: 'center', field: 'documento', sortable: true },
    { name: 'lugar_origen', label: 'Lugar de Origen', field: 'lugar_origen', sortable: true },
    { name: 'empresa', label: 'Empresa', field: 'empresa' },
    { name: 'cargo', label: 'Cargo', field: 'cargo' },
    { name: 'salario', label: 'Salario', field: 'salario' },
    { name: 'jefe_inmediato', label: 'Jefe Inmediato', field: 'jefe_inmediato', sortable: true },
    { name: 'telefono', label: 'Telefono', field: 'telefono', sortable: true },
    { name: 'correo_personal', label: 'Correo Personal', field: 'correo_personal', sortable: true },
    { name: 'correo_corporativo', label: 'Correo Corporativo', field: 'correo_corporativo', sortable: true },
];

export default defineComponent({
    name: 'DataTable',

    components: {},

    setup() {
        onMounted(async() => {
            const { data } = await getUsers();
            rows.value = data;
        });

        return {
            columns,
            rows
        }
    }
});
</script>  