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
        .then((data) => {
          alert("Usuario creado correctamente");
          this.$router.push(link.LOGIN);
        })
        .catch((err) => {
          alert(err.response.data);
        })
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="min-vh-100 row justify-content-center align-items-center">
      <div class="col-md-6 card p-5">
        <h1 class="text-center mb-4">Registrar Usuario</h1>

        <FormKit type="form" @submit="submitForm" :actions="false" class="needs-validation">
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre de usuario</label>
            <FormKit type="text" name="nombre" placeholder="Nombre" validation="required" validation-visibility="submit"
              :validation-messages="{
                required: 'Este campo es obligatório.',
              }" :classes="{
                input: 'form-control',
                outer: 'mb-3',
                label: 'form-label',
                message: 'form-text text-danger',
              }" />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <FormKit type="email" name="email" placeholder="example@domain.com" validation="required|email"
              validation-visibility="submit" :validation-messages="{
                required: 'Este campo es obligatório.',
                email: 'El correo electrónico no coincide con el estandar.',
              }" :classes="{
                input: 'form-control',
                outer: 'mb-3',
                label: 'form-label',
                message: 'form-text text-danger',
              }" />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <FormKit type="password" name="password" placeholder="********" validation="required|length:8"
              validation-visibility="submit" :validation-messages="{
                required: 'Este campo es obligatório.',
                length: 'Debe la contraseña debe tener mínimo 8 caracteres'
              }" :classes="{
                input: 'form-control',
                outer: 'mb-3',
                label: 'form-label',
                message: 'form-text text-danger',
              }" />
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
