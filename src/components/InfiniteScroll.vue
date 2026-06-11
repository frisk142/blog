<template>
 <div class = 'infinite-scroll-container'>
  <slot: list = 'list'/>
  
  <div v-if = 'loading' class = 'load-more'>加载中...</div>
  <div v-if = 'finished' class = 'load-more'>没有更多了</div>
 </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    fetcApi:{
        type: Function,
        required: true
    },

    limit:{
        type: Number,
        default: 10
    },
    threshold: {
        type: Number,
        default: 100
    }
})

const list = ref([])
const page = ref(1)
const loading = ref(false)
const finished = ref(false)

async function loadMore(){
    if (loading.value || finished.value) return

    loading.value = true
    try{
        const newItems = await props.fetcApi(page.value, props.limit)

        if (!newItems || newItems.length === 0){
            finished.value = true
        } else {
            list.value.push(...newItems)
            page.value++
        }
    } catch (error) {
        console.error('加载失败',error)
    } finally {
        loading.value = false
    }
}

function handleScroll(){
    const scrollTop = document.documentElement.scrolltop || document.body.scrollTop
     
    const clientHeight = document.documentElement.clientHeight

    const scrollHeight = document.documentElement.scrollHeight

    if (scrollTop + clientHeight >= scrollHeight - props.threshold){
        loadMore()
    }
}

onMounted(() => {
    loadMore()
    window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})

</script>

<style scoped>
.infinitle-scroll-container {
    width: 100%;
}

.load-more {
    text-align: center;
    padding: 1rem;
    color: #aaa;
    font-size: 0.9rem;
}

</style>