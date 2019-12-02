<template>
  <div id="Login">
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm8 md3>
        <h5 class="text-xs-center">{{ app }}</h5>
        <v-form ref="form" @submit="onSubmit" v-model="valid" lazy-validation>
          <v-text-field v-model="login.user" :rules="validUser" label="Usuario" required></v-text-field>
          <v-text-field
            v-model="login.password"
            :rules="validPassword"
            label="Contraseña"
            type="password"
            required
          ></v-text-field>
          <v-btn :disabled="!valid" block color="success" type="submit">Iniciar sesion</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator";
import { LoginToken } from "@/helpers/token";
import { MsgSuccess, MsgInfo } from "@/plugins/toastr";
import { AXIOS } from '@/plugins/axios';

@Component
export default class Login extends Vue {
  app = "hola";
  valid = true;
  login = {
    user: "",
    password: ""
  };
  snackbar = false;
  validUser = [(v:any) => !!v || "Usuario requerido"];
  validPassword = [(v:any) => !!v || "Contraseña requerida"];
  @Ref('form') readonly form!: any 
  validate() {
    if (this.form.validate()) {
      this.snackbar = true;
    }
  }
  async onSubmit(e:Event) {
    e.preventDefault();
    try {
      if (!this.valid) return MsgInfo("verifica tus datos");
      const res = await AXIOS.post("auth/login", this.login);
      LoginToken(
        res.data.token,
        () => {
          MsgSuccess("Iniciando sesion");
        },
        () => MsgInfo("Credenciales invalidas")
      );
    } catch (error) {
      console.log(error,'si');
      
    }
  }
}
</script>
<style lang="scss" scope>
#Login {
  .row {
    min-height: 100vh !important;
    width: 100% !important;
    padding: 1em !important;
  }
}
</style>