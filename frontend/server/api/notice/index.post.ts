import { createNotice } from '@/services/noticeService'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  return await createNotice(config, body)
})
