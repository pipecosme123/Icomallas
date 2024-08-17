<script>
import axios from "@/config/axios";
import link from "../constants/links";
import links from "../constants/links";

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
        .post("/login", data)
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          this.$router.push(links.HOME);
        })
        .catch((err) => {
          alert(err.response.data)
          console.log(err)
        });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="min-vh-100 row justify-content-center align-items-center">
      <div class="col-md-6 card p-5">
        <h1 class="text-center mb-4">Iniciar sesión</h1>

        <FormKit
          type="form"
          @submit="submitForm"
          :actions="false"
          class="needs-validation"
          novalidate
        >
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <FormKit
              type="email"
              name="email"
              validation="required"
              :validation-messages="{
                required: 'Este campo es obligatório.',
              }"
              placeholder="example@domain.com"
              :classes="{
                input: 'form-control',
                outer: 'mb-3',
                label: 'form-label',
                message: 'form-text text-danger',
              }"
            />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <FormKit
              type="password"
              name="password"
              validation="required"
              :validation-messages="{
                required: 'Este campo es obligatório.',
              }"
              placeholder="********"
              :classes="{
                input: 'form-control',
                outer: 'mb-3',
                label: 'form-label',
                message: 'form-text text-danger',
              }"
            />
          </div>

          <button type="submit" class="btn btn-primary w-100">
            Iniciar sesión
          </button>

          <p class="mt-3 text-center">
            Si no estás registrado,
            <router-link :to="{ name: link.REGISTRAR }">
              haz clic aquí.
            </router-link>
          </p>
        </FormKit>
      </div>
    </div>
  </div>
</template>
