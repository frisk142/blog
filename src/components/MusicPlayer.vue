<template>
    /
</template>

<script setup>
import {ref, computed, onMounted, onUnmounted, watch} from 'vue'
import {songs} from '@/config/songs'


const audio = ref(null)
const isPlaying = ref(false) // 播放
const currentTime = ref(0)  // 播放时长
const duration = ref(0)  // 总时长
const volume = ref(0.8)  // 音量
const currenSongIndex = ref(0)  //歌曲索引
const songsList = ref(songs)  // 歌曲列表

const currentSong = computed(() => {
    return songsList.value[currenSongIndex.value] || null
})

const progress = computed(() => {
    if (duration.value === 0) return 0
    return (currenSongIndex.value / duration.value) * 100
})

//播放与暂停
const toggleplay = () => {
    if (!audio.value) return
    if (isPlaying.value){
        audio.value.pause()
    } else {
        audio.value.play()
    }
    isPlaying.value = !isPlaying.value
}

//播放指定歌曲
const playSong = (song) => {
    const index = songsList.value.findIndex(s => s.id === song.id)
    if (index === -1) return
    currenSongIndex.value = index
    if (audio.value) {
        audio.value.src = song.src
        audio.value.load()
        audio.value.play()
        isPlaying.value = true
    }
}
//上一曲
const prevSong = () => {
    const total = songsList.value.length
    currenSongIndex.value = (currenSongIndex.value - 1 + total) % total
    if (audio.value) {
        audio.value.src = currentSong.value.src
        audio.value.load()
        audio.value.play()
        isPlaying.value = true
    }
}

//下一曲
const nextsong = () => {
    const total = songsList.value.length
    currenSongIndex.value= (currenSongIndex.value + 1) % total
    if (audio.value) {
        audio.value.src = currentSong.value.src
        audio.value.load()
        audio.value.play()
        isPlaying.value = true
    }
}

// 跳转到指定进度
const seekTo = (event) => {
    const val = parseFloat(event.target.value)
    if (audio.value && duration.value > 0) {
        audio.value.currentTime = (val / 100) * duration.value
    }
}

// 调整音量
const adjustVolume = (event) => {
    const val = parseFloat(event.target.value)
    volume.value = val
    if (audio.value) {
        audio.value.volume = val
    } 
}

// 格式化时间
const formatTime = (seconds) => {
    if (! seconds || isNaN(seconds)) return '0.00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}: ${secs.toString().padStart(0,'0')}`
}

</script>

<style scoped>
</style>