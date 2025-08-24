<template>
  <div>
    <Header />
    <nav>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/about">About</NuxtLink> |
      <NuxtLink to="/news">News</NuxtLink> |
      <NuxtLink to="/notice">Notice</NuxtLink>
    </nav>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>