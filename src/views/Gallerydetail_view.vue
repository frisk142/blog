<template>
    <div class="gallery-detail-page">
        <h1></h1>
        <div class="image-grid">
            <img v-for="(img, i) in currentImages" :key="i" :src="img" alt=""> 
        </div>
    </div>   
</template>

<script setup>


</script>

<style scoped>

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 20px;
}
.image-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

</style> 