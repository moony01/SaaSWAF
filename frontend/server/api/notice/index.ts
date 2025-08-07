// server/api/notice/index.ts
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  const { action, payload } = body

  const baseUrl = `${config.apiBaseUrl}/notice`

  switch (action) {
    case 'insert': {
      return await $fetch(baseUrl, {
        method: 'POST',
        headers: { 'x-api-key': config.apiKey },
        body: payload,
      })
    }

    case 'select': {
      const query = payload?.id ? `/${payload.id}` : ''
      return await $fetch(`${baseUrl}${query}`, {
        headers: { 'x-api-key': config.apiKey },
      })
    }

    case 'update': {
      if (!payload?.id) return { statusCode: 400, message: 'ID required' }
      return await $fetch(`${baseUrl}/${payload.id}`, {
        method: 'PUT',
        headers: { 'x-api-key': config.apiKey },
        body: payload,
      })
    }

    case 'delete': {
      if (!payload?.id) return { statusCode: 400, message: 'ID required' }
      return await $fetch(`${baseUrl}/${payload.id}`, {
        method: 'DELETE',
        headers: { 'x-api-key': config.apiKey },
      })
    }

    default:
      return { statusCode: 400, message: 'Unknown action' }
  }
})
