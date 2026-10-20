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
         <BlogLinecard fill style = "padding: 0.25rem; ">
          <div class="img-text-stand">
            <div class="custom-font-text-stand"> 
              hello world（测试）
            </div>
          </div>
           <img :src="ShowImg" alt="ShowImages" class="img-show" :class="{ blurAnim: ShowBlur }" />
         </BlogLinecard>
       </div>

       <div class="row-b-right">
        <div class="blog">
         <BlogLinecard  fill style = "padding: 0.25rem; position: relative">
          <div class="img-text">
            <div class="custom-font-text">
              hello world（测试）
            </div> 
          </div>   
           <img :src="BlogImg" alt="blog" class="img-show" :class="{ blurAnim: BlogBlur }" > 
         </BlogLinecard> 
        </div>

       <div class="blogcard">
        <BlogLinecard fill style="padding: 0.25rem; position: relative">
          <div class="img-text" @mousedown="goToArticle(getmdfilename[1].slug)">
            <div class="custom-font-text">
              hello-world
            </div>
          </div>
            <img :src="BlogImgOne" alt="blogcard" class="img-show" :class="{ blurAnim: BlogBlurOne }"  >
        </BlogLinecard>
       </div>
      </div>
    </div>
   </div> 
  </div>
</div>

</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AvatarComponent from '../components/Avatar-component.vue'
import BlogLinecard from '../components/Blog-Linecard.vue'
import {ProFile} from '@/config/ProFile.js'
import LinkCard from '@/components/Link-Card.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'
import "@/assets/fonts/fonts.css"
import { useRouter } from 'vue-router';
import { CombinedList } from '@/utils/home_data.js';

const contentRightScroll = ref(null)
const router = useRouter()
const currenIndex = ref(0)
const currenCarData = ref(CombinedList[0])
const isBlurring = ref(false)

defineOptions({
  name: 'HomeView'
})


const nextCard = () => {
  isBlurring.value = true
  setTimeout(() => {
    currenIndex.value = (currenIndex.value + 1) % CombinedList.length
    currenCarData.value = CombinedList[currenIndex.value]
   }, 400)

   setTimeout(() => {
    isBlurring.value = false
   }, 600)
}

let timer = null
onMounted(() => {
  timer = setInterval(nextCard, 8000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const goToArticle = (slug) => {
  console.log ('跳转', goToArticle.params)
  console.log ("sulg数值",slug)
  router.push({
    name: 'PostDetail',
    params: { slug : slug }
  })
}

const wheelHandler = (event) => {
  if (contentRightScroll.value) {
    contentRightScroll.value.scrollTop += event.deltaY;
    console.log('scrollTop:', contentRightScroll.value.scrollTop);
    event.preventDefault();
  }
}



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
  grid-template-columns: 1.35fr 2fr 1fr;
  grid-template-rows: 350px;
  gap: 1.25rem;
 }

 
 .row-b-right{
  display:grid;
  grid-template-columns: 4fr;
  grid-template-areas: 
    "blog"
    "blogcard";
  grid-template-rows: 170px 170px; 
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

 .img-show {
  transition: filter 1s ease;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 32px;
  cursor: pointer;
  object-fit: cover;
 }

 .img-show.blurAnim {
  filter: blur(10px);
 }

 .img-text {
  position: absolute;
  inset: 0.1rem;
  background: linear-gradient( to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
  border-radius: 32px;
  z-index: 10;
 }

 .img-text-stand {
  position: absolute;
  inset: 0.2rem;
  background: linear-gradient( to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
  border-radius: 32px;
  z-index: 10;
 }

 .custom-font-text {
  font-family: 'Mont-Regular', sans-serif;
  position: absolute; 
  left: 20px;
  top: 100px;
  font-size: 20px;
 }

 .custom-font-text-stand {
  font-family: 'Mont-Regular', sans-serif;
  position: absolute; 
  font-size: 20px;
  left: 10px;
  bottom: 30px;
 }

 
@media (max-width: 768px) {
  .home-layout {
    padding: 100px 1rem 1rem;
  }
  .row-a {grid-template-columns: 1fr;}
  .row-b {grid-template-areas: 
    "ShowImages"
    "blog"
    "blogcard"
  ;}
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