<template>
    <div class="Avatar-component">
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
    bgurl: {type: String, default: 'auto'}
})

const dynamicStyle = {
    position: props.position,
    top: props.top,
    left: props.left,
    right: props.right,
    bottom: props.bottom,
    zIndex: props.zIndex,
    bgurl: props.bgurl

}

</script>

<style scoped>
.Avatar-component{
    background: url(/public/images/my.jpg) no-repeat center center;
    width: 200px;
    height: 200px;
    border-radius: 20px;
    background-size: cover;
}
</style>