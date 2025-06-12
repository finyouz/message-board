<template>
  <div class="header">
    <div class="header__logo">
      <img src="@/assets/images/logo.jpg" alt="logo" class="logo" />
      <div class="logoName">小胖时光</div>
    </div>
    <div class="header__other">
      <i class="iconfont icon-taiyang"></i>
      <div class="avatar"></div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: $other1;
  box-shadow: 0 0 4px #0000001a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  z-index: 999;
  .header__logo {
    height: 30px;
    display: flex;
    .logo {
      height: 100%;
      align-items: center;
    }

    .logoName {
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: 10px;
      font-size: 20px;
      font-weight: 600;
    }
  }

  .header__other {
    display: flex;
    align-items: center;
    height: 30px;
    cursor: pointer;
    .iconfont {
      font-size: 30px;
      margin-right: 10px;
    }

    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: red;
    }
  }
}
</style>
