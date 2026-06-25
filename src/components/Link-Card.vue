<template>
    <div class="Link-Icon">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref, Transition } from 'vue';

const props = defineProps({
    position: {type: String, default: 'static'},
    top: {type: String, default: 'auto'},
    left: {type: String, default: 'auto'},
    right: {type: String, default: 'auto'},
    bottom: {type: String, default: 'auto'},
    zIndex: {type: String, default: 'auto'},
    bgUrl: {type: String, default: ''},
    width: {type: String, default: '20px'},
    height: {type: String, default: '20px'},
    iconUrl: {type: String, default:''},
    linkUrl: {type: String, default: ''}

})

const LinkIcon = ref({
    width: '32px',
    height: '32px',
    Transition: 'transfrom 0.2s ease',
    transfrom: 'scale(1)' 
})



</script>

<style>


</style>