<template>
    <div class="MusicPlay" :style="dynamicStyle">
      <div class="music-icon">
        <div class="play-skip-back-btn"></div>
        <div class="Playbtn"></div>
        <div class="play-skip-forward-btn"></div>
      </div>
    </div>
</template>

<script setup>
import {ref, computed, onMounted, onUnmounted, watch} from 'vue'
// import {songs} from '@/config/songs'

const props = defineProps({
  position: {type: String, default:'static'},
  top: {type: String, default: ''},
  left: {type: String, default: ''},
  right: {type: String, default: ''},
  bottom: {type: String, default: ''},
  zIndex: {type: String, default: ''},
  width: {type: String, default: ''},
  height: {type: String, default: ''}
})
const dynamicStyle = computed(() => ({
  position: props.position,
  top: props.top,
  left: props.left,
  right: props.right,
  bottom: props.bottom,
  zIndex: props.zIndex,
  width: props.width,
  height: props.height,
}))


// const audio = ref(null)
// const isPlaying = ref(false) // 播放
// const currentTime = ref(0)  // 播放时长
// const duration = ref(0)  // 总时长
// const volume = ref(0.8)  // 音量
// const currenSongIndex = ref(0)  //歌曲索引
// const songsList = ref(songs)  // 歌曲列表

// const currentSong = computed(() => {
//     return songsList.value[currenSongIndex.value] || null
// })

// const progress = computed(() => {
//     if (duration.value === 0) return 0
//     return (currentTime.value / duration.value) * 100
// })

// //播放与暂停
// const toggleplay = () => {
//     if (!audio.value) return
//     if (isPlaying.value){
//         audio.value.pause()
//     } else {
//         audio.value.play()
//     }
//     isPlaying.value = !isPlaying.value
// }

// //播放指定歌曲
// const playSong = (song) => {
//     const index = songsList.value.findIndex(s => s.id === song.id)
//     if (index === -1) return
//     currenSongIndex.value = index
//     if (audio.value) {
//         audio.value.src = song.src
//         audio.value.load()
//         audio.value.play()
//         isPlaying.value = true
//     }
// }
// //上一曲
// const prevSong = () => {
//     const total = songsList.value.length
//     currenSongIndex.value = (currenSongIndex.value - 1 + total) % total
//     if (audio.value) {
//         audio.value.src = currentSong.value.src
//         audio.value.load()
//         audio.value.play()
//         isPlaying.value = true
//     }
// }

// //下一曲
// const nextsong = () => {
//     const total = songsList.value.length
//     currenSongIndex.value= (currenSongIndex.value + 1) % total
//     if (audio.value) {
//         audio.value.src = currentSong.value.src
//         audio.value.load()
//         audio.value.play()
//         isPlaying.value = true
//     }
// }

// // 跳转到指定进度
// const seekTo = (event) => {
//     const val = parseFloat(event.target.value)
//     if (audio.value && duration.value > 0) {
//         audio.value.currentTime = (val / 100) * duration.value
//     }
// }

// // 调整音量
// const adjustVolume = (event) => {
//     const val = parseFloat(event.target.value)
//     volume.value = val
//     if (audio.value) {
//         audio.value.volume = val
//     } 
// }

// // 格式化时间
// const formatTime = (seconds) => {
//     if (! seconds || isNaN(seconds)) return '0.00'
//     const mins = Math.floor(seconds / 60)
//     const secs = Math.floor(seconds % 60)
//     return `${mins}: ${secs.toString().padStart(0,'0')}`
// }

</script>

<style scoped>
.music-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 145px 0; 
}

.MusicPlay{
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 32px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  color: white;
  margin: 0 auto;
  cursor: pointer;
  transition: transform 0.2s ease;
  display: inline-block;
}

.Playbtn, .play-skip-back-btn, .play-skip-forward-btn {
    position: relative;
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    border-radius: 100px;
    transition: all 0.5s ease;
    background-position: center;
    
}

.play-skip-back-btn {
    background-image: url('/icon/player-skip-back.svg');
}

.Playbtn {
    background-image: url('/icon/player-play.svg');
}

.play-skip-forward-btn {
    background-image: url('/icon/player-skip-forward.svg');
}

.MusicPlay:hover {
    border-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
}

.Playbtn:hover {
  background-color: rgba(0, 255, 255, 0.9);
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.1);
  transform: scale(1.05);
}

.play-skip-back-btn:hover {
  background-color: rgba(0, 255, 255, 0.9);
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.1);
  transform: scale(1.05);
}

.play-skip-forward-btn:hover {
  background-color: rgba(0, 255, 255, 0.9);
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.1);
  transform: scale(1.05);
}


</style>