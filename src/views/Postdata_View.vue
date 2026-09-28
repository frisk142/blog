<template>
    <div class="Article">
      <div class="post-detail">
          <h1>{{ title }}</h1>
          <div class="content" v-html="htmlContent"></div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted, } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'

const route = useRoute()
const md = new MarkdownIt()

const title = ref('')
const htmlContent = ref('')

onMounted(async () => {
    const res = await fetch('../src/content/posts/hello-world.md')
    const raw = await res.text()
    htmlContent.value = md.render(raw)
    title.value = "test_file"

})

</script>

<style scoped>

.post-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    color: rgba(0, 0, 0, 0.9);
    line-height: 1.8;
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

.Article{
    position: relative;
    z-index: 999;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    border-radius: 32px;

}


</style>