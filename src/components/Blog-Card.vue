<template>
  <div class="Blog-Card">
    <slot></slot>
  </div>
</template>

<style scoped>
.Blog-Card {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 32px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  color: white;
  text-align: center;
  margin: 0 auto;
}
</style>