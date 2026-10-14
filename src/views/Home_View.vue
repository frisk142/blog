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
           <img :src="ShowImg" alt="ShowImages" class="random-img" :class="{ blurAnim: ShowBlur }" style="width: 100%; height: 100%; border-radius: 32px; cursor: pointer; object-fit: cover; object-position: center;" />
         </BlogLinecard>
       </div>

       <div class="row-b-right">
        <div class="blog">
         <BlogLinecard  fill style = "padding: 0.25rem; position: relative">
          <div class="img-text">
            <div class="custom-font-text">
            </div> 
          </div>   
           <img :src="BlogImg" alt="blog" class="random-img" :class="{ blurAnim: BlogBlur }" style="width: 100%; height: 100%; border-radius: 32px; cursor: pointer; object-fit: cover;" > 
         </BlogLinecard> 
        </div>

       <div class="blogcard">
        <BlogLinecard fill style="padding: 0.25rem;" position="relative">
          <div class="img-text">
            <div class="custom-font-text">
            </div>
          </div>
            <img :src="BlogImgOne" alt="blogcard" class="random-img" :class="{ blurAnim: BlogBlurOne }" style="width: 100%; height: 100%; border-radius: 32px; cursor: pointer; object-fit: cover;" >
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

const contentRightScroll = ref(null)
const BlogImagesModules = import.meta.glob("@/assets/blog_images/*.{png,jpg,jpeg,webp}",{ eager: true })
const BlogImagesOneModules = import.meta.glob("@/assets/blog_imagesone/*.{png,jpg,jpeg,webp}",{ eager: true })
const ShowImagesModules = import.meta.glob("@/assets/show_images/*{png,jpg,jpeg,webp}",{ eager: true })
const ShowImg = ref('')
const BlogImg = ref('')
const BlogImgOne = ref('')
const ShowBlur = ref(false)
const BlogBlur = ref(false)
const BlogBlurOne = ref(false)


defineOptions({
  name: 'HomeView'
})


const makeRefresh = (module, targetRef, BlurRef) => {
  return ()  => {
    BlurRef.value = true
    const list = Object.values(module).map(m => m.default)
    if (list.length === 0) return
    targetRef.value = list[Math.floor(Math.random() * list.length)]

    setTimeout(() => {
    BlurRef.value = false
   },800)
  } 
}

const RefresShow = makeRefresh(ShowImagesModules, ShowImg, ShowBlur)
const RefresBlog = makeRefresh(BlogImagesModules, BlogImg, BlogBlur)
const RefresBlog_1 = makeRefresh(BlogImagesOneModules, BlogImgOne, BlogBlurOne)

RefresShow()
RefresBlog()
RefresBlog_1()


const wheelHandler = (event) => {
  if (contentRightScroll.value) {
    contentRightScroll.value.scrollTop += event.deltaY;
    console.log('scrollTop:', contentRightScroll.value.scrollTop);
    event.preventDefault();
  }
}


let timer, timer_1, timer_2 = null
onMounted(() => {
  timer = setInterval(RefresShow, 8200)
  timer_1 = setInterval(RefresBlog, 6500)
  timer_2 = setInterval(RefresBlog_1, 12000) 
})

onUnmounted(() => {
  clearInterval(timer, timer_1, timer_2)
})


console.log("ShowImg输出的url:",ShowImg.value)
console.log("BlogImg输出的url:", BlogImg.value)
console.log("BlogImgOne输出的url:", BlogImgOne.value)
console.log("ShowImg的Blur状态:",ShowBlur.value)
console.log("BlogBlur的Blur状态:",BlogBlur.value)
console.log("BlogBlurOne的Blur状态:",BlogBlurOne.value)
console.log("BlogImgOne所获得的值",BlogImagesOneModules.value)

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

 .img-text {
  position: absolute;
  height: 95%;
  width: 98.5%;
  z-index: 999;
  background: linear-gradient( to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
  border-radius: 32px;
 }

 .custom-font-text {
  font-family: 'Mont-Regular', sans-serif;
  position: absolute; 
  left: 20px;
  top: 80px;
  font-size: 25px;
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