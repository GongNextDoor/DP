<template>
  <div :id="id" class="echarts" />
</template>

<script>
export default {
  name: 'MyLine',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      id: `line${Number(
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
        grid: {
          top: '10%',
          left: '10%',
          right: '2%',
          bottom: '30'
        },
        color: ['#468EDD'],
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 14
          }
        },
        xAxis: [
          {
            type: 'category',
            name: '月',
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(209, 209, 209, .3)'
              }
            },
            axisLabel: {
              color: 'rgba(255,255,255, .5)'
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            data: this.data.xData

          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(209, 209, 209, .3)'
              }
            },
            axisLabel: {
              show: true,
              color: 'rgba(255,255,255, .5)'
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '人次',
            type: 'line',
            smooth: true, // 是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 0,
            lineStyle: {
              normal: {
                color: '#468EDD',
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#468EDD88'
                },
                {
                  offset: 1,
                  color: '#468EDD00'
                }
                ], false)
              }
            },
            data: this.data.yData
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
