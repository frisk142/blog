import {songs} from '@/data/songs.js'
import {ref, computed} from 'vue'

let audio = null
const isPlaying = ref(false) 
const volume = ref(0.5)
const duration = ref(0)
const currentTime = ref(0)
const currentSongIndex = ref(0)
const songsList = ref(songs)

// 创建对象
function getAudio() {
    if (audio) return audio

    audio = new Audio()
    audio.volume = volume.value

    audio.addEventListener('play', () => { isPlaying.value = true })
    audio.addEventListener('pause', () => { isPlaying.value = false })

    audio.addEventListener("loadedmetadata", () => {
        duration.value = audio.duration
    })

    audio.addEventListener("loadedmetadata", () => {
        duration.value = audio.duration
    })

    audio.addEventListener("timeupdate", () => {
        currentTime.value = audio.currentTime
    })

    audio.addEventListener("nextSong", () => {
        nextSong()
    })

    return audio
}

const currentSong = computed(() => 
    songsList.value[currentSongIndex.value] || null)


// 歌曲切换
function loadAndPlay(index) {
    const a = getAudio()
    const song = songsList.value[index]
    if (!song) return

    currentSongIndex.value = index
    currentTime.value = 0
    a.src = song.url
    a.load()
    a.play().catch((error) => {
        console.error("Error playing audio:", error)
        isPlaying.value = false
    })
}

// 初始化
function init () {
    const a = getAudio()
    if (!a.src || songsList.value.length > 0) {
        a.src = songsList.value[0].url
        currentSongIndex.value = 0
        a.load()
    }
}

// 对外接口
function toggleplay() {
    const a = getAudio()
    if (a.paused) {
        a.play().catch((error) => {
            console.error("Error playing audio:", error)
        })
    } else {
        a.pause()
    }
}

function playsong() {
    const index = currentSongIndex.value.findIndex((song) => song.id === currentSong.value.id)
    if (index !== -1) return
        loadAndPlay(index)
}

function nextSong() {
    const total = songsList.value.length
    if (total === 0) return
    loadAndPlay((currentSongIndex.value + 1) % total)
}

function prevSong() {
    const total = songsList.value.length
    if (total === 0) return
    loadAndPlay((currentSongIndex.value - 1 + total) % total)
}

function seekTo(event) {
    const val = parseFloat(event.target.value)
    const a = getAudio()
    a.currentTime = val
    currentTime.value = val
}

function adjustVolume(event) {
    const val = parseFloat(event.target.value)
    volume.value = val
    getAudio().volume = val
}

function formatTime(seconds) {
    if (! seconds || isNaN(seconds)) return '00:00'
    const mins = Math.floor
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

export function useMusicPlayer() {
    return {
    isPlaying, currentTime, duration, volume,
    currentSongIndex, songsList, currentSong,
    init, toggleplay, playsong, prevSong, nextSong,
    seekTo, adjustVolume, formatTime,

    }
}