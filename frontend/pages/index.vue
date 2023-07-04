<script setup lang="ts">
const { find } = useStrapi()
// typed to Course
const articles =  await find('articles');
await console.log(articles);
</script>

<template>
  <div v-html="$mdRenderer.render(articles.data[0].attributes.header[0].headerTitle)"></div>
</template>