<template>
    <div class="Avatar-component" :style="dynamicStyle">
    </div>
</template>

<script setup>
const props = defineProps({
    position: {type: String, default: 'static'},
    top: {type: String, default: 'auto'},
    left: {type: String, default: 'auto'},
    right: {type: String, default: 'auto'},
    bottom: {type: String, default: 'auto'},
    zIndex: {type: String, default: 'auto'},
    bgUrl: {type: String, default: ''},
    width: {type: String, default: '200px'},
    height: {type: String, default: '200px'},
    borderRadius: {type: String, default: '20px'}

})

const dynamicStyle = {
    position: props.position,
    top: props.top,
    left: props.left,
    right: props.right,
    bottom: props.bottom,
    zIndex: props.zIndex,
    width: props.width,
    height: props.height,
    backgroundImage: props.bgUrl ? `url(${props.bgUrl})` : 'url(/public/image/my.jpg)',
    backgroundSize: 'contain',
    backgroundPosition: "center center",
    backgroundRepeat: 'no-repeat',

}

</script>

<style scoped>
.Avatar-component{
    display: inline-block;
    background-color: #ff7b2c !important;
    border: 10px solid red;

}
</style>