<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";
import type { Notice } from "@/types/notice";

const route = useRoute();
const router = useRouter();

const id = computed(() => route.params.id);
const mode = computed(() => {
  if (id.value === "new") return "write";
  return route.query.mode === "edit" ? "edit" : "read";
});

const title = ref("");
const content = ref("");
const error = ref<Error | null>(null);

const fetchNotice = async () => {
  if (mode.value === "read" || mode.value === "edit") {
    try {
      const data = await $fetch<Notice>("/api/notice", {
        method: "POST",
        body: {
          action: "select",
          payload: { id: id.value },
        },
      });
      title.value = data.title;
      content.value = data.content;
    } catch (err: any) {
      error.value = err;
    }
  }
};

await fetchNotice();

const submit = async () => {
  try {
    if (mode.value === "write") {
      await $fetch("/api/notice", {
        method: "POST",
        body: {
          action: "insert",
          payload: {
            title: title.value,
            content: content.value,
          },
        },
      });
      alert("등록 완료!");
      router.push("/notice");
    } else if (mode.value === "edit") {
      await $fetch("/api/notice", {
        method: "POST",
        body: {
          action: "update",
          payload: {
            id: id.value,
            title: title.value,
            content: content.value,
          },
        },
      });
      alert("수정 완료!");
      router.push(`/notice/${id.value}`);
    }
  } catch (err: any) {
    error.value = err;
  }
};

const deleteNotice = async () => {
  if (!confirm('정말 삭제하시겠습니까?')) return

  try {
    await $fetch('/api/notice', {
      method: 'POST',
      body: {
        action: 'delete',
        payload: { id: id.value },
      },
    })
    alert('삭제 완료!')
    router.push('/notice')
  } catch (err: any) {
    error.value = err
  }
}
</script>

<template>
  <div>
    <h1 v-if="mode === 'write'">공지사항 작성</h1>
    <h1 v-else-if="mode === 'edit'">공지사항 수정</h1>
    <h1 v-else>공지사항 상세</h1>

    <template v-if="mode === 'read'">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <div style="display: flex; gap: 1rem">
        <button @click="() => router.push({ query: { mode: 'edit' } })">
          ✏️ 수정하기
        </button>
        <button @click="deleteNotice" style="color: red">🗑 삭제하기</button>
      </div>
    </template>

    <template v-else>
      <input v-model="title" placeholder="제목" />
      <textarea v-model="content" placeholder="내용" />
      <button @click="submit">
        {{ mode === "write" ? "등록" : "수정 완료" }}
      </button>
    </template>

    <div v-if="error">
      <p style="color: red">에러: {{ error.message }}</p>
    </div>
  </div>
</template>
