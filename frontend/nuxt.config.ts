export default defineNuxtConfig({
  ssr: true,
  pages: true,
  modules: [],
  runtimeConfig: {
    public: {
      apiBase: '/api'  // 이후 API Gateway 연결시 교체
    }
  },
  // nitro: {
  //   prerender: {
  //     routes: ['/news']
  //   }
  // }
})
