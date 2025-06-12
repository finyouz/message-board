<template>
  <div class="MessageCard">
    <div class="messageCardTop">
      <div class="messageCard__time">2024-04-12 12:00:00</div>
      <div class="messageCard__content">目标</div>
    </div>

    <div class="messageContent">
      1111111111111111111111111111111111111111111111111111111111111111111111
    </div>

    <div class="messageBottom">
      <div class="messageBottom__like">11111</div>

      <div class="messageBottom__comment">匿名</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.MessageCard {
  width: 380px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 4px #0000001a;
    transform: scale(1.05);
    transition: all 0.6s;
  }

  .messageCardTop {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    font-size: 14px;
    color: #666;
  }
  .messageContent {
    height: 204px;
    padding: 0 15px;
    word-wrap: break-word;
    word-break: normal;
    font-size: 18px;
  }

  .messageBottom {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #666;

    .messageBottom__comment {
      font-size: 20px;
    }
  }
}
</style>
