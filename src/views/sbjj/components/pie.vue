<template>
  <div :id="id" class="echarts" />
</template>

<script>
export default {
  name: 'Pie',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      id: `pie${Number(
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
                formatter: '{b}\n{c}元'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]
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
