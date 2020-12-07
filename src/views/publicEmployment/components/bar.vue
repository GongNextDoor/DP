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
          top: '15%',
          left: '5%',
          right: '5%',
          bottom: '60'
          // containLabel: true
        },
        legend: {
          data: ['补贴人次数', '补贴金额'],
          right: 80,
          top: 10,
          padding: [8, 0, 0, 0],
          textStyle: {
            color: '#B3B6BD'
          }
        },
        color: ['#FF6420'],
        tooltip: {
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
            name: '人次',
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
          },
          {
            type: 'value',
            name: '万元',
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
            name: '补贴人次数',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#4fd6b9' },
                  { offset: 1, color: '#195372' }
                ])
              }
            },
            data: this.data.yData1
          },
          {
            name: '补贴金额',
            type: 'bar',
            barWidth: 20,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#0ea3f3' },
                  { offset: 1, color: '#043a76' }
                ])
              }
            },
            data: this.data.yData2
          }
        ],
        animationDurationUpdate: 800,
        animationEasingUpdate: 'linear'
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
