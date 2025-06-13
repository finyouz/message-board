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
      <MessageCard v-for="item in num" :key="item" />
    </div>

    <div class="sentinel" ref="sentinel"></div>
    <div ref="loading" class="loading" v-show="isLoading"></div>
    <div class="loadingText" v-if="loadComplete">加载完成。。。。</div>
  </div>
</template>
<script setup lang="ts">
import { cardType } from '@/utils/list'
import pathLoading from '@/assets/lottie/loading.json'
import MessageCard from '@/components/messageCard/index.vue'
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import lottie from 'lottie-web'
let observe: IntersectionObserver
const sentinel = ref(null)
const loading = ref<Element>()
const isLoading = ref<boolean>(true)
const loadComplete = ref<boolean>(false)
const num = ref<number>(0)
const getScroll = () => {
  observe = new IntersectionObserver(
    entries => {
      const [entry] = entries
      if (entry.isIntersecting) {
        isLoading.value = true
        current.value++
        console.log(current.value)
        // getCardList()
      }
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }
  )

  if (sentinel.value) {
    observe.observe(sentinel.value)
  }
}

const loadingAnimation = () => {
  nextTick(() => {
    lottie.loadAnimation({
      container: loading.value as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: pathLoading as unknown as string
    })
  })
}
const current = ref<number>(1)
const pageSize = ref<number>(20)

const getCardList = async () => {
  setTimeout(() => {
    num.value += 10
  }, 2000)
}

onMounted(() => {
  loadingAnimation()
  getScroll()
  getCardList()
})

onBeforeUnmount(() => {
  observe.disconnect()
})

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

  .loading {
    width: 50px;
    margin: 0 auto;
  }

  .loadingText {
    width: 150px;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
