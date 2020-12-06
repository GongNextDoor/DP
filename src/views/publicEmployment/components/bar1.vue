<template>
  <div :id="id" class="echarts" />
</template>

<script>
export default {
  name: 'Bar',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      id: `bar${Number(
        Math.random()
          .toString()
          .substr(3, 3) + Date.now()
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
          bottom: '20%'
          // containLabel: true
        },
        color: ['#FF6420'],
        tooltip: {
          show: false,
          trigger: 'axis',
          textStyle: {
            fontSize: 14
          }
        },
        xAxis: [
          {
            type: 'category',
            name: '',
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
            // boundaryGap: false,
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
            name: '',
            type: 'bar',
            barWidth: 14,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00FFE3'
                },
                {
                  offset: 1,
                  color: '#4693EC'
                }
                ])
              }
            },
            data: this.data.yData,
            z: 10,
            zlevel: 0,
            label: {
              normal: {
                show: true,
                position: 'top',
                formatter: '{c}',
                textStyle: {
                  color: '#748bb2',
                  fontSize: 12
                }
              }
            }
          },

          {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
              normal: {
                color: '#061348'
              }
            },
            symbolRepeat: 'fixed',
            symbolMargin: 2,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [18, 2],
            symbolPosition: 'start',
            symbolOffset: [1, -1],
            // symbolBoundingData: this.total,
            data: this.data.yData,
            width: 20,
            z: 0,
            zlevel: 1
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
