<script setup>
import { ref } from 'vue'

const title = ref('')
const content = ref('')

const submitNotice = async () => {
  await fetch('/api/notice', {
    method: 'POST',
    body: JSON.stringify({ title: title.value, content: content.value }),
  })
  alert('등록 완료!')
}
</script>

<template>
  <div>
    <h1>공지사항 작성</h1>
    <input v-model="title" placeholder="제목" />
    <textarea v-model="content" placeholder="내용" />
    <button @click="submitNotice">등록</button>
  </div>
</template>
