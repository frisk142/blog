<template>
    <div class = "Blog-Linecard" :style="dynamicStyle" :class="{ hoverable: hoverable,fill:fill }">
    <slot></slot>
    </div>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
    position: {type: String, default:''},
    margin: {type: String, default: ''},
    top: {type: String, default: ''},
    left: {type: String, default: ''},
    right: {type: String, default: ''},
    bottom: {type: String, default: ''},
    zIndex: {type: String, default: ''},
    width: {type: String, default: ''},
    height: {type: String, default: ''},
    maxWidth: {type: String, default: ''},
    hoverable: {type: Boolean, default: true},
    fill: { type: Boolean, default: false }, 
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
    padding: props.padding,
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

.Blog-Linecard.fill {
  width: 100%;
  height: 100%;
  max-width: none;
  margin: 0;
}
</style>