<template>
    <div class = "Blog-Linecard" :style="dynamicStyle" :class="{ hoverable: hoverable }">
    <slot></slot>
    </div>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
    position: {type: String, default:'static'},
    margin: {type: String, default: 'static'},
    top: {type: String, default: 'static'},
    left: {type: String, default: 'static'},
    right: {type: String, default: 'static'},
    bottom: {type: String, default: 'static'},
    zIndex: {type: String, default: 'static'},
    width: {type: String, default: 'static'},
    height: {type: String, default: 'static'},
    maxWidth: {type: String, default: 'static'},
    hoverable: {type: Boolean, default: true}
})
const dynamicStyle = computed(() => ({
    position: props.position,
    margin: props.margin,
    top: props.top,
    left: props.left,
    right: props.right,
    bottom: props.bottom,
    zIndex: props.zIndex,
    width: props.width,
    height: props.height,
    maxWidth: props.maxWidth,
    hoverable: props.hoverable
}))


</script>

<style scoped>
.Blog-Linecard {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 32px;
  padding: 2rem;
  width: 90%;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  color: white;
  margin: 0 auto;
  cursor: pointer;
  transition: transform 0.2s ease;
  display: block;
}

.Blog-Linecard.hoverable:hover {
    border-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
}
</style>