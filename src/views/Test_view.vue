<template>
    <div>
        <BlogLinecard>
            <AvatarComponent>
            <h1>无糖红茶</h1>
            </AvatarComponent>
        </BlogLinecard>
    </div>
</template>

<script setup>
import AvatarComponent from '@/components/Avatar-component.vue';
import BlogLinecard from '@/components/Blog-Linecard.vue'; 
</script>

<style>
body{
    margin: 0;
    padding: 0;
    background: url(/public/images/Home_View.jpg) no-repeat center center;
    z-index: -1;
}
</style>
