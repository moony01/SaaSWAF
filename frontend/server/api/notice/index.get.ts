import { fetchNoticeList } from '@/services/noticeService'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  return await fetchNoticeList(config)
})
