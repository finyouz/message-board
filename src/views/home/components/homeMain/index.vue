<template>
  <div class="homeMain">
    <div class="homeMain__title">
      <h1>留言板</h1>
      <p>很多事情值得记录，也值得回味。</p>
    </div>
    <CardList />
  </div>
</template>
<script setup lang="ts">
import CardList from '../cardList/index.vue'
</script>
<style scoped lang="scss">
.homeMain {
  width: 1600px;
  min-width: 1200px;
  margin: 100px auto 30px auto;
  .homeMain__title {
    width: 400px;
    margin: 0 auto;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 50px;
      font-weight: 600;
    }
    p {
      font-size: 16px;
      color: #666;
    }
  }
}
</style>
