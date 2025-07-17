<script setup>
const route = useRoute()
const { data: post } = await useFetch(`/api/board/${route.params.slug}`)
</script>

<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
  </div>
</template>
