import {songs} from '@/data/songs.js'
import {ref, computed} from 'vue'

let audio = null
const isPlaying = ref(false) 
const volume = ref(0.5)
const duration = ref(0)


function getAudio() {
    if (audio) return audio

    audio = new Audio()
    audio.volume = volume.value

    audio.addEventListener('play', () => { isPlaying.value = true })
    audio.addEventListener('pause', () => { isPlaying.value = false })

    audio.addEventListener("loadedmetadata", () => {
        duration.value = audio.duration
    })

    audio.addEventListener("volumechange", () => {

    


}