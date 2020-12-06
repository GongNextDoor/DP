<template>
  <div id="yongzhouMap" class="EchartsMap" />
</template>

<script>
// eslint-disable-next-line no-unused-vars
import hunan from '../../../../node_modules/echarts/map/js/province/hunan.js'
export default {
  name: 'EchartsMap',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      myEchart: null,
      mTime: null
    }
  },
  mounted() {
    this.dramMap()
  },
  methods: {
    dramMap() {
      this.myEchart = this.$echarts.init(document.getElementById('yongzhouMap'))

      var img = new Image()
      img.src = require('@/assets/img/mapBg.png')
      img.onload = () => {
        setTimeout(() => {
          this.myEchart.resize()
        }, 100)
      }

      const option = {
        tooltip: {
          show: true
        },
        geo: [{
          map: '湖南',
          zlevel: 2,
          zoom: 1.2,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          roam: false,
          center: [111.60, 27.44],
          itemStyle: {
            normal: {
              borderColor: '#91CCF5',
              borderType: 'dashed',
              borderWidth: 1,
              color: {
                image: img
                // repeat: 'no-repeat'
              }
            },
            emphasis: {
              areaColor: '#FE9600',
              borderColor: '#FE9600'
            }
          },
          selectedMode: 'single'
        },
        {
          map: '湖南',
          zlevel: 1,
          zoom: 1.2,
          roam: false,
          center: [111.60, 27.44],
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#192B64',
              borderColor: '#FDFDFE',
              borderWidth: 6,
              shadowColor: '#07277D',
              shadowOffsetY: 0,
              shadowBlur: 60
            }
          }
        },
        {
          map: '湖南',
          zoom: 1.2,
          roam: false,
          center: [111.60, 27.58],
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#1248BA88',
              borderColor: '#5f7393',
              borderWidth: 2
            },
            emphasis: {
              areaColor: '#1248BA88'
            }
          }
        }],
        series: [
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            label: {
              show: true,
              textStyle: {
                fontSize: 14,
                color: '#fff'
              },
              position: 'right',
              formatter: function(par) {
                return [
                  `{a|${par.name}}`
                ].join('\n')
              },
              rich: {
                a: {
                  color: '#fff',
                  fontSize: 14,
                  height: 20
                }
              },
              backgroundColor: '#2949CF99',
              padding: 4,
              borderRadius: 4,
              borderColor: '#fff',
              borderWidth: 1
            },
            symbolSize: 4,
            itemStyle: {
              color: '#FAFE93'
            },
            data: this.data
          }
        ]
      }

      this.myEchart.setOption(option)
      window.addEventListener('resize', () => {
        this.myEchart.resize()
      })

      this.myEchart.on('click', params => {
        this.$emit('handleClick', params)
      })
    },
    reset() {
      this.myEchart.resize()
    }
  }
}
</script>

<style scoped lang="scss">
.EchartsMap{
  width: 100%;
  height: calc(100% - 15px);
}
</style>

<style lang="scss">
.mapTip {
  padding: 4px 20px;
  .mt-title {
    font-size: 18px;
    color: #B2502E;
    font-weight: bold;
    padding-bottom: 5px;
  }
  .mt-item {
    display: flex;
    color: #fff;
    margin-top: 5px;
    .mt-it-name {
      width: 120px;
      position: relative;
      &::before {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        background: #E3C316;
        border-radius: 50%;
        position: absolute;
        top: 7px;
        left: -12px;
      }
    }
    .mt-it-num {
      font-weight: bold;
      color: #fc4d00;
    }
  }
}
</style>

