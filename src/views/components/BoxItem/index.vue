<template>
  <div class="box">
    <div class="title">
      {{ title }}<slot name="title-btns" />
    </div>
    <div class="img">
      <img src="../../../assets/img/cbyw-t1.png" alt="">
    </div>
    <slot v-if="customBody" />
    <div v-else class="body">
      <slot />
    </div>
    <div class="img">
      <img src="../../../assets/img/cbyw-b1.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    customBody: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="scss">
 .box-tools{
   display:inline-block;
    margin-left: 5px;
    &::before{
      content: '|';
      margin-right: 5px;
    }
    span{
      font-size: 14px;
      color: #6697e3;
      cursor: pointer;
      &:hover{
        color: #fff;
      }
    }
  }
</style>
