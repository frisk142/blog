<template>
    <div class="gallery" :style="dynamicStyle">
        <div class="photo-stack">
            <div class="photo-card back-left" >
                <img :src="fan_images[0].name" alt="">
            </div>

            <div class="photo-card back-right" >
                <img :src="fan_images[1].name" alt="">
            </div>

            <div class="photo-card front" >
                <img :src="fan_images[2].name" alt="">
                <div class="front-overlay">
                    <h3>{{ props.title }}</h3>
                    <p>{{ props.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import fanImages from '@/data/gallery_data.js'

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
    title: props.title,
    desc: props.desc,
}))

const fan_images = fanImages

console.log(fan_images)


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
  transform: translate(-50%, -50%) rotate(var(--rot, 0deg));
  transition: all 0.3s ease;
}


.back-left {
  top: 50%;
  opacity: 0.7;
  z-index: 3;
}

.back-right {
  top:45%;
  right: 5%;
  opacity: 0.7;
  z-index: 2;
}


.front {
  z-index: 4;
  cursor: pointer;
}

.photo-stack:has(.front:hover) .back-left {
  transform: translate(-60%, -50%) rotate(-15deg);
}

.photo-stack:has(.front:hover) .back-right {
  transform: translate(-40%, -50%) rotate(15deg);
}

.photo-stack:has(.front:hover) .front {
  transform: translate(-50%, -50%) rotate(0deg) scale(1.05);
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
</style>