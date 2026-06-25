<template>
  <div class="page-bg">
    <BlogLinecard v-bind="LinecardCofig" >
    <AvatarComponent v-bind="avatarCofig" >
    </AvatarComponent>
    <h3>{{ ProFile.name }}</h3>
    <p class="small-text">{{ ProFile.title }}</p>

    </BlogLinecard>
  </div>
</template>


<script setup>
import AvatarComponent from '../components/Avatar-component.vue';
import BlogLinecard from '../components/Blog-Linecard.vue';
import {ProFile} from '@/config/ProFile.js'


const avatarCofig = {
  position: 'relative',
  zIndex: '999',
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  bgUrl: ProFile.avatar,
}

const LinecardCofig = {
  position: 'fixed',
  top: '200px',
  left: '30px',
  width: '200px',
  height: '200px' 

}


</script>


<style>
 .page-bg{
  position: absolute;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
 }

 .small-text{
  font-size: 10px;
 }
</style>