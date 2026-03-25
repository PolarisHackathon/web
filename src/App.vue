<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  console.log('Polaris Website Mounted');
});
</script>

<template>
  <div class="website-container">
    <div class="dynamic-background"></div>
    <div class="overlay vignette"></div>
    <div class="content-wrapper">
      <img src="/foreground.svg" class="foreground-content" alt="Website Content" />
    </div>
  </div>
</template>

<style>
/* Global resets */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #050510; /* Deep dark blue/black */
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  width: 100%;
  height: 100%;
}
</style>

<style scoped>
.website-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #000;
}

/* Dynamic Background */
.dynamic-background {
  position: absolute;
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;
  background-image: url('/bg.png');
  background-size: cover;
  background-position: center;
  animation: breathe 12s infinite alternate ease-in-out;
  z-index: 1;
  /* Add subtle initial fade in */
  opacity: 0;
  animation: breathe 12s infinite alternate ease-in-out, fadeIn 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes breathe {
  0% { transform: scale(1) translate(0, 0); }
  50% { transform: scale(1.15) translate(-2%, -1%); }
  100% { transform: scale(1.05) translate(-4%, -3%); }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* Premium Vignette Overlay */
.overlay.vignette {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%),
              linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%);
  z-index: 2;
  pointer-events: none;
}

/* Content Container matching SVG layout */
.content-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1098px; /* Based on SVG viewBox */
  max-height: 730px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Initial entrance animation */
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
}

.foreground-content {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* Premium drop-shadow to separate from background */
  filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.4)) drop-shadow(0px 2px 5px rgba(255, 255, 255, 0.1));
  animation: float 8s ease-in-out infinite alternate;
}

@keyframes slideUpFade {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes float {
  0% { transform: translateY(0px) rotate(0deg); }
  100% { transform: translateY(-8px) rotate(0.5deg); }
}
</style>
