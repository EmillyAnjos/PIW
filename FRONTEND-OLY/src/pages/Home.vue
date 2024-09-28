<script lang="ts">
import ListProduct from '@/components/ListProduct.vue'
import User from '@/types'

const users = ref([] as User[])

</script>

<template>
    <div>
        <routerlink to = "/Login" tag="button"> LOGIN </routerlink>
    </div>

</template>

<style>
    .modal {
  display: block;
}

td > .btn {
  margin: 0px 5px  ;
}
</style>