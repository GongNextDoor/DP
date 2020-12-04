<template>
  <div :id="id" class="echarts" />
</template>

<script>
export default {
  name: 'EchartsDBar',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      id: `echartsDBar${Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36)}`
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
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['收入', '支出'],
          icon: 'circle',
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '10px',
          right: '20px',
          bottom: '20px',
          top: '30px',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.data.xData,
            axisLine: { lineStyle: { color: '#355994' }},
            axisLabel: { color: '#fff' }
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: { show: false },
            axisLine: { lineStyle: { color: '#355994' }}
          }
        ],
        series: [
          {
            name: '收入',
            type: 'bar',
            stack: '总量',
            barWidth: '20%',
            itemStyle: {
              normal: {
                color: '#1554C7'
              }
            },
            data: this.data.yData[0]
          },
          {
            name: '支出',
            type: 'bar',
            stack: '总量',
            barWidth: '20%',
            itemStyle: {
              normal: {
                color: '#FEC940'
              }
            },
            data: this.data.yData[1]
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
.echarts{
  width: 100%;
  height: 100%;
}
</style>

