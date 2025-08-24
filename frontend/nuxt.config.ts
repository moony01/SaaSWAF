export default defineNuxtConfig({
  srcDir: 'app/',   // ← app/을 앱 루트로 강제
  ssr: true,            // SSR + SSG 하이브리드
  pages: true,
  modules: ['@nuxt/content'], // Nuxt Content 모듈 포함 시
  runtimeConfig: {
    // ✅ 서버 전용 (클라이언트에 노출 안 됨)
    apiBaseUrl: process.env.API_BASE_URL,
    apiKey: process.env.API_KEY,
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
        '/about',         // 소개
        '/news',          // 뉴스
      ]
    },
  },

})
