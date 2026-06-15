<template>
  <div class="app">
    <Blog-Linecard>
      <h1>blog</h1>
      <p>深海的房间里，藏着少女青涩的梦。<br>正在搭建中，敬请期待～</p>
        <Blog-Button @click="showMessage">
          说声“你好”
        </Blog-Button>
          <p v-if="msg">{{ msg }}</p>
          <h2>关于这个博客</h2>
        <p>这是一个记录我个人成长和学习的博客，分享我的经历、想法和见解。希望通过这个平台与更多人交流和学习。</p>
    </Blog-Linecard>
  </div>
  <InfiniteScroll :fetchApi="fetchArticles" :limit="5">
    <template #default="{ list }">
      <div v-for="item in list" :key="item.id" clas="article-card">
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
      </div>
    </template>
  </InfiniteScroll>
</template>

<script setup>
import { ref } from 'vue'
import BlogButton from '../components/Blog-Button.vue'
import BlogLinecard from '../components/Blog-Linecard.vue'
import InfiniteScroll from '../components/InfiniteScroll.vue'

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