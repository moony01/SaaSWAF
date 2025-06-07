export default defineNuxtConfig({
  ssr: true,
  modules: [],
  runtimeConfig: {
    public: {
      apiBase: '/api'  // 이후 API Gateway 연결시 교체
    }
  }
})
