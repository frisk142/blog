<template>
    <BlogLinecard v-bind="BlogLinecardconfig">
     <div class="Showimg"></div>
      <div class="post-detail">
          <h1>{{ title }}</h1>
          <div class="content" v-html="htmlContent"></div>
      </div>
    </BlogLinecard>
</template>

<script setup>
import { ref, onMounted, } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleDate } from '@/utils/home_data'
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

    const article = getArticleDate(type, slug)

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


</script>

<style scoped>

.showimg {
    max-width: auto;
    height: 300px;
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