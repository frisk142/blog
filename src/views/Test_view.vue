<template>
    <div class="page">
        <BlogLinecard>
            <AvatarComponent v-bind="avatarConfig">
            <h1>无糖红茶</h1>
            </AvatarComponent>
        </BlogLinecard>
    </div>
</template>

<script setup>
import AvatarComponent from '@/components/Avatar-component.vue';
import BlogLinecard from '@/components/Blog-Linecard.vue'; 

const avatarConfig = {
    position: 'fixed',
    top: '200px',
    left: '30px',
    zIndex: '999',
    width: '200',
    height: '200',
}
</script>

<style>
.page{
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}


</style>
