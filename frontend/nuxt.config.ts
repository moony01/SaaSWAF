export default defineNuxtConfig({
  ssr: true,            // SSR + SSG 하이브리드
  pages: true,
  // Nuxt Content 모듈 포함 시
  modules: ['@nuxt/content'],
  runtimeConfig: {
    public: {
      apiBase: '/api'   // 이후 API Gateway 주소로 대체 가능
    }
  },
  nitro: {
    preset: 'static',    // ✅ 핵심! 정적 사이트로 generate 가능
    prerender: {
      crawlLinks: false,
      routes: [
        '/',             // 홈
        '/about',        // 소개
        '/news',         // 뉴스
      ]
    },
  },

})
