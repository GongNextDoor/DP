<template>
  <div class="main sbjj">
    <Header big-title="人社大数据分析平台" />
    <div class="container">
      <div class="ct-left">
        <div class="top">
          <BoxItem custom-body title="基金收入/支出（近半年）">
            <div class="body-top">
              <NumItem title="收入" num="247.63" />
              <NumItem title="支出" num="301.25" />
            </div>
            <div class="body body-bottom">
              <div class="left">
                <div :class="pieFlag || 'is-select'">收入</div>
                <div :class="pieFlag && 'is-select'">支出</div>
              </div>
              <div class="right">
                <EchartsPie :data="pieData[pieFlag]" />
              </div>
            </div>
          </BoxItem>
        </div>
        <div class="center">
          <BoxItem title="工伤基金风险（人次）">
            <EchartsBar :data="barData" />
          </BoxItem>
        </div>
        <div class="bottom">
          <BoxItem title="养老基金风险（人次）">
            <EchartsLegendLine :data="lineData1" />
          </BoxItem>
        </div>
      </div>
      <div class="ct-center">
        <div class="top">
          <NumDigitroll :num="numArr[numArrIndex].num" />
          <div class="tag">{{ numArr[numArrIndex].title }}</div>
        </div>
        <div class="bottom">
          <EchartsMap :data="mapData" />
        </div>
      </div>
      <div class="ct-right">
        <div class="top">
          <BoxItem custom-body title="职业年金">
            <div class="body-top">
              <NumItem title="投资总额" num="380.24" />
              <NumItem title="投资收益" num="42.49" />
            </div>
          </BoxItem>
        </div>
        <div class="center">
          <BoxItem title="社保基金风险详情">
            <MyTable :data="tableData" />
          </BoxItem>
        </div>
        <div class="bottom">
          <BoxItem title="社保基金风险统计（人次）">
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
import NumItem from './components/numItem'
import MyTable from './components/myTable'
export default {
  components: {
    Header,
    NumDigitroll,
    EchartsMap,
    EchartsLine,
    EchartsLegendLine,
    EchartsBar,
    EchartsPie,
    NumItem,
    MyTable
  },
  data() {
    return {
      pieFlag: 0,
      myTimeVal: null,
      myTimeVal2: null,
      pieData: [
        [
          { value: 125.43, name: '机关养老保险' },
          { value: 91.64, name: '职业年金' },
          { value: 9.76, name: '失业保险' },
          { value: 20.8, name: '工伤保险' }
        ],
        [
          { value: 261.63, name: '机关养老保险' },
          { value: 3.83, name: '职业年金' },
          { value: 15.55, name: '失业保险' },
          { value: 20.24, name: '工伤保险' }
        ]
      ],
      numArr: [
        { title: '失业保险基金结余（万元）', num: 1100000 },
        { title: '机关养老保险基金结余（万元）', num: 215200 },
        { title: '工伤保险基金结余（万元）', num: 957000 },
        { title: '企业养老基金结余（万元）', num: 17290700 },
        { title: '居民养老基金结余（万元）', num: 3638200 }
      ],
      numArrIndex: 0,
      barData: {
        xData: ['非1-4级伤残人员享受伤残津贴', '护理费不符合标准', '丧葬费不符合标准', '一次性工亡补助金不符合标准', '遗属待遇不符合规定标准', '重复领取待遇', '谎报工伤事故发生时间'],
        yData: [12, 11, 2, 5, 32, 6, 1]
      },
      tableData: [
        { a: '长沙', b: '重复享受待遇', c: '长沙市王某某于2020年10月重复领取一次性工伤医疗补助金' },
        { a: '衡阳', b: '重复享受待遇', c: '衡阳市杨某某于2020年9月重复领取工伤医疗费' },
        { a: '邵阳', b: '死亡继续领取', c: '邵阳市退休人员刘某某死亡后2020年8月继续发放养老金' },
        { a: '益阳', b: '丧葬补助金不合规', c: '益阳市覃某某于2020年8月企业养老丧葬补助金不合规' },
        { a: '岳阳', b: '丧葬补助金不合规', c: '岳阳市李某某2020年8月居民养老丧葬费补助金不符合标准' },
        { a: '怀化', b: '定期待遇结果异常', c: '怀化市王某某2020年8月企业养老待遇金额远超正常情况' }
      ],
      mapData: [
        {
          name: '张家界市',
          value: [110.48451, 29.13731],
          num1: '611737253.90',
          num2: '611240047.27'
        },
        {
          name: '常德市',
          value: [111.659824, 29.453628],
          num1: '1842211541.75',
          num2: '2328103473.65'
        },
        {
          name: '岳阳市',
          value: [113.517951, 29.017928],
          num1: '1666409298.60',
          num2: '1880562773.82'
        },
        {
          name: '湘西土家族苗族自治州',
          value: [109.58093, 28.230609],
          num1: '1081758193.49',
          num2: '1025862274.68'
        },
        {
          name: '怀化市',
          value: [109.902883, 27.092109],
          num1: '1576648078.41',
          num2: '1955376374.48'
        },
        {
          name: '益阳市',
          value: [112.225262, 28.44569],
          num1: '1050451143.44',
          num2: '1778322528.59'
        },
        {
          name: '娄底市',
          value: [111.314596, 27.846386],
          num1: '1143454051.80',
          num2: '1390987513.83'
        },
        {
          name: '湘潭市',
          value: [112.791258, 27.556325],
          num1: '827942529.86',
          num2: '1298958161.09'
        },
        {
          name: '株洲市',
          value: [113.701924, 26.919069],
          num1: '1178065256.05',
          num2: '1586573293.49'
        },
        {
          name: '邵阳市',
          value: [110.877939, 26.55564],
          num1: '1775862222.56',
          num2: '2191159065.90'
        },
        {
          name: '衡阳市',
          value: [112.726868, 26.539093],
          num1: '1717377315.55',
          num2: '2416181337.48'
        },
        {
          name: '永州市',
          value: [111.807003, 25.408268],
          num1: '1684210211.15',
          num2: '1953125715.89'
        },
        {
          name: '郴州市',
          value: [113.094814, 25.600281],
          num1: '1591098149.81',
          num2: '1786359060.28'
        },
        {
          name: '长沙市',
          value: [113.453561, 28.30391],
          num1: '2453654309.50',
          num2: '3174778728.65'
        }
      ],
      lineData1: [
        {
          xData: ['重复享受待遇', '重复领取待遇', '丧葬补助金不合规', '定期待遇结果异常', '死亡继续领取'],
          yData: [2, 17, 0, 0, 69]
        },
        {
          xData: ['重复享受待遇', '重复领取待遇', '丧葬补助金不合规', '定期待遇结果异常', '死亡继续领取'],
          yData: [5, 2, 0, 10, 8]
        },
        {
          xData: ['重复享受待遇', '重复领取待遇', '丧葬补助金不合规', '定期待遇结果异常', '死亡继续领取'],
          yData: [5, 3, 0, 68, 0]
        }
      ],
      lineData2: {
        xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        yData: [218, 302, 350, 361, 237, 199, 220, 170, 205, 212, 0, 0]
      }
    }
  },
  destroyed() {
    clearInterval(this.myTimeVal)
    clearInterval(this.myTimeVal2)
  },
  mounted() {
    this.myTimeVal = setInterval(() => {
      this.pieFlag = this.pieFlag === 0 ? 1 : 0
      this.numArrIndex++
      if (this.numArrIndex >= this.numArr.length) {
        this.numArrIndex = 0
      }
    }, 7000)
    this.myTimeVal2 = setInterval(() => {
      this.numArrIndex++
      if (this.numArrIndex >= this.numArr.length) {
        this.numArrIndex = 0
      }
    }, 2300)
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.sbjj {
  .ct-left {
    flex: 1;
    padding-right: 50px;
    .top {
      height: 340px;
      .body-top {
        height: 90px;
        display: flex;
        .body-top-item {
          margin-top: 10px;
          flex: 1;
          background-image: url("../../assets/img/numberBg.png");
          background-size: 100% 100%;
        }
        .body-top-item + .body-top-item {
          margin-left: 10px;
        }
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
              margin-top: 70%;
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
      height: calc((100% - 340px)/2);
    }
    .bottom {
      height: calc((100% - 340px)/2);
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
        margin-right: 125px;
        color: #ccc;
      }
    }
    .bottom {
      height: calc(100% - 50px);
    }
  }
  .ct-right {
    flex: 1;
    padding-left: 50px;
    .top {
      height: 160px;
      .body-top {
        height: calc(100% - 70px);
        display: flex;
      }
    }
    .center {
      height: 420px;
    }
    .bottom {
      height: calc(100% - 580px);
    }
  }
}
</style>
