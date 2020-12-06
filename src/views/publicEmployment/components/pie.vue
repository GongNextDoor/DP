<template>
  <div :id="id" class="echarts" />
</template>

<script>
export default {
  name: 'Pie',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      id: `pie${Number(
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
        legend: {
          type: 'scroll',
          orient: 'horizontal',
          bottom: 0,
          textStyle: {
            color: 'rgba(255,255,255, .5)'
          },
          icon: 'circle',
          itemWidth: 6,
          itemHeight: 6
        },
        color: [
          '#2084D0',
          '#4ED3B7',
          '#E28A4A',
          '#7267AD',
          '#F36D85',
          '#B47B73'
        ],
        series: [
          {
            name: '1',
            type: 'pie',
            radius: ['35%', '60%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: 'outside',
              formatter: '{b}：{c}',
              rich: {
                hr: {
                  backgroundColor: 't',
                  borderRadius: 3,
                  width: 3,
                  height: 3,
                  padding: [3, 3, 0, -12]
                },
                a: {
                  padding: [-30, 15, -20, 15]
                }
              }
            },
            labelLine: {
              normal: {
                length: 10,
                length2: 30,
                lineStyle: {
                  type: 'dotted',
                  width: 1
                }
              }
            },
            itemStyle: {
              borderRadius: 10,
              borderColor: '#021b4e',
              borderWidth: 4
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '12',
                fontWeight: 'bold',
                formatter: '{b}：{d}%'
              },
              labelLine: {
                show: true,
                lineStyle: {
                  type: 'dotted',
                  width: 1
                }
              }
            },
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
