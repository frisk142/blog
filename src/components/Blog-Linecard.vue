<template>
    <div class = "Blog-Linecard">
    <slot></slot>
    </div>
</template>

<style scoped>
.Blog-Linecard {
    max-width: 500px;
    width: 90%;
    
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem;
    width: 100%;
    color: #eee;
    transition: all 0.2s ease;
}

.Blog-Linecard:hover {
    border-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.1);
}
</style>