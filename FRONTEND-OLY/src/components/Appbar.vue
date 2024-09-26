<template>
 <v-app-bar :elevation="15"class="bg-deep-purple">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title class="text-primary">OLy</v-app-bar-title>

  <template v-slot:append>  
    <v-btn icon="mdi-cart-outline"></v-btn>

    <v-btn icon="mdi-magnify"></v-btn>

    <v-btn icon="mdi-dots-vertical"></v-btn>
  </template>
</v-app-bar>
</template>
