<script setup>
const { data: posts } = await useFetch('/api/board')
</script>

<template>
  <div>
    <h1>Board</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/board/${post.slug}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
