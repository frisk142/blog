<template>
  <div class="page-bg">
     <div class="home-layout">
      <div class="row-a">
       <BlogLinecard class="area-intro">
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

       <musicPlayer />
      </div>
   </div>     
 </div>
</template>


<script setup>
import AvatarComponent from '../components/Avatar-component.vue';
import BlogLinecard from '../components/Blog-Linecard.vue';
import {ProFile} from '@/config/ProFile.js'
import LinkCard from '@/components/Link-Card.vue';
import MusicPlayer from '@/components/MusicPlayer.vue';

defineOptions({
  name: 'HomeView'
})

const avatarconfig = {
  position: 'relative',
  zIndex: '999',
  width: '120px',
  height: '120px',
  bgUrl: ProFile.avatar,
  left: '0px',
  borderRadius: '10%'
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
  to: ProFile.githubUrl,
  target: '_blank'
}

</script>


<style scoped>
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

.home-layout{
  display:flex;
  flex-direction: column;
  gap: 20px;
  padding: 120px 2rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}



 .row-a{
  display:grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
 }

 .row-b{
  display:grid;
  grid-template-columns: 1fr 1fr;
 }

 .row-c{
  display:grid;
  grid-template-columns: 1fr 1fr;
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
  display: block;
 }

@media (max-width: 768px) {
  home-layout {
    padding: 100px 1rem 1rem;
  }
  .row-a {grid-template-columns: 1fr;}
  .row-b {grid-template-columns: 1fr;}
  .row-c {grid-template-columns: 1fr;}
  
}

</style>