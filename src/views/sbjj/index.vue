<template>
  <div class="main sbjj">
    <Header big-title="湖南省社保基金大数据监督" />
    <div class="container">

      <div class="ct-left">
        <div class="top">
          <BoxItem custom-body title="收入/支出（近半年）">
            <div class="body body-top">1</div>
            <div class="body body-bottom">
              <div class="left">
                <div class="is-select">收入</div>
                <div>支出</div>
              </div>
              <div class="right">
                <EchartsPie :data="barData" />
              </div>
            </div>
          </BoxItem>
        </div>
        <div class="center">
          <BoxItem title="工伤基金问题">
            <EchartsBar :data="barData" />
          </BoxItem>
        </div>
        <div class="bottom">
          <BoxItem title="养老基金问题">
            <EchartsLegendLine :data="lineData1" />
          </BoxItem>
        </div>
      </div>
      <div class="ct-center">
        <div class="top">
          <NumDigitroll :num="2234567.67" />
          <div class="tag">失业保险基金结余</div>
        </div>
        <div class="bottom">
          <EchartsMap :data="mapData" />
        </div>
      </div>
      <div class="ct-right">
        <div class="top">
          <BoxItem title="职业年金">
            1
          </BoxItem>
        </div>
        <div class="center">
          <BoxItem title="社保基金风险详情">
            1
          </BoxItem>
        </div>
        <div class="bottom">
          <BoxItem title="社保基金风险统计">
            <EchartsLine :data="lineData2" />
          </BoxItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/views/components/Header'
import NumDigitroll from '@/views/components/NumDigitroll'
import EchartsMap from '@/views/components/EchartsMap'
import EchartsLine from './components/line'
import EchartsLegendLine from './components/legendLine'
import EchartsBar from './components/bar'
import EchartsPie from './components/pie'
export default {
  components: {
    Header,
    NumDigitroll,
    EchartsMap,
    EchartsLine,
    EchartsLegendLine,
    EchartsBar,
    EchartsPie
  },
  data() {
    return {
      barData: {
        xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
        yData: [50, 21, 38, 24, 214, 179, 29, 56]
      },
      mapData: [
        { name: '张家界市', value: [110.48451, 29.13731], num1: '431122', num2: '431122' },
        { name: '常德市', value: [111.659824, 29.453628], num1: '431103', num2: '431122' },
        { name: '岳阳市', value: [113.517951, 29.017928], num1: '431121', num2: '431122' },
        { name: '湘西土家族苗族自治州', value: [109.58093, 28.230609], num1: '431102', num2: '431122' },
        { name: '怀化市', value: [109.902883, 27.092109], num1: '431123', num2: '431122' },
        { name: '益阳市', value: [112.225262, 28.44569], num1: '431128', num2: '431122' },
        { name: '娄底市', value: [111.314596, 27.846386], num1: '431124', num2: '431122' },
        { name: '湘潭市', value: [112.791258, 27.556325], num1: '431125', num2: '431122' },
        { name: '株洲市', value: [113.701924, 26.919069], num1: '431126', num2: '431122' },
        { name: '邵阳市', value: [110.877939, 26.55564], num1: '431127', num2: '431122' },
        { name: '衡阳市', value: [112.726868, 26.539093], num1: '431129', num2: '431122' },
        { name: '永州市', value: [111.807003, 25.408268], num1: '431126', num2: '431122' },
        { name: '郴州市', value: [113.094814, 25.600281], num1: '431127', num2: '431122' },
        { name: '长沙市', value: [113.453561, 28.30391], num1: '431129', num2: '431122' }
      ],
      lineData1: {
        xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
        yData: [50, 21, 38, 24, 214, 179, 29, 56]
      },
      lineData2: {
        xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
        yData: [50, 21, 38, 24, 214, 179, 29, 56]
      }
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.sbjj {
  .ct-left {
    flex: 1;
    .top {
      height: 40%;
      .body-top {
        height: 60px;
      }
      .body-bottom {
        height: calc(100% - 175px);
        display: flex;
        .left {
          width: 100px;
          padding: 0 10px;
          box-sizing: border-box;
          color: #6d7a9b;
          div {
            flex: 1;
            text-align: center;
            &:first-child {
              margin-top: 90%;
            }
            &:last-child {
              margin-top: 10px;
              padding-top: 10px;
              border-top: 1px solid #6d7a9b;
            }
          }
          .is-select {
            color: #fff;
          }
        }
        .right {
          flex: 1;
        }
      }
    }
    .center {
      height: 30%;
    }
    .bottom {
      height: 30%;
    }
  }
  .ct-center {
    flex: 1;
    .top {
      margin-top: 30px;
      height: 50px;
      .tag {
        padding-top: 10px;
        float: right;
        margin-right: 75px;
        color: #ccc;
      }
    }
    .bottom {
      height: calc(100% - 50px);
    }
  }
  .ct-right {
    flex: 1;
    .top {
      height: 20%;
    }
    .center {
      height: 50%;
    }
    .bottom {
      height: 30%;
    }
  }
}
</style>
