<template>
  <div class="page-bg">
    <AvatarComponent v-bind="avatarCofig" >
    </AvatarComponent>
  </div>
</template>


<script setup>
import AvatarComponent from '../components/Avatar-component.vue';

const avatarCofig = {
  position: 'fixed',
  top: '200px',
  left: '30px',
  zIndex: '999',
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  bgUrl: '/images/my.jpg',
}
</script>


<style>
 .page-bg{
  background: rgba(0, 0, 0, 0.9);
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
 }
</style>