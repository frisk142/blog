<template>
    <div class = "Blog-Linecard" :style="dynamicStyle">
    <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    position: {type: String, default:'static'},
    top: {type: String, default: 'static'},
    left: {type: String, default: 'static'},
    right: {type: String, default: 'staic'},
    bottom: {type: String, default: 'staic'},
    zIndex: {type: String, default: 'staic'},
    width: {type: String, default: 'staic'},
    height: {type: String, default: 'staic'}
})
const dynamicStyle = {
    position: props.position,
    top: props.top,
    left: props.left,
    right: props.right,
    bottom: props.bottom,
    zIndex: props.zIndex,
    width: props.width,
    height: props.height,
}


</script>

<style scoped>
.Blog-Linecard {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 32px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  color: white;
  margin: 0 auto;
  cursor: pointer;
  transition: transform 0.2s ease;
  display: inline-block;
}

.Blog-Linecard:hover {
    border-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
}
</style>