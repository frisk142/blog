<template>
    /
</template>

<script setup>
import {ref, computed, onMounted, onUnmounted, watch} from 'vue'
import {songs} from '@/config/songs'


const audio = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)  
const duration = ref(0)
const volume = ref(0.8)
const currenSongIndex = ref(0)

const songsList = ref(songs)

const currentSong = computed(() => {
    return songsList.value[currenSongIndex.value] || null
})

const progress = computed(() => {
    if (duration.value === 0) return 0
    return (currenSongIndex.value / duration.value) * 100
})

const toggleplay = () => {
    if (!audio.value) return
    if (isPlaying.value){
        audio.value.pause()
    } else {
        audio.value.play()
    }
    isPlaying.value = !isPlaying.value
}
</script>

<style scoped>
</style>