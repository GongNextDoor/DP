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
        Math.random().toString().substr(3, 3) + Date.now()
      ).toString(36)}`,
      myEchart: null,
      mTime: null
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
          orient: 'vertical',
          left: 20,
          top: 20,
          textStyle: {
            color: 'rgba(255,255,255, .5)'
          },
          icon: 'circle',
          itemWidth: 6,
          itemHeight: 6
        },
        color: ['#2084D0', '#4ED3B7', '#E28A4A', '#7267AD', '#F36D85', '#B47B73'],
        series: [
          {
            name: '1',
            type: 'pie',
            radius: ['65%', '85%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
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
                formatter: '{b}\n{c}亿元'
              }
            },
            labelLine: {
              show: false
            },
            data: this.data
          }
        ]
      }
      this.myEchart = this.$echarts.init(document.getElementById(this.id))
      this.myEchart.setOption(option, true)
      window.addEventListener('resize', () => {
        this.myEchart.resize()
      })

      var index = 0
      clearInterval(this.mTime)
      this.mTime = setInterval(() => {
        if (index !== 0) {
          this.myEchart.dispatchAction({
            type: 'downplay',
            name: option.series[0].data[index - 1].name
          })
        }
        this.myEchart.dispatchAction({
          type: 'highlight',
          name: option.series[0].data[index].name
        })
        index++
        if (index >= option.series[0].data.length) {
          index = 0
          setTimeout(() => {
            this.myEchart.dispatchAction({
              type: 'downplay',
              name: option.series[0].data[option.series[0].data.length - 1].name
            })
          }, 1400)
        }
      }, 1500)
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
