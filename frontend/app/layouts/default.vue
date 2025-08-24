<template>
  <div>
    <Header />
    <nav>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/about">About</NuxtLink> |
      <NuxtLink to="/news">News</NuxtLink> |
      <NuxtLink to="/notice">notice</NuxtLink>
    </nav>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>