<script>
import axios from "@/config/axios";
import link from "../constants/links";

export default {
  data() {
    return {
      link,
    };
  },
  methods: {
    submitForm(data) {
      console.log(data);
      axios
        .post("/registrar", data)
        .then((data) => console.log(data))
        .catch((data) => console.log(data))
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="min-vh-100 row justify-content-center align-items-center">
      <div class="col-md-6 card p-5">
        <h1 class="text-center mb-4">Registrar Usuario</h1>

        <FormKit
          type="form"
          @submit="submitForm"
          :actions="false"
          class="needs-validation"
          novalidate
        >
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre de usuario</label>
            <FormKit
              type="text"
              name="nombre"
              validation="required"
              placeholder="Nombre"
              :classes="{
                input: 'form-control',
                outer: 'mb-3',
                label: 'form-label',
                message: 'form-text text-danger',
              }"
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <FormKit
              type="email"
              name="email"
              validation="required"
              placeholder="example@domain.com"
              :classes="{
                input: 'form-control',
                outer: 'mb-3',
                label: 'form-label',
                message: 'form-text text-danger',
              }"
            />
          </div>

          <div class="row">
            <div class="w-50">
              <label for="password" class="form-label">Contraseña</label>
              <FormKit
                type="password"
                name="password"
                validation="required|min:8"
                placeholder="********"
                :classes="{
                  input: 'form-control',
                  outer: 'mb-3',
                  label: 'form-label',
                  message: 'form-text text-danger',
                }"
              />
            </div>
            <div class="w-50">
              <label for="confirmPassword" class="form-label"
                >Confirmar Contraseña</label
              >
              <FormKit
                type="password"
                name="confirmPassword"
                validation="required|min:8"
                placeholder="********"
                :classes="{
                  input: 'form-control',
                  outer: 'mb-3',
                  label: 'form-label',
                  message: 'form-text text-danger',
                }"
              />
            </div>
          </div>

          <button type="submit" class="btn btn-primary w-100">
            Registrarse
          </button>

          <p class="mt-3 text-center">
            <router-link :to="{ name: link.LOGIN }">
              Iniciar sesión
            </router-link>
          </p>
        </FormKit>
      </div>
    </div>
  </div>
</template>
