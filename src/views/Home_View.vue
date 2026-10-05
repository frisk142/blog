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

// const Linecardconfig = {
//   position: 'fixed',
//   top: '200px',
//   left: '30px',
//   width: '500px',
//   height: '175px' 
// }

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

// const MusicPlayerConfig =  {
//     position: 'fixed',
//     top: '200px',
//     height: '175px',
//     width: '350px',
//     right: '200px'
// }

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


 .row{
  display:grid;
  gap: 1.5rem;

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
  .home-grid {
    grid-template-areas:
      "intro"
      "music"
      "posts"
      "gallery";
  grid-template-columns: 1fr;
  padding: 120px 1rem 1rem;
  }
}

</style>