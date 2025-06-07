<script setup>
import { ref, onMounted } from 'vue'

const products = ref([])

onMounted(async () => {
  const res = await fetch('/api/products')
  products.value = await res.json()
})
</script>

<template>
  <div>
    <h1>Products (SSG + Client API)</h1>
    <ul>
      <li v-for="p in products" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>
