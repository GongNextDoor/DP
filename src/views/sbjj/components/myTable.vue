<template>
  <table class="my-table">
    <tr>
      <th style="width:70px">行政区域</th>
      <th align="left" style="width:120px">风险类型</th>
      <th align="left">详细描述</th>
    </tr>
    <tr v-for="(item, index) of data" :key="index">
      <td align="center" style="color: #e28a4a">{{ item.a }}</td>
      <td>{{ item.b }}</td>
      <td>{{ item.c }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.my-table {
  width: 100%;
  th,td {
    padding: 8px;
  }
  th {
    color: #ccc;
  }
}
</style>
