<template>
    <div class="gallery" :style="dynamicStyle">
        <div class="photo-stack">
            <div class="photo-card back-left" style="--rot: -8deg">
                <img :src="imgLeft" alt="">
            </div>

            <div class="photo-card back-right" style="--rot: 8deg">
                <img :src="imgRight" alt="">
            </div>

            <div class="photo-card front" >
                <img :src="imgFront" alt="">
                <div class="front-overlay font-text">
                    <h3>{{ props.title }}</h3>
                    <p>{{ props.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import "../assets/fonts/fonts.css"

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
    padding: { type: String, default: '' },
    title: { type: String, default: '' },
    desc: { type: String, default: '' },
    images: { type: Array, default: () => [] },
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

const imgLeft = computed(() => props.images[1] || props.images[0] || '')
const imgRight = computed(() => props.images[2] || props.images[0] || '')
const imgFront = computed(() => props.images[0] || '')

</script>

<style scoped>

.photo-stack {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden; 
}


.photo-card {
  position: absolute;
  top: 50%; left: 50%;
  width: 70%;
  aspect-ratio: 4 / 3;
  background: #fff;
  padding: 8px;
  border-radius: 6px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  transform: translate(-50%, -50%) rotate(0deg);
  transition: all 0.4s ease;
}


.back-left {
  top: 55%;
  transform: translate(-55%, -50%) rotate(-8deg) !important; 
  opacity: 0.7;
  z-index: 3;
}

.back-right {
  transform: translate(-45%, -50%) rotate(8deg) !important;
  opacity: 0.7;
  z-index: 2;
}


.front {
  z-index: 4;
  cursor: pointer;
}

.photo-stack:has(.front:hover) .back-left {
  transform: translate(-62%, -50%) rotate(-15deg) !important;
}

.photo-stack:has(.front:hover) .back-right {
  transform: translate(-38%, -50%) rotate(15deg) !important;
}

.photo-stack:has(.front:hover) .front {
  transform: translate(-50%, -50%) scale(1.05);
}


.front-overlay {
  position: absolute;
  inset: 8px;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  color: #fff;
  pointer-events: none;
}

.gallery-info {
  text-align: center;
  margin-top: 30px;
  color: #fff;
}
.date-badge {
  background: rgba(255,255,255,0.2);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
}

.photo-card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.font-text {
  font-family: 'ZhouFangRi', sans-serif;
}
</style>