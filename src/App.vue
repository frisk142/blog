<template>
  <div class="app-wrap">
    <nav class="top-nav">
      <router-link to = "/">首页</router-link>
      <router-link to = "/about">关于我</router-link>
      <router-link to = "/test">组件测试页</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body{
  position: relative;
  height: 100%;
  overflow: hidden;
  background: url(/images/Home_View.jpg) center/cover no-repeat fixed;
}

.app-wrap::before{
  content: '';
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

nav {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  z-index: 999;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

nav a{
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0.5rem;
  text-decoration: none;
}
</style>