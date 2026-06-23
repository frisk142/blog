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
}

.app-wrap::before{
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(/images/Home_View.jpg) center/cover no-repeat fixed;
  z-index: -1;
}

nav {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  z-index: 999;
}

nav a{
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0.5rem;
  text-decoration: none;
}
</style>