<template>
    <div class="page">
      <MusicPlayer v-bind="MusicPlayerConfig"/>
    </div>
</template>

<script setup>
import MusicPlayer from '@/components/MusicPlayer.vue';



const MusicPlayerConfig =  {
    position: 'fixed',
    top: '200px',
    height: '200px',
    width: '350px',
    right: '200px'


}
</script>

<style>
.page{
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}


</style>
