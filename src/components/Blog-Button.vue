<template>
  <div class="Blog-Button">
    <slot></slot>
  </div>
</template>

<style scoped>
.Blog-Button {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 32px;
  padding: 1rem 2rem;
  color: white;
  text-align: center;
  margin: 1rem auto;
  cursor: pointer;
  transition: all 0.3s ease;
}
</style>