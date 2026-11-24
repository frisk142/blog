<template>
    <div class="gallery-detail-page">
      <div v-if="currentAlbum" class="detail-content">
        <header class="page-header">
          <button class="back-ctn font-text" @click="$router.back()">返回</button>
          <h1>{{ currentAlbum.title }}</h1>
          <p class="desc">{{ currentAlbum.desc }}</p>
        </header>

        <div class="image-grid">
          <img
           v-for= "(img, index) in currentAlbum.allImages"
           :key= "index"
           :src= "img"
           :alt= "相册图片"
           loading= "lazy"
           />
      </div>
    </div>  

    <div v-else class="not-found">
      <h2>哎呀，相册走丢了(404)</h2>
      <button class="back-btn" @click="$router.push('/')">回到首页</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { getAlbumDetail } from '@/data/gallery_data';
import "@assets/fonts/fonts.css"

const router = useRoute()

const currentAlbum = computed(() => {
  return getAlbumDetail(router.params.id)
})

</script>

<style scoped>



.gallery-detail-page {
  min-height: 100vh;
  padding: 80px 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
}

.page-header {
  margin-bottom: 40px;
  position: relative;
}

.back-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background 0.3s;
}
.back-btn:hover {
  background: rgba(255, 255, 255, 0.4);
}
h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}
.desc {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
}

.image-grid {
  column-count: 3; 
  column-gap: 20px;
}

.image-grid img {
  width: 100%;
  margin-bottom: 20px;
  border-radius: 12px;
  display: block;
  break-inside: avoid;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, filter 0.3s ease;
}

.image-grid img:hover {
  transform: scale(1.02);
  filter: brightness(1.1);
}


@media (max-width: 992px) {
  .image-grid { column-count: 2; }
}
@media (max-width: 576px) {
  .image-grid { column-count: 1; }
  h1 { font-size: 1.5rem; }
}


.not-found {
  text-align: center;
  margin-top: 100px;
}

.font-text {
  font-family: 'ZhouFangRi', sans-serif;
}

</style> 