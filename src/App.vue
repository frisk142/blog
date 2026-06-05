<template>
  <div>
    <nav>
      <router-link to = "/">首页</router-link>
      <router-link to = "/about">关于我</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  text-align: cenrer;
  padding: 2rem;
  background-color: rbga(0, 0, 0, 0.1);
}

nav a{
  color: rgba(0, 0, 0, 0.5);
  margin: 0 0.5rem;
  text-decoration: none;
}
</style>