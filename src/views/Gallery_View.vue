<template>
  <div class="page">
    <gallery-cover v-bind="galleryconfig" />
  </div>
</template>

<script setup>
import GalleryCover from '@/components/GalleryCover.vue';


defineOptions({
  name: 'TestView'
});

const galleryconfig = {
  width: '600px',
  height: '500px',
}
</script>


<style scoped>
.page {
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