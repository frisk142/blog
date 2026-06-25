<template>
    <div class="Link-Icon" @click="handleClick" :style="dynamicStyle">
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
    width: {type: String, default: '20px'},
    height: {type: String, default: '20px'},
    iconUrl: {type: String, default:''},
    marginRight: { type: String, default: '0' },

    to:{
        type: String,
        required: true
    },

    target: {
        type: String,
        default: '_self'
    }
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
    backgroundImage:`url(${props.iconUrl})`,
    backgroundSize: 'contain',
    backgroundPosition: "center center",
    backgroundRepeat: 'no-repeat',
    marginRight: props.marginRight,

}

const handleClick = () =>{
    if (props.target === '_blank') {
        window.open(props.to, '_blank')
    } else {
        window.location.href = props.to
    }
}


</script>

<style scoped>
.Link-Icon {
    cursor: pointer;
    transition: transform 0.2s ease;
    display: inline-block;
 }

 .Link-Icon:hover{
    transform: scale(1.05);
 }

</style>