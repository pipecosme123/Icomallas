<script>
import axios from "@/config/axios";
import { formatoFecha } from "@/helpers/formatDate";
import { ref } from "vue";

const clientes = ref([]);
const showForm = ref(false);
const editarData = ref({});

export default {
  data() {
    return {
      formatoFecha,
      editarData,
      clientes,
      showForm,
    };
  },
  created() {
    this.consultarData();
  },
  methods: {
    mostrarForm() {
      showForm.value = !showForm.value;
    },
    consultarData() {
      axios
        .get("/clientes/consultar")
        .then(({ data }) => (clientes.value = data))
        .catch((err) => console.log(err));
    },
    editarDataId(id) {
      const get = clientes.value.filter((cliente) => cliente.id === id)[0];
      editarData.value = get;
      this.mostrarForm();
    },
    eliminarDato(id) {
      axios
        .delete(`/clientes/borrar/${id}`)
        .then(({ data }) => {
          console.log(data);
          this.consultarData();
        })
        .catch((err) => console.log(err));
    },
    submitForm(data) {
      console.log(data);
      if (!editarData.value.id) {
        axios
          .post("/clientes/crear", data)
          .then(({}) => {
            this.mostrarForm();
            this.consultarData();
          })
          .catch((err) => console.log(err));
      } else {
        axios
          .put(`/clientes/actualizar/${editarData.value.id}`, data)
          .then(({}) => {
            this.mostrarForm();
            this.consultarData();
          })
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid d-flex flex-row justify-content-between">
      <h1>Mis clientes</h1>
      <button
        type="button"
        class="btn btn-outline-danger"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        v-on:click="mostrarForm"
      >
        Cerrar Sesión
      </button>
    </div>
  </nav>

  <div class="container">
    <div class="w-100 my-3 d-flex flex-row justify-content-between">
      <h4 class="text-success" v-show="showForm">Añadir cliente nuevo</h4>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        v-on:click="mostrarForm"
        v-show="!showForm"
      >
        Añadir cliente nuevo
      </button>
    </div>
    <div class="form" v-if="showForm">
      <FormKit
        type="form"
        @submit="submitForm"
        :actions="false"
        :class="needs - validation"
      >
        <div class="mb-3">
          <label for="nit" class="form-label">NIT del cliente:</label>
          <FormKit
            type="number"
            name="nit"
            validation="required|number|min:1"
            placeholder="NIT"
            :value="editarData.nit"
            :classes="{
              input: 'form-control',
              outer: 'mb-3',
              label: 'form-label',
              message: 'form-text text-danger',
            }"
            :validation-messages="{
              required: 'Este campo es obligatório.',
              number:
                'Solo se permiten números enteros positivos mayores que 0',
            }"
          />
        </div>

        <div class="mb-3">
          <label for="razonSocial" class="form-label">Razón social:</label>
          <FormKit
            type="text"
            name="razonSocial"
            validation="required"
            placeholder="Razón social"
            :value="editarData.razonSocial"
            :classes="{
              input: 'form-control',
              outer: 'mb-3',
              label: 'form-label',
              message: 'form-text text-danger',
            }"
            :validation-messages="{
              required: 'Este campo es obligatório.',
            }"
          />
        </div>

        <div class="mb-3">
          <label for="correo" class="form-label">Correo electrónico:</label>
          <FormKit
            type="email"
            name="correo"
            validation="required|email"
            placeholder="example@domain.com"
            :value="editarData.correo"
            :classes="{
              input: 'form-control',
              outer: 'mb-3',
              label: 'form-label',
              message: 'form-text text-danger',
            }"
            :validation-messages="{
              required: 'Este campo es obligatório.',
              email: 'El correo electrónico no coincide con el estandar.',
            }"
          />
        </div>

        <div class="mb-3">
          <label for="telefono" class="form-label">Teléfono:</label>
          <FormKit
            type="number"
            name="telefono"
            validation="required|number|length:7"
            placeholder="Teléfono"
            :value="editarData.telefono"
            :classes="{
              input: 'form-control',
              outer: 'mb-3',
              label: 'form-label',
              message: 'form-text text-danger',
            }"
            :validation-messages="{
              required: 'Este campo es obligatório.',
              length: 'El telefono debe contar con mínimo 7 dígitos.',
            }"
          />
        </div>

        <div class="mb-3">
          <label for="estado" class="form-label">Estado:</label>
          <FormKit
            type="select"
            name="estado"
            validation="required"
            placeholder="Selecciona un estado"
            :value="editarData.estado"
            :options="['Activo', 'Inactivo']"
            :classes="{
              input: 'form-control',
              outer: 'mb-3',
              label: 'form-label',
              message: 'form-text text-danger',
            }"
            :validation-messages="{
              required: 'Este campo es obligatório.',
            }"
          />
        </div>

        <div class="d-flex flex-row">
          <button type="submit" class="mx-1 btn btn-primary w-100">
            Añadir
          </button>
          <button
            @click="mostrarForm"
            class="mx-1 btn btn-outline-secondary w-100"
          >
            Cancelar
          </button>
        </div>
      </FormKit>
    </div>

    <table class="table table-striped align-middle" v-show="!showForm">
      <thead>
        <tr>
          <th scope="col text-center">ID</th>
          <th scope="col text-center">NIT</th>
          <th scope="col text-center">Razon Social</th>
          <th scope="col text-center">Correo Electrónico</th>
          <th scope="col text-center">Teléfono</th>
          <th scope="col text-center">Estado</th>
          <th scope="col text-center">Fecha de creación</th>
          <th scope="col text-center" colspan="2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cliente, index) in clientes" :key="{ index }">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ cliente.nit }}</td>
          <td>{{ cliente.razonSocial }}</td>
          <td>{{ cliente.correo }}</td>
          <td>{{ cliente.telefono }}</td>
          <td>{{ cliente.estado }}</td>
          <td>{{ this.formatoFecha(cliente.createdAt) }}</td>
          <td>
            <button
              class="btn btn-outline-warning"
              @click="editarDataId(cliente.id)"
            >
              Editar
            </button>
          </td>
          <td>
            <button
              class="btn btn-outline-danger"
              @click="eliminarDato(cliente.id)"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
