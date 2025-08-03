export default defineNuxtConfig({
  ssr: true,            // SSR + SSG 하이브리드
  pages: true,
  // Nuxt Content 모듈 포함 시
  modules: ['@nuxt/content'],
  runtimeConfig: {
    // ✅ 서버 전용 (클라이언트에 노출 안 됨)
    API_BASE_URL: process.env.API_BASE_URL,
    API_KEY: process.env.API_KEY,
    public: {
      // ✅ 클라이언트에서 접근 가능
      apiBase: '/api'     // 이건 CSR용으로 남겨둬도 됨
    }
  },
  nitro: {
    preset: 'static',     // SSG도 가능하게 설정
    prerender: {
      crawlLinks: false,
      routes: [
        '/',              // 홈
        '/about',         // 소개d
        '/news',          // 뉴스
      ]
    },
  },

})
