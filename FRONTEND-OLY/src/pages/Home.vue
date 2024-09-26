<template>
  <v-card class="d-flex justify-center align-center mx-auto" max-width="300">
    <h1 class="font-weight-black text-h1 " >OLy</h1>
    <v-list :items="></v-list>
  </v-card>
</template>

<script lang="ts" setup>
import { Product } from '@/entity/product';
import { User } from '@/entity/user';

  const state = reactive({
    
  })

  const user: User = {
      id: 1,
      name: 'nome',
      email: 'user@mail.com',
  }

  const produts: Product[] = [
    {
      id: 1,
      name: 'nome',
      description: 'description',
      price: 10.00,
      category: 'category',
      owner: user
    },
    {
      id: 1,
      name: 'nome',
      description: 'description',
      price: 10.00,
      category: 'category',
      owner: user
    },
    {
      id: 1,
      name: 'nome',
      description: 'description',
      price: 10.00,
      category: 'category',
      owner: user
    },
    {
      id: 1,
      name: 'nome',
      description: 'description',
      price: 10.00,
      category: 'category',
      owner: user
    }
  ]
</script>
  