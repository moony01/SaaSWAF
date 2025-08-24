<script setup lang="ts">
import type { Notice } from '@/types/notice'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const notices = ref<Notice[]>([])
const error = ref<Error | null>(null)

const fetchNotices = async () => {
  try {
    const data = await $fetch<Notice[]>('/api/notice', {
      method: 'POST',
      body: {
        action: 'select',  // ✅ RPC 스타일 명시적 분기
      },
    })
    notices.value = data
    error.value = null
  } catch (err: any) {
    error.value = err
  }
}

// SSR 시점 호출
await fetchNotices()

const goToWrite = () => {
  router.push('/notice/new')  // mode=write은 자동 분기 처리됨
}
</script>

<template>
  <div>
    <h1>공지사항</h1>

    <!-- 등록 버튼 -->
    <button @click="goToWrite">✏️ 새 공지 등록</button>

    <!-- 목록 -->
    <ul>
      <li v-for="notice in notices" :key="notice.id">
        <!-- 상세 페이지 링크 -->
        <NuxtLink :to="`/notice/${notice.id}`">
          {{ notice.title }} - {{ notice.createdAt }}
        </NuxtLink>
      </li>
    </ul>

    <!-- 다시 불러오기 -->
    <button @click="fetchNotices">🔄 다시 불러오기</button>

    <!-- 에러 메시지 -->
    <div v-if="error">
      <p style="color: red">에러 발생: {{ error.message }}</p>
    </div>
  </div>
</template>
