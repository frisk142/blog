<template>
  <div class="page">
    <MusicPlayer v-bind="MusicPlayerConfig" />
    <ProfileComponent v-bind="profileconfig" />
  </div>
</template>

<script setup>
import MusicPlayer from '@/components/MusicPlayer.vue';
import ProfileComponent from '@/components/profile-component.vue';

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
</style>