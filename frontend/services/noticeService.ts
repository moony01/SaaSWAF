import type { RuntimeConfig } from 'nuxt/schema'
import type { Notice } from '@/types/notice' // or '../../types/notice' if alias 안 됨

type NoticePayload = {
  title: string
  content: string
}

// 서버 전용 - AWS API Gateway 호출
export async function fetchNoticeList(config: RuntimeConfig): Promise<Notice[]> {
  return await $fetch(`${config.API_BASE_URL}/notice`, {
    headers: {
      'x-api-key': config.API_KEY
    }
  })
}

// ✅ 공지사항 등록
export async function createNotice(config: RuntimeConfig, payload: NoticePayload) {
  return await $fetch(`${config.API_BASE_URL}/notice`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': config.API_KEY
    },
    body: payload
  })
}
