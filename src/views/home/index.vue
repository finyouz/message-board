<template>
  <Header />
  <video
    autoplay
    src="@/assets/images/qm1-CbZMa-jb.mp4"
    loop
    muted
    class="bg__video"
    style="height: calc(100vh- 60px)"
  ></video>
  <HomeMain />
</template>
<script setup>
import Header from '@/components/Header/index.vue'
import HomeMain from './components/homeMain/index.vue'
</script>
<style scoped lang="scss">
.bg__video {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
