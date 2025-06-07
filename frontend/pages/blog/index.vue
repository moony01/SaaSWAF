<script setup>
const { data: posts } = await useFetch('/api/blog')
</script>

<template>
  <div>
    <h1>Blog Page (SSR Dynamic)</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
