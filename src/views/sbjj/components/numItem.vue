<template>
  <div class="num-item">
    <div class="img">
      <img src="../../../assets/img/chx-icon4.png" alt="">
    </div>
    <div class="info">
      <div class="name">{{ title }}</div>
      <div class="num">
        <span>{{ num }}</span>
        <small>亿元</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NumItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    num: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.num-item {
  margin-top: 10px;
  flex: 1;
  background-image: url("../../../assets/img/numberBg.png");
  background-size: 100% 100%;
  display: flex;
  padding-left: 20px;
  .img {
    padding-top: 12px;
    width: 70px;
  }
  .info {
    padding-top: 17px;
    flex: 1;
    .name {
      margin-bottom: 5px;
      color: rgba(255, 255, 255, 0.8);

      & + .num {
        span {
          font-size: 24px;
          line-height: 1;
          color: #0699fa;
        }
      }
    }
  }
  &:last-child {
    margin-left: 10px;
  }
}
</style>
