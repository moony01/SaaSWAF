<template>
  <div>
    <Header />
    <nav>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/about">About</NuxtLink> |
      <NuxtLink to="/products">Products</NuxtLink> |
      <NuxtLink to="/services">Services</NuxtLink> |
      <NuxtLink to="/board">Board</NuxtLink> |
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
