<template>
  <div class="two-columns">
    <aside class="left-sidebar">
      <BlogLinecard>
        <h1>



</template>

<script setup>
import { ref } from 'vue'
import BlogButton from '../components/Blog-Button.vue'
import BlogLinecard from '../components/Blog-Linecard.vue'
import InfiniteScroll from '../components/InfiniteScroll.vue'
import AvatarComponent from '../Avatar-component.vue'

const msg = ref("")


function showMessage() {
  msg.value = "你好！欢迎来到我的博客！";
} 

async function fetchArticles(page, limit) {
  await new Promise(resolve => setTimeout(resolve, 500))
  if (page > 3) return []
  const newItems = []
  for (let i = 0; i < limit; i++) {
    newItems.push({
      id: (page - 1) * limit + i + 1,
      title: `文章 ${(page - 1) * limit + i + 1}` ,
      content: '这是内容' 
    })
  }
  return newItems
}
</script>

<style scoped>
.app {
  position: fixed;  /* 或者用 fixed 让背景铺满 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: -1;      /* 让背景放在最底层 */
}
</style>