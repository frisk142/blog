<template>
   <div class="row">
    <AvatarComponent v-bind="avatarconfig" />

   </div>
</template>

<script setup>
import AvatarComponent from './Avatar-component.vue';
import { ProFile } from '@/config/ProFile.js';

const avatarconfig = {
    width: '50px',
    height: '50px',
    bgUrl: ProFile.avatar,

}

</script>

<style>
 .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
 }

 .name-format{
    position: blank;
 }




</style>