<template>
    <BlogLinecard v-bind="BlogLinecardconfig">
     <img class="showimg" :src="coverImg" alt="文章封面" v-if="coverImg" />
      <div class="post-detail">
          <h1>{{ title }}</h1>
          <div class="content" v-html="htmlContent"></div>
      </div>
    </BlogLinecard>
</template>

<script setup>
import { ref, onMounted, } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleData } from '@/utils/home_data'
import MarkdownIt from 'markdown-it'
import BlogLinecard from '@/components/Blog-Linecard.vue'

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
    maxWidth: '420px',
    position: 'relative',
    zIndex: "999",
    hoverable: false,
    margin: "0 auto",
}

console.log ("当前slug:", route.params.slug)
console.log ("当前type:", route.params.type)
console.log ("当前文章路径:", title.value)
console.log ("当前文章图片路径:", coverImg.value)


</script>

<style scoped>

.showimg {
    width: 100%;
    max-width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 32px 32px 0 0;
    overflow: hidden;
    padding: '0';
}

.post-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    color: rgba(0, 0, 0, 0.9);
    line-height: 1.8;
    padding: 2rem, 1.5rem;
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