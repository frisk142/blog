<template>
  <div class="app">
    <div class="card">
      <h1>blog</h1>
      <p>深海的房间里，藏着少女青涩的梦。<br>正在搭建中，敬请期待～</p>
      <button @click="showMessage">说声“你好”</button>
      <p v-if="msg">{{ msg }}</p>
      <div class = "card">
        <h2>关于这个博客</h2>
        <p>这是一个记录我个人成长和学习的博客，分享我的经历、想法和见解。希望通过这个平台与更多人交流和学习。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['size'],
  data() {
    return {
      msg: ''
    }
  },

  methods: {
    showMessage() {
      this.msg = '欢迎来到我的小窝'
    }
  }
}
</script>

<style>
.app {
  min-height: 100vh;
  background: url("public/01.jpg") no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
}
.card {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 32px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  color: white;
  text-align: center;
}
button {
  background: rgba(255,255,255,0.3);
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 40px;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}
button:hover {
  background: rgba(255,255,255,0.5);
  transform: scale(1.02);
}
</style>