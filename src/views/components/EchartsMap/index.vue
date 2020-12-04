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
      img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2QjdBNjdDMkYwRjExRUJCQjgwRTg0MDdEMEE4NEUzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ2QjdBNjdEMkYwRjExRUJCQjgwRTg0MDdEMEE4NEUzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDZCN0E2N0EyRjBGMTFFQkJCODBFODQwN0QwQTg0RTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDZCN0E2N0IyRjBGMTFFQkJCODBFODQwN0QwQTg0RTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5UuZDfAAABl0lEQVR42qSV3XLCIBBG+Qgm6Yw1F2Z63b5Tx970OftUvXA6ttbfLQEjm7IRVMZROKAQ9riLp/ePz6+N6ls7q3xnHFIEtwE+lva9WD+/KtZ+NgcNLL934xD+JcPtUWttAO0oUb+bnQXgmArQYd9JQhNmFVvphwOGwVCGcL8Mo4RGIxBp2J2H9LypyG/gQNvUdTXpYYhJXZr5rCR2Sxdgd9JpXcQHG0CcjjN9MBKcnB6OKNzp6vd4fuK6PHUYJLt5Dw9s5RnuA6zglVrwa+lE0Wq52jMIBjFQSoB7C7UPICBE9SaIYfQhxfwmaNIiXQ/1fFZRiJtqGy/KXTBPqSvhBaVEe7KgVeptRCnRnnjl7pwqOri1qUvZLEU+1xBFfxYBspVuiN4mQgiWCXnhTqXCRPCU/F5Z9qQaV6r7bJvyvygY2sNqzBj0Spn4SPcr1acZeCe6K+5EUZI9GbBYvyx4BXHlTLFyFkOVhCZVzoSYSxD86zqlTDL8iBSDzshCPLzIMMoWvtxyVjh7KFJqtPCJSsWQMlf+CTAAQPsFPY9wcFMAAAAASUVORK5CYII='
      var that = this
      img.onload = function() {
        setTimeout(function() {
          that.myEchart.resize()
        }, 100)
      }

      const option = {
        tooltip: {
          show: true
        },
        geo: [{
          map: '湖南',
          zlevel: 2,
          zoom: 1.1,
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
          zoom: 1.1,
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
          zoom: 1.1,
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
            tooltip: {
              trigger: 'item',
              formatter: (par) => {
                return `
                  <div class="mapTip">
                    <div class="mt-title">${par.name}</div>
                    <div class="mt-item">
                      <div class="mt-it-name">基金收入（元）：</div>
                      <div class="mt-it-num">${par.data.num1}</div>
                    </div>
                    <div class="mt-item">
                      <div class="mt-it-name">基金支出（元）：</div>
                      <div class="mt-it-num">${par.data.num2}</div>
                    </div>
                  </div>
                `
              }
            },
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
            itemStyle: {
              color: '#91CCF5'
            },
            data: this.data
          }
        ]
      }

      this.myEchart.setOption(option)
      window.addEventListener('resize', () => {
        this.myEchart.resize()
      })

      // var index = 0
      // clearInterval(this.mTime)
      // this.mTime = setInterval(() => {
      //   this.myEchart.dispatchAction({
      //     type: 'geoSelect',
      //     seriesIndex: 0,
      //     name: option.series[0].data[index].name
      //   })
      //   this.myEchart.dispatchAction({
      //     type: 'showTip',
      //     seriesIndex: 0,
      //     dataIndex: index
      //   })
      //   index++
      //   if (index >= option.series[0].data.length) {
      //     index = 0
      //   }
      // }, 2500)
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

