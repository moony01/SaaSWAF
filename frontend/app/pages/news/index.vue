<script setup>
const modules = import.meta.glob("~/content/news/*.md", { as: "raw", eager: true })
const articles = Object.values(modules).map(raw => {
  const match = raw.match(/title:\s*"(.+)"/)
  return { title: match ? match[1] : "" }
})
</script>

<template>
  <div>
    <h1>News Page</h1>
    <ul>
      <li v-for="article in articles" :key="article.title">
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>

