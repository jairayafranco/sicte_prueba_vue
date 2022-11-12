<template>
    <div class="q-pb-xl">

        <q-form @submit="onSubmit" @reset="onReset" autocomplete="off">
            <div class="formulario q-gutter-sm">
                <q-input v-for="(input, index) in formInputs" v-bind:key="index" filled :label=input.label
                    :hint=input.hint v-model="formValues[input.model]" hide-hint :type=input.type lazy-rules
                    :disable="savingUser" :rules=requiredInput />
            </div>

            <div class="float-right">
                <q-btn label="Guardar" type="submit" color="primary" :disable="savingUser" />
                <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>

    </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
import { useQuasar } from 'quasar';
import { saveUser } from 'src/api/api';

const requiredInput = [val => val && val.length > 0 || 'Campo requerido'];

const savingUser = ref(false);

const formInputs = [
    { label: "Nombres", model: "nombres", hint: "Nombres y Apellidos", type: "text" },
    { label: "Documento", model: "documento", hint: "", type: "number" },
    { label: "Lugar de origen", model: "lugar_origen", hint: "", type: "text" },
    { label: "Empresa", model: "empresa", hint: "", type: "text" },
    { label: "Cargo", model: "cargo", hint: "", type: "text" },
    { label: "Salario", model: "salario", hint: "", type: "number" },
    { label: "Jefe Inmediato", model: "jefe_inmediato", hint: "", type: "text" },
    { label: "Telefono", model: "telefono", hint: "", type: "number" },
    { label: "Correo Personal", model: "correo_personal", hint: "", type: "email" },
    { label: "Correo Corporativo", model: "correo_corporativo", hint: "", type: "email" },
];

export default defineComponent({
    name: 'FormUser',

    components: {},

    setup() {
        const $q = useQuasar();

        const initialState = {
            nombres: '',
            documento: '',
            lugar_origen: '',
            empresa: '',
            cargo: '',
            salario: '',
            jefe_inmediato: '',
            telefono: '',
            correo_personal: '',
            correo_corporativo: '',
        };

        const formValues = reactive({ ...initialState });

        const onSubmit = async () => {
            savingUser.value = true;
            try {
                const response = await saveUser(formValues);
                $q.notify({
                    type: 'positive',
                    message: response.data.message
                });
                onReset();
            } catch (error) {
                $q.notify({
                    type: 'negative',
                    message: 'Error al guardar el usuario'
                });
            } finally {
                savingUser.value = false;
            }
        }

        const onReset = () => {
            Object.assign(formValues, initialState);
        }

        return {
            formValues,
            onSubmit,
            onReset,
            formInputs,
            requiredInput,
            savingUser
        }
    }
});
</script>

<style scoped>
@media (min-width: 768px) {
    .formulario {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0 20px;
    }
}
</style>