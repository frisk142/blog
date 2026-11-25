<template>
  <div class="not-found-page">
    <div class="content-box">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">哎呀，这里是一片赛博废墟...</h2>
      <p class="error-desc">
        你似乎迷失在了夜之城，或者... 这个页面被黑客删掉了。<br>
        要不喝杯无糖红茶，然后回首页看看？
      </p>
      <div class="action-group">
        <button class="btn primary" @click="$router.push('/')"> 回到首页</button>
        <button class="btn secondary" @click="$router.back()"> ←返回上一页</button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.not-found-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #fff;
}

.content-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 60px 40px;
  text-align: center;
  max-width: 600px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.6s ease-out;
}

.error-code {
  font-size: 8rem;
  font-weight: 900;
  margin: 0;
  line-height: 1;
  background: #fff;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 0 30px rgba(0, 243, 255, 0.4);
  font-family: 'ZhouFangRi', sans-serif; 
}

.error-title {
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 12px;
  letter-spacing: 2px;
}

.error-desc {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 40px;
}

.action-group {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.btn {
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  font-weight: bold;
}

.btn.primary {
  background: #00f3ff;
  color: #000;
  box-shadow: 0 0 15px rgba(0, 243, 255, 0.4);
}

.btn.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 25px rgba(0, 243, 255, 0.6);
}

.btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 576px) {
  .content-box {
    padding: 40px 20px;
  }
  .error-code {
    font-size: 5rem;
  }
  .action-group {
    flex-direction: column;
  }
}
</style>