<script setup>
const { data: articles } = await useFetch('/api/news')  // SSR 시점 API (S3 원본 불러오기)
</script>

<template>
  <div>
    <h1>News Page (SSR Static)</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>
