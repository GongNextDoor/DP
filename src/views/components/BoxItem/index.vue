<template>
  <div class="box">
    <div class="title">{{ title }}</div>
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
