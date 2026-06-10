<template>
 <div class = 'infinite-scroll-container'>
  <slot: list = 'list'/>
  
  <div v-if = 'loading' class = 'load-more'>加载中...</div>
  <div v-else-if = 'finished' class = 'load-more'>没有更多了</div>
 </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineprops({
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

</script>