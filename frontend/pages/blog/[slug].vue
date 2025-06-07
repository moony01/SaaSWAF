<script setup>
const route = useRoute()
const { data: post } = await useFetch(`/api/blog/${route.params.slug}`)
</script>

<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
  </div>
</template>
