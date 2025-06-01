<template>
  <div>
    <h1>Board List</h1>
    <NuxtLink to="/board/write">글쓰기</NuxtLink>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/board/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getBoardList } from '@/services/api'

const posts = ref([])

onMounted(async () => {
  posts.value = await getBoardList()
})
</script>
