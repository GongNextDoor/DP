<template>
  <table class="my-table">
    <tr>
      <th style="width: 70px">行政区域</th>
      <th align="left" style="width: 120px">风险类型</th>
      <th align="left">详细描述</th>
    </tr>
    <tr>
      <td colspan="3">
        <vue-seamless-scroll :data="data" :class-option="defaultOption">
          <div class="list">
            <div v-for="(item, index) of data" :key="index" class="list-item">
              <div class="column-a">{{ item.a }}</div>
              <div class="column-b">{{ item.b }}</div>
              <div class="column-c">{{ item.c }}</div>
            </div>
          </div>
        </vue-seamless-scroll>
      </td>
    </tr>
  </table>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  name: 'MyTable',
  components: {
    vueSeamlessScroll
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    defaultOption() {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-table {
  width: 100%;
  tr {
    width: 100%;
  }
  th,
  td {
    padding: 8px;
    overflow: hidden;
  }
  th {
    color: #ccc;
  }
  .list {
    padding-top: 30px;
    .list-item {
      width: 100%;
      display: flex;
      .column-a {
        padding: 8px 0;
        text-align: center;
        width: 70px;
        color: #e28a4a;
      }
      .column-b {
        padding: 8px 0;
        width: 120px;
      }
      .column-c {
        padding: 8px 0;
        flex: 1;
      }
    }
  }
}
</style>
