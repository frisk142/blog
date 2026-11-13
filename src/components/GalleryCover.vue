<template>
    <div class="gallery">
        <div class="photo-stack">
            <div class="photo-card back-left" style="--rot: -8deg">
                <img src="" alt="">/
            </div>

            <div class="photo-card back-right" style="--rot: 8deg">
                <img src="" alt="">/
            </div>

            <div class="photo-card front" style="--rot: 0deg">
                <img src="" alt="">/
                <div class="front-overlay">
                    <h3>Gallery Title</h3>
                    <p>Some description about the gallery.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


</script>

<style scoped>
/* 1. 照片堆叠区 */
.photo-stack {
  position: relative;
  width: 400px;
  height: 300px;
  margin: 0 auto;
}

/* 2. 通用卡片样式 */
.photo-card {
  position: absolute;
  top: 50%; left: 50%;
  width: 80%;       /* 让卡片比容器小一点 */
  aspect-ratio: 4 / 3;
  background: #fff;
  padding: 8px;     /* 白边 */
  border-radius: 6px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  transform: translate(-50%, -50%) rotate(var(--rot, 0deg));
  transition: all 0.3s ease;
}

/* 3. 后面两张模糊 */
.back-left, .back-right {
  filter: blur(4px);
  opacity: 0.7;
  z-index: 1;
}

/* 4. 最前面清晰 */
.front {
  z-index: 2;
  cursor: pointer;
  /* 鼠标移上去的时候，前面的卡片会轻微放大 */
}
.front:hover {
  transform: translate(-50%, -50%) rotate(0deg) scale(1.05);
}

/* 5. 文字遮罩 */
.front-overlay {
  position: absolute;
  inset: 8px; /* 和图片的 padding 对齐 */
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  color: #fff;
  pointer-events: none; /* 让鼠标事件穿透给 .front */
}

/* 6. 底部信息 */
.gallery-info {
  text-align: center;
  margin-top: 30px;
  color: #fff;
}
.date-badge {
  background: rgba(255,255,255,0.2);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
}
</style>