<script setup>
const { data: notices } = await useFetch('/api/notice')
</script>

<template>
  <div>
    <h1>공지사항</h1>
    <!-- 글쓰기 버튼 -->
    <div style="margin-bottom: 16px;">
      <NuxtLink to="/notice/write">
        <button>글쓰기</button>
      </NuxtLink>
    </div>
    <ul>
      <li v-for="notice in notices" :key="notice.id">
        {{ notice.title }} - {{ notice.createdAt }}
      </li>
    </ul>
  </div>
</template>
