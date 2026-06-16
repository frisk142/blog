<template>
  <div>
    <nav>
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

nav {
  text-align: center;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.1);
}

nav a{
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0.5rem;
  text-decoration: none;
}
</style>