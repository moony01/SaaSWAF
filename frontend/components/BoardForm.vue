<template>
  <form @submit.prevent="submitForm">
    <input v-model="title" placeholder="제목" required />
    <textarea v-model="content" placeholder="내용" required></textarea>
    <button type="submit">등록</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { submitBoard } from '@/services/api'

const title = ref('')
const content = ref('')

const submitForm = async () => {
  await submitBoard({ title: title.value, content: content.value })
  alert('등록 완료!')
}
</script>
