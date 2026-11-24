<template>
  <div class="page">
    <gallery-cover @click="goToDatail()" v-bind="galleryconfig" />
    <gallery-cover v-bind="galleryconfig_1"/>
  </div>
</template>

<script setup>
import GalleryCover from '@/components/GalleryCover.vue';
import { galleryAlbums } from '@/data/gallery_data';
import { useRouter } from 'vue-router';

const router = useRouter()
const albumCover = galleryAlbums[0]

defineOptions({
  name: 'TestView'
});

const goToDatail = () =>{
  console.log("gotoDatail已触发")
  router.push({
    name: 'Gallerydetail',
    params: { id: albumCover.id }
  })
}

const galleryconfig = {
  width: '600px',
  height: '500px',
  images: albumCover.coverImages,
  title: albumCover.title,
  desc: albumCover.desc,
}

const galleryconfig_1 = {
  width: '600px',
  height: '500px'
}
</script>


<style scoped>
.page {
  display: grid;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}

.frame {
  background-color: rgba(255, 255, 255, 1);
  padding: 6px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.frame-img {
  display: block;
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  border-radius: 5px;
}

</style>