<template>
  <div class="page-bg">
    <BlogLinecard v-bind="LinecardCofig" >
    <AvatarComponent v-bind="avatarCofig" >
    </AvatarComponent>
    <h3>{{ ProFile.name }}</h3>
    <p class="small-text">{{ ProFile.title }}</p>
    <LinkCard v-bind="biliLInkCardCofig"/>
    <LinkCard v-bind="githubLinkCofig"/>
    </BlogLinecard>
  </div>
</template>


<script setup>
import AvatarComponent from '../components/Avatar-component.vue';
import BlogLinecard from '../components/Blog-Linecard.vue';
import {ProFile} from '@/config/ProFile.js'
import LinkCard from '@/components/Link-Card.vue';


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

const biliLInkCardCofig = {
  position: 'relative',
  zIndex: '999',
  width: '20px',
  height: '20px',
  iconUrl: '/icon/bilibili.ico',
  to: ProFile.bilibiliUrl,
  target: '_blank',
  marginRight: '10px',
}

const githubLinkCofig = {
  position: 'relative',
  zIndex: '999',
  width: '20px',
  height: '20px',
  iconUrl: '/icon/github.svg',
  to: ProFile.github,
  target: '_blank'

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