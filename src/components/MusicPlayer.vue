<template>
<div class="MusicPlay" :style="dynamicStyle">
  <div class="song-info">
    <div class="song-title">{{ currentSong?.title || '未选择歌曲' }}</div>
  </div>

  <div class="music-icon">
    <div class="menu-btn" @click="showPlaylist"></div>
    <div class="play-skip-back-btn" @click="prevSong"></div>
    <div class="Playbtn" :style="{ backgroundImage: `url(${isPlaying ? '/icon/player-pause.svg' : '/icon/player-play.svg'})` }" @click="toggleplay"></div>
    <div class="play-skip-forward-btn" @click="nextsong"></div>

    <div class="volume-btn" @click="showVolumeBar">
      <div v-if="volumebar" class="volume-slider-container">
        <input 
        type="range" 
        min="0" 
        max="1" 
        step="0.01"
        :value="volume"
        @input="adjustVolume"
        class="volume-slider"
       />
    </div>

   </div>
  </div>

  <div v-if="Playlist" class="playlist-overlay">
    <div 
    v-for="song in songsList"
    :key="song.id"
    class="playlist-item"
    @click="playSong(song)"
  >
  <span>{{ song.title }}</span>
    </div>
  </div>


  <div class="music-progress">
    <span class="Time-current">{{ formatTime(currentTime.value) }}</span>
    <input
    type="range"
    min="0"
    :max="duration.value"
    step="1"
    class="progress-slider"
    :value="progress"
    @input="seekTo"
    />
    <span class="Time-duration ">{{ formatTime(duration.value) }}</span>
  </div>
</div>

</template>

<script setup>
import {ref, computed, onMounted, onUnmounted, watch} from 'vue'
import {songs} from '@/config/songs'

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


const audio = ref(null)
const isPlaying = ref(false) // 播放
const currentTime = ref(0)  // 播放时长
const duration = ref(0)  // 总时长
const volume = ref(0.8)  // 音量
const currenSongIndex = ref(0)  //
const songsList = ref(songs)  // 歌曲列表
const Playlist = ref(false)  // 播放列表
const volumebar = ref(false)  // 音量条




onMounted(() => {
  if (audio.value){
    audio.value.addEventListener('loadmetadata', () => {
       duration.value = audio.value.duration
     })
    audio.value.addEventListener('timeupdate', () => {
      currentTime.value = audio.value.currentTime
    })
  }
})


const currentSong = computed(() => {
    return songsList.value[currenSongIndex.value] || null
})

const progress = computed(() => {
    if (duration.value === 0) return 0
    return (currentTime.value / duration.value) * 100
})

const showPlaylist = () => {
  Playlist.value = !Playlist.value
  console.log('showPlaylist', Playlist.value)
}

const showVolumeBar = () => {
  volumebar.value = !volumebar.value
  console.log('showVolumeBar', volumebar.value)
}

//歌曲加载
onMounted(() => {
  audio.value = new Audio(currentSong.value.src)
  audio.value.volume = volume.value

  if (songsList.value.length > 0) {
    const fristsong = songsList.value[0]
    audio.value.src = fristsong.src
    currenSongIndex.value = 0
  }
  console.log('audio loaded', audio.value.src)
})


//播放与暂停
const toggleplay = () => { 
  console.log('toggleplay')
    if (!audio.value) return
    if (isPlaying.value){
        audio.value.pause()
        console.log('暂停')
    } else {
        audio.value.play() 
        console.log('播放')
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
    console.log('playSong', song.title, currenSongIndex.value)
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
    console.log('prevSong', currentSong.value.title, currenSongIndex.value)
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
    console.log('nextsong', currentSong.value.title, currenSongIndex.value)
}

// 跳转到指定进度
const seekTo = (event) => {
    const val = parseFloat(event.target.value)
    if (audio.value && duration.value > 0) {
        audio.value.currentTime = (val / 100) * duration.value
    }
    console.log('seekTo', val, audio.value.currentTime)
}

// 调整音量
const adjustVolume = (event) => {
    const val = parseFloat(event.target.value)
    volume.value = val
    if (audio.value) {
        audio.value.volume = val
    } 
    console.log('adjustVolume', val, audio.value.volume)
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

.MusicPlay{
  position: relative;
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
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  gap: 20px;
  align-items: center;
}

.music-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.Playbtn, .play-skip-back-btn, .play-skip-forward-btn, .menu-btn, .volume-btn { 
    position: relative;
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    border-radius: 100px;
    transition: all 0.5s ease;
    background-position: center;
    padding: 6px;
}

.music-progress {
  display: flex;
  width: 300px;
  gap: 12px;
  align-items: center;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.5);

}

.progress-slider{
  flex: 1;
  height: 4px;
  -webkit-appearance: none;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.playlist-overlay {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  max-height: 200px;
  overflow-y: auto;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 8px 0;
  z-index: 10;
}

.playlist-item {
  padding: 8px 16px;
  color: #ddd;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  justify-content: space-between;
}

.song-info{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
}

.song-title {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
}


.volume-slider-container {
  transform: rotate(-90deg);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.7); 
  backdrop-filter: blur(8px);
  padding: 12px 16px;
  border-radius: 12px;
  z-index: 20;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.volume-slider {
  width: 80px;
  height: 4px;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.3);
  transition: rotate(-90deg);
  outline: none;
  appearance: none;
  -webkit-appearance: none;
}

.volume-slider::-webkit-slider-thumb {
  writing-mode: bt-lr;
  -webkit-appearance: none;
  width:12px;
  height:12px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
}

.Time-courrent, .Time-duration {
  font-size: 12px;
  color: #fff;
  min-width: 36px;
  text-align: center;
}


.play-skip-back-btn {
    background-image: url('/icon/player-skip-back.svg');
}

.play-skip-forward-btn {
    background-image: url('/icon/player-skip-forward.svg');
}

.menu-btn {
    background-image: url('/icon/menu.svg');
}

.volume-btn {
    background-image: url('/icon/volume.svg');
}

.MusicPlay:hover {
    border-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
}

.Playbtn:hover, .play-skip-back-btn:hover, .play-skip-forward-btn:hover, .menu-btn:hover, .volume-btn:hover {
  background-color: rgba(0, 255, 255, 0.9);
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.1);
  transform: scale(1.05);
}

</style>