<template>
  <div class="numDigitroll">
    <template v-if="flag">
      <div
        v-for="(item, index) of digits"
        :key="index"
        class="item"
        :class="item === ',' && 'sm'"
      >
        <span v-if="item == '.'" style="line-height:50px">.</span>
        <DigitRoll v-else-if="item !== ','" :roll-digits="item" />
        <span v-else>,</span>
      </div>
    </template>
  </div>
</template>

<script>
import DigitRoll from '@huoyu/vue-digitroll'
export default {
  name: 'NumDigitroll',
  components: { DigitRoll },
  props: {
    num: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      flag: true
    }
  },
  computed: {
    digits: function() {
      this.change()
      var numArr = this.num.toString().split('.')
      var arr = numArr[0].toString().split('').map(Number)
      var result = []
      var counter = 0
      for (var i = arr.length - 1; i >= 0; i--) {
        counter++
        result.unshift(arr[i])
        if (!(counter % 3) && i !== 0) {
          result.unshift(',')
        }
      }
      if (numArr[1] && numArr[1] !== '00') {
        result.push('.')
        result.push(...numArr[1].toString().split(''))
      }
      return result
    }
  },
  methods: {
    change() {
      this.flag = false
      this.$nextTick(() => {
        this.flag = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.numDigitroll {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  .item {
    width: 34px;
    text-align: center;
    /deep/ .d-roll-wrapper {
      padding: 5px 0;
      margin: 0;
      background-image: url(../../../assets/img/num-bg.png);
      background-size: 100% 100%;
    }
  }
  .sm {
    width: 17px;
    line-height: 50px;
  }
  .item + .item {
    margin-left: 4px;
  }
}
</style>
