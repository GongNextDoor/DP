<template>
  <div :id="id" class="echarts" />
</template>

<script>
export default {
  name: 'LegendLine',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      id: `legendLine${Number(
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
          left: '30',
          right: '170',
          bottom: '40'
          // containLabel: true
        },
        legend: { // 图例组件，颜色和名字
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 10,
          textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 14
          },
          icon: 'circle',
          itemWidth: 6,
          itemHeight: 6
        },
        color: ['#468EDD', '#4ED3B7', '#E28A4A'],
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 14
          }
        },
        xAxis: [
          {
            type: 'category',
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(209, 209, 209, .3)'
              }
            },
            axisLabel: {
              interval: 0,
              color: 'rgba(255,255,255, .5)',
              fontSize: 12,
              formatter: function(params) {
                var newParamsName = ''// 最终拼接成的字符串
                var paramsNameNumber = params.length// 实际标签的个数
                var provideNumber = 4// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber)// 换行的话，需要显示几行，向上取整
                /**
                             * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                             */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                  /** 循环每一行,p表示行 */
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = ''// 表示每一次截取的字符串
                    var start = p * provideNumber// 开始截取的位置
                    var end = start + provideNumber// 结束截取的位置
                    // 此处特殊处理最后一行的索引值
                    if (p === rowNumber - 1) {
                      // 最后一次不换行
                      tempStr = params.substring(start, paramsNameNumber)
                    } else {
                      // 每一次拼接字符串并换行
                      tempStr = params.substring(start, end) + '\n'
                    }
                    newParamsName += tempStr// 最终拼成的字符串
                  }
                } else {
                  // 将旧标签的值赋给新标签
                  newParamsName = params
                }
                // 将最终的字符串返回
                return newParamsName
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            // boundaryGap: false,
            data: this.data[0].xData

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
            name: '居民养老保险',
            type: 'line',
            smooth: true, // 是否平滑
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
            data: this.data[0].yData
          },
          {
            name: '企业养老保险',
            type: 'line',
            smooth: true, // 是否平滑
            symbol: 'circle',
            symbolSize: 0,
            lineStyle: {
              normal: {
                color: '#4ED3B7',
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#4ED3B788'
                },
                {
                  offset: 1,
                  color: '#4ED3B700'
                }
                ], false)
              }
            },
            data: this.data[1].yData
          },
          {
            name: '机关事业单位养老保险',
            type: 'line',
            smooth: true, // 是否平滑
            symbol: 'circle',
            symbolSize: 0,
            lineStyle: {
              normal: {
                color: '#E28A4A',
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#E28A4A88'
                },
                {
                  offset: 1,
                  color: '#E28A4A00'
                }
                ], false)
              }
            },
            data: this.data[2].yData
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
