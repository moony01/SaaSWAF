<script setup lang="ts">
import { fetchNoticeList } from '@/services/noticeService'
import type { Notice } from '@/types/notice'

const config = useRuntimeConfig();

const { data: notices } = await useAsyncData<Notice[]>('notices', () =>
  fetchNoticeList(config)
)
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

