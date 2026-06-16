<template>
<body style = "margin: 0; padding: 0;">
  <div class="about">
    <h1>关于我</h1>
    <Blog-Card>
      <img src = "/public/images/01.jpg" alt = "灵梦" class = "avatar">
      <p>你好！我是一个热爱编程和技术的开发者，喜欢探索新的技术和工具。这个博客是我记录学习过程和分享经验的平台，希望能与更多人交流和成长。</p>
      <p>希望通过博客记录成长，分享技术心得</p>
    </Blog-Card>
  </div>
</body>
</template>

<script setup>
import BlogCard from '../components/Blog-Card.vue';
</script>

<style scoped>
.about{
  background:url("public/images/Home_View.jpg") no-repeat center center;
  background-size: cover;
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

.card-content {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.card-text{
  flex: 2;
  
}

.avatar {
  position: relative;
  width: 248px;
  height: 350.8px;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  right: 10px;
}
</style>