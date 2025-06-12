<template>
  <div class="cardList">
    <div class="cardType">
      <div
        v-for="(item, index) in cardType"
        class="item"
        :key="item.id"
        :class="{
          active: currentIndex === index
        }"
        @click="currentIndex = index"
      >
        {{ item.name }}
      </div>
    </div>

    <div class="MessageCardList">
      <MessageCard v-for="item in 10" :key="item" />
    </div>
  </div>
</template>
<script setup>
import { cardType } from '@/utils/list'
import MessageCard from '@/components/messageCard/index.vue'
import { ref } from 'vue'

const currentIndex = ref(0)
</script>
<style scoped lang="scss">
.cardList {
  margin-top: 40px;
  .cardType {
    width: 600px;
    height: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .item {
      cursor: pointer;
    }
    .active {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      border-radius: 20px;
      border: 1px solid #000;
    }
  }

  .MessageCardList {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }
}
</style>
