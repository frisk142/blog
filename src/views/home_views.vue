<template>
  <div class="app">
    <Blog-Card>
      <h1>blog</h1>
      <p>深海的房间里，藏着少女青涩的梦。<br>正在搭建中，敬请期待～</p>
      <Blog-Button @click="showMessage">
        说声“你好”
      </Blog-Button>
      <p v-if="msg">{{ msg }}</p>
    </Blog-Card>
        <h2>关于这个博客</h2>
      <p>这是一个记录我个人成长和学习的博客，分享我的经历、想法和见解。希望通过这个平台与更多人交流和学习。</p>
  </div>
</template>

<script setup>
import BlogCard from '../components/Blog-Card.vue'
import BlogButton from '../components/Blog-Button.vue'
</script>

<style scoped>
.app {
    background:url("public/01.jpg") no-repeat center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  color: white;
  gap: 2rem;
  font-family: 'Segoe UI', sans-serif;
}
</style>