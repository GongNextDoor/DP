<template>
  <div :id="id" class="echarts" />
</template>

<script>
export default {
  name: 'EchartsBar',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      id: `echartsBar${Number(
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
        tooltip: {
          trigger: 'axis',
          formatter: (par) => {
            const item = par[0].data.item
            var h = `<div class="mybar">
          <div class="mybar-title">${item.HOSPITAL_NAME}</div>
          <div class="mybar-cont">
            <div class="mybar-amount">
              总费用：<span class="mybar-yellow">${item.TOTAL_FEE1}</span>元
            </div>
            <div class="mybar-p">同比：<span class="${this.getP(item.TB_FEE).class}">${this.getP(item.TB_FEE).num}</span></div>
            <div class="mybar-p">
              环比：<span class="${this.getP(item.HB_FEE).class}">${this.getP(item.HB_FEE).num}</span>
            </div>
          </div>
          <div class="mybar-cont">
            <div class="mybar-amount">
              人次：<span class="mybar-yellow">${item.RC1}</span>人
            </div>
            <div class="mybar-p">同比：<span class="${this.getP(item.TB_RC).class}">${this.getP(item.TB_RC).num}</span></div>
            <div class="mybar-p">
              环比：<span class="${this.getP(item.HB_RC).class}">${this.getP(item.HB_RC).num}</span>
            </div>
          </div>
          <div class="mybar-cont">
            <div class="mybar-amount">
              基金支出：<span class="mybar-yellow">${item.FUND_PAY1}</span>元
            </div>
            <div class="mybar-p">同比：<span class="${this.getP(item.TB_FUND).class}">${this.getP(item.TB_FUND).num}</span></div>
            <div class="mybar-p">
              环比：<span class="${this.getP(item.HB_FUND).class}">${this.getP(item.HB_FUND).num}</span>
            </div>
          </div>
          <div class="mybar-cont">
            <div class="mybar-amount">
              药品支出：<span class="mybar-yellow">${item.YP_PAY2}</span>元
            </div>
            <div class="mybar-p">同比：<span class="${this.getP(item.TB_YP).class}">${this.getP(item.TB_YP).num}</span></div>
            <div class="mybar-p">
              环比：<span class="${this.getP(item.HB_YP).class}">${this.getP(item.HB_YP).num}</span>
            </div>
          </div>
          <div class="mybar-cont">
            <div class="mybar-amount">
              耗材支出：<span class="mybar-yellow">${item.HC_PAY3}</span>元
            </div>
            <div class="mybar-p">同比：<span class="${this.getP(item.TB_HC).class}">${this.getP(item.TB_HC).num}</span></div>
            <div class="mybar-p">
              环比：<span class="${this.getP(item.HB_HC).class}">${this.getP(item.HB_HC).num}</span>
            </div>
          </div>
        </div>`
            return h
          }
        },
        grid: {
          left: '10px',
          right: '20px',
          bottom: '20px',
          top: '30px',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.data.xData,
            axisLine: { lineStyle: { color: '#355994' }},
            axisLabel: { show: false }
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: { show: false },
            axisLine: { lineStyle: { color: '#355994' }},
            boundaryGap: ['20%', '20%']
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: 20,
            // showBackground: true,
            backgroundStyle: {
              color: '#011543',
              borderWidth: 1,
              borderColor: '#355994',
              barBorderRadius: 20
            },
            label: {
              show: true,
              formatter: '{b}',
              fontStyle: 'oblique',
              position: 'top',
              color: '#fff'
            },
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#06B5D7' },
                  { offset: 1, color: '#35599400' }
                ]),
                barBorderRadius: 20
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
    },
    getP(val) {
      if (val[0] === '-') {
        return {
          num: val.substr(1),
          class: 'mybar-green'
        }
      }
      return {
        num: val,
        class: 'mybar-red'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.echarts {
  width: 100%;
  height: 100%;
  .title {
    color: #27bdc0;
  }
}
</style>

<style lang="scss">
.mybar {
  font-size: 14px;
  .mybar-yellow {
    color: #DA9E36
  }
  .mybar-red {
    color: #a72132
  }
  .mybar-green {
    color: #5CC049
  }
  .mybar-title {
    color: #2ED7DA;
    font-size: 18px;
    i{
      font-size: 20px;
      margin-right: 4px;
    }
  }
  .mybar-cont {
    margin-top: 7px;
    display: flex;
    .mybar-amount {
      width: 190px;
    }
    .mybar-p {
      margin-left: 10px;
      flex: 1;
    }
  }
}
</style>

