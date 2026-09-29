<template>
  <div class="app-wrap">
    <nav
    :class="{ visible: isVisible }">
      <router-link to = "/">首页</router-link>
      <router-link to = "/about">关于我</router-link>
      <router-link to = "/test">组件测试页</router-link>
      <router-link to = '/postdata'>文章页</router-link>
    </nav>
    
    <router-view v-slot="{ Component }">
      <keep-alive include="HomeView">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'

const isVisible = ref(false)

const TRIGGER_ZONE = 60

const isHovering = ref(false)

const handleMouseMove = (event) => {
  if (isHovering.value) {
    isVisible.value = true
     console.log("isHovering.value:", isHovering.value)
    return
  }

  isVisible.value = event.clientY <= TRIGGER_ZONE
  console.log("isVisible.value:", isVisible.value)

}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
})


</script>

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
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
}

nav a{
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0.5rem;
  text-decoration: none;
}

nav.visible {
  transform: translateY(0);
}
</style>