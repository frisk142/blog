<template>
  <div class="page">
    <MusicPlayer v-bind="MusicPlayerConfig" />
    <ProfileComponent v-bind="profileconfig" />
  </div>
</template>

<script setup>
import MusicPlayer from '@/components/MusicPlayer.vue';
import ProfileComponent from '@/components/profile-component.vue';
import { fanImages } from '@/utils/gallery_data.js';


defineOptions({
  name: 'TestView'
});

const MusicPlayerConfig = {
  position: 'fixed',
  top: '200px',
  right: '200px',
  width: '350px',
  height: '200px'
};

const profileconfig = {
  width: '400px',
  height: 'auto',
  zindex: '20',
};
</script>

<style>
.page {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  /* 移除 z-index: -1 */
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
  brorder-radius: 5px;
}

</style>