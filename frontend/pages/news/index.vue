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

<!--
🔄 전체 흐름 요약
사용자가 /news 메뉴 클릭
↓

브라우저 → CloudFront → Lambda@Edge → news.mjs SSR 핸들러 실행
↓

SSR 실행 중 useFetch('/api/news')가 호출됨
↓

Lambda@Edge SSR 서버가 백엔드 API (/api/news)를 호출해 데이터 가져옴
↓

HTML 조립 → 브라우저로 응답
-->