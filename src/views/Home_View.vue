<template>
  <div class="page-bg">
    <BlogLinecard v-bind="Linecardconfig">
      <div class="profile-wrap">
      <AvatarComponent v-bind="avatarconfig"/>
        <div class="name-Format">
          <h3>{{ ProFile.name }}</h3>
          <p class="small-text">{{ ProFile.title }}</p>
          <div class='link-group'>
            <LinkCard v-bind="biliLInkCardconfig"/>
            <LinkCard v-bind="githubLinkconfig"/>
          </div>
      </div>
      </div>
    </BlogLinecard>
  </div>
</template>


<script setup>
import AvatarComponent from '../components/Avatar-component.vue';
import BlogLinecard from '../components/Blog-Linecard.vue';
import {ProFile} from '@/config/ProFile.js'
import LinkCard from '@/components/Link-Card.vue';


const avatarconfig = {
  position: 'relative',
  zIndex: '999',
  width: '120px',
  height: '120px',
  bgUrl: ProFile.avatar,
  left: '0px',
  borderRadius: '10%'
}

const Linecardconfig = {
  position: 'fixed',
  top: '200px',
  left: '30px',
  width: '500px',
  height: '175px' 
}

const biliLInkCardconfig = {
  position: 'relative',
  zIndex: '999',
  width: '20px',
  height: '20px',
  iconUrl: '/icon/bilibili.ico',
  to: ProFile.bilibiliUrl,
  target: '_blank',  
  marginRight: '10px',
}

const githubLinkconfig = {
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

 .profile-wrap{
  display: flex;
  align-items: center;
  gap: 20px;
 }

  .link-group {
  display: flex;
  align-items: center;
  margin-top: 8px;
 }

 .name-Format{
  position: block;
 }

</style>