<template>
 <div ref="contentRightScroll" @wheel="wheelHandler" class="scrollable">
  <div class="page-bg">
     <div class="home-layout">
      <div class="row-a">
       <BlogLinecard>
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

      <div class="row-b">
       <div class = "ShowImages">
         <BlogLinecard fill style = "padding: 0.25rem;">
           <img :src="ShowImg" @mousedown="RefresShow" alt="ShowImages" class="random-img" :class="{ blurAnim: isblur }" style="width: 100%; height: 100%; border-radius: 32px; cursor: pointer; object-fit: cover; object-position: center" />
         </BlogLinecard>
       </div>

       <div class="row-b-right">
        <div class="blog">
         <BlogLinecard fill style = "padding: 0.25rem;">
          <img :src="BlogImg" @mousedown="RefresBlog" alt="blog" style="width: 100%; height: 100%; border-radius: 32px; cursor: pointer; object-fit: cover;" > 
         </BlogLinecard> 
        </div>

       <div class="blogcard">
        <BlogLinecard fill style="padding: 0.25rem">
          <img :src="BlogImgOne"  @mousedown="RefresBlog_1" alt="blogcard" style="width: 100%; height: 100%; border-radius: 32px; cursor: pointer; object-fit: cover;" >
        </BlogLinecard>
       </div>
      </div>
      </div>
    </div> 
  </div>
 </div>

</template>


<script setup>
import { ref } from 'vue';
import AvatarComponent from '../components/Avatar-component.vue'
import BlogLinecard from '../components/Blog-Linecard.vue'
import {ProFile} from '@/config/ProFile.js'
import LinkCard from '@/components/Link-Card.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'
// import {useCountdown} from '@vueuse/core'


const contentRightScroll = ref(null);
const BlogImagesModules = import.meta.glob("@/assets/blog_images/*.{png,jpg,jpeg,webp}",{ eager: true })
const ShowIMagesModules = import.meta.glob("@/assets/show_images/*{png,jpg,jpeg,webp}",{ eager: true })
// const { remaining, start, stop, pause, resume } = useCountdown(countdownSenconds,{})
// const countdownSenconds = 10
const ShowImg = ref('')
const BlogImg = ref('')
const BlogImgOne = ref('')
const isblur = ref(false)



defineOptions({
  name: 'HomeView'
})

const makeRefresh = (module, targetRef) => {
  return ()  => {
    isblur.value = true
    const list = Object.values(module).map(m => m.default)
    if (list.length === 0) return
    targetRef.value = list[Math.floor(Math.random() * list.length)]

    setTimeout(() => {
    isblur.value = false
   },200)
  } 
}


// const RefreshImageOverTime = (makeRefresh) => {

//  }


const wheelHandler = (event) => {
  if (contentRightScroll.value) {
    contentRightScroll.value.scrollTop += event.deltaY;
    console.log('scrollTop:', contentRightScroll.value.scrollTop);
    event.preventDefault();
  }
}


const RefresShow = makeRefresh(ShowIMagesModules, ShowImg)
const RefresBlog = makeRefresh(BlogImagesModules, BlogImg)
const RefresBlog_1 = makeRefresh(BlogImagesModules, BlogImgOne)


RefresShow()
RefresBlog()
RefresBlog_1()

console.log("ShowImg输出的url:",ShowImg)
console.log("BlogImg输出的url:", BlogImg)
console.log("BlogImgOne输出的url:", BlogImgOne)
console.log("isblur状态",isblur.value)



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
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
 }

 .scrollable {
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;
 }

 ::-webkit-scrollbar-track{
  background-color: rgba(255,255,255,0.1);
 }

 .home-layout{
  display:flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 2rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}
 .row-a{
  display:grid;
  grid-template-columns: 2fr 1fr;
 }

 .row-b{
  display:grid;
  grid-template-areas: 
    "ShowImages . ."
    "ShowImages . .";
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 300px;
  gap: 1.25rem;
 }

 
 .row-b-right{
  display:grid;
  grid-template-columns: 4fr;
  grid-template-areas: 
    "blog"
    "blogcard";
  grid-template-rows: 145px 145px; 
  grid-column: 2 / 4;
  gap: 10px;
 }

 .row-b > * {
  width: 100%;
  height: 100%;
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

 .random-img {
  transition: filter 1s ease;
  object-fit: cover;
 }

 .random-img.blurAnim {
  filter: blur(10px);

 }

@media (max-width: 768px) {
  .home-layout {
    padding: 100px 1rem 1rem;
  }
  .row-a {grid-template-columns: 1fr;}
  .row-b {grid-template-columns: 1fr;}
  .row-c {grid-template-columns: 1fr;}
}

</style>

<style>
 .blogcard {grid-area: blogcard};
 .ShowImages {grid-area: ShowImages};
 .blog {grid-area: blog};
 .blogcard-1 {grid-area: blogcard-1};
 .row-b-right {grid-area: row-b-right};

</style>