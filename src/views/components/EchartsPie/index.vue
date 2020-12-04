<template>
  <div :id="id" class="echarts" />
</template>

<script>
export default {
  name: 'EchartsPie',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      id: `echartsPie${Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36)}`
    }
  },
  watch: {
    data: {
      handler: function(val) {
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
      var echart = this.$echarts.init(document.getElementById(this.id))

      const option = {
        tooltip: {
          // show: false
        },
        color: ['#2B9DF2', '#65c5dc', '#ee5036', '#EE6851', '#FD8A25', '#FFD256', '#f2a664'],
        series: [
          {
            tooltip: {
              show: false
            },
            type: 'pie',
            zlevel: 1,
            radius: ['27.5%', '28%'],
            label: {
              show: false
            },
            data: [
              { value: 100, name: '1' }
            ]
          },
          {
            type: 'pie',
            radius: ['35%', '55%'],
            avoidLabelOverlap: false,
            label: {
              // show: false,
              formatter: '{b}',
              color: '#fff'
            },
            labelLine: {
              // show: false
            },
            itemStyle: {
              normal: {
                borderWidth: 10,
                borderColor: '#011b4d'
              }
            },
            data: this.data
          }
        ]
      }

      echart.setOption(option)
      window.addEventListener('resize', () => {
        echart.resize()
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

