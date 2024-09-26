<template>
  <v-container class="h-100 d-flex justify-center align-center">
    <v-card class="w-75 border rounded-lg elevation-2">
      <v-card-title>Seja bem-vindo 🤓 </v-card-title>
      <v-form class="pa-10">
        <v-text-field label="Nome" v-model="state.nome"/>
        <v-text-field label="Email" type="email" v-model="state.email"/>
        <v-text-field label="Senha" type="password" v-model="state.senha"/>
        <v-card-actions class="justify-space-evenly">
          <v-btn :to="{name: 'Home'}" color="deep-purple" variant="flat" class="w-25">
            Entrar
          </v-btn>
          <v-btn :to="{name: 'Home'}" color="deep-purple" variant="flat" class="w-25">
            Cadastrar
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card >
  </v-container>  


</template>

<script lang="ts" setup>
  const state = reactive({
    nome: "",
    email: "",
    senha: ""
  })
</script>
