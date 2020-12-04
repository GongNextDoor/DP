<template>
  <div :id="id" class="echarts" />
</template>

<script>
export default {
  name: 'EchartsNumBar',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      id: `echartsNumBar${Number(
        Math.random().toString().substr(3, 3) + Date.now()
      ).toString(36)}`
    }
  },
  watch: {
    data: {
      handler: function() {
        this.dram()
      },
      deep: true
    }
  },
  mounted() {
    this.dram()
  },
  methods: {
    dram() {
      var option = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          top: 35,
          bottom: 10
        },
        xAxis: {
          type: 'value',
          position: 'top',
          splitLine: { show: false },
          axisLine: { lineStyle: { color: '#355994' }}
        },
        yAxis: {
          type: 'category',
          axisTick: { show: false },
          splitLine: { show: false },
          axisLine: { lineStyle: { color: '#355994' }},
          axisLabel: { color: '#fff' },
          data: ['结余', '支出', '收入']
        },
        series: [
          {
            itemStyle: {
              normal: {
                color: function(par) {
                  if (par.data.name === '收入') {
                    return '#f06720'
                  }
                  if (par.data.name === '支出') {
                    return '#2bdaff'
                  }
                  if (par.data.value < 0) {
                    return '#EF3739'
                  }
                  return '#2bd594'
                },
                barBorderRadius: 10
              }
            },
            type: 'bar',
            barWidth: '60%',
            data: this.data
          }
        ]
      }
      var echarts = this.$echarts.init(document.getElementById(this.id))
      echarts.setOption(option, true)
      window.addEventListener('resize', () => {
        echarts.resize()
      })
    }
  }
}
</script>

<style scoped lang="scss">
.echarts {
  width: 100%;
  height: 100%;
}
</style>

