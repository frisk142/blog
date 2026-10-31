<template>
   <div ref="contentRightScroll" class="scrollable">
    <div class="row-a">
     <BlogLinecard v-bind="BlogLinecardconfig">
      <img class="showimg" :src="coverImg" alt="文章封面" v-if="coverImg" />
       <div class="post-detail">
           <h1>{{ title }}</h1>
           <div class="content" v-html="htmlContent"></div>
       </div>
     </BlogLinecard>
     <MusicPlayer/>
    </div>
   </div>
</template>

<script setup>
import { ref, onMounted, } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleData } from '@/utils/home_data'
import MarkdownIt from 'markdown-it'
import BlogLinecard from '@/components/Blog-Linecard.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'

const route = useRoute()
const md = new MarkdownIt() 

const title = ref('')
const htmlContent = ref('')
const coverImg = ref('')

onMounted(async () => {
    const slug = route.params.slug
    const type = route.params.type

    const article = getArticleData(type, slug)
    console.log ("article", article)

    if (article) {
        htmlContent.value = md.render(article.content)
        title.value = article.slug
        coverImg.value = article.cover
    } else {
        htmlContent.value = '<h1>文章不存在</h1>'
    }

})

const BlogLinecardconfig = {
    position: 'relative',
    zIndex: "999",
    hoverable: false,
    margin: "0 auto",
    padding: "0"
}


console.log ("当前slug:", route.params.slug)
console.log ("当前type:", route.params.type)


</script>

<style scoped>

.row-a {
    display: grid;
    grid-template-columns: minmax(0, 800px) 400px;
    gap: 2rem;
    justify-content:  center;
    align-items: start;
    margin-top: 2rem;
}

.showimg {
    width: 100%;
    max-width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 32px 32px 0 0;
    overflow: hidden;
}

 .scrollable {
  overflow-y: auto;
  height: 100%; 
  width: 100%;
  padding-bottom: 60px;
 }


.post-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    color: rgba(0, 0, 0, 0.9);
    line-height: 1.8;
    padding: 2rem 1.5rem;
}

.content :deep(h1)
.content :deep(h2){
    border-bottom: 1px solid rgba(255,255,255,0.2);
    padding-bottom: 0.5rem;

}
.content :deep(code){
    background-color: rgba(255,255,255,0.1);
    padding: 2px 6px;
    border-radius: 4px;
}



</style>