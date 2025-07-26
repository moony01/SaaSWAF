<script setup>
const { data: notices } = await useFetch('/api/notice')
</script>

<template>
  <div>
    <h1>공지사항</h1>
    <ul>
      <li v-for="notice in notices" :key="notice.id">
        {{ notice.title }} - {{ notice.createdAt }}
      </li>
    </ul>
  </div>
</template>
