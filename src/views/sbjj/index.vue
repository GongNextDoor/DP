<template>
  <div class="main sbjj">
    <Header big-title="湖南省社保基金大数据监督" />
    <div class="container">
      <div class="ct-left">
        <div class="top">
          <BoxItem custom-body title="收入/支出（近半年）">
            <div class="body-top">
              <NumItem title="收入" num="3384797.26" />
              <NumItem title="支出" num="333647.52" />
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
              <NumItem title="投资总额" num="333647.52" />
              <NumItem title="投资收益" num="333647.52" />
            </div>
          </BoxItem>
        </div>
        <div class="center">
          <BoxItem title="社保基金风险详情">
            <MyTable :data="tableData" />
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
          { value: 335, name: '机关养老保险' },
          { value: 310, name: '企业养老保险' },
          { value: 234, name: '居民养老保险' },
          { value: 135, name: '职业年金' },
          { value: 548, name: '失业保险' },
          { value: 148, name: '工伤保险' }
        ],
        [
          { value: 135, name: '机关养老保险' },
          { value: 210, name: '企业养老保险' },
          { value: 234, name: '居民养老保险' },
          { value: 135, name: '职业年金' },
          { value: 548, name: '失业保险' },
          { value: 148, name: '工伤保险' }
        ]
      ],
      numArr: [
        { title: '失业保险基金结余（万元）', num: 1233400 },
        { title: '机关养老保险基金结余（万元）', num: 2234567.67 },
        { title: '工伤保险基金结余（万元）', num: 2234567.67 },
        { title: '职工年金基金结余（万元）', num: 2234567.67 }
      ],
      numArrIndex: 0,
      barData: {
        xData: ['非1-4级伤残人员享受伤残津贴', '护理费不符合标准', '丧葬费不符合标准', '一次性工亡补助金不符合标准', '遗属待遇不符合规定标准', '重复领取待遇', '谎报工伤事故发生时间'],
        yData: [50, 21, 38, 24, 214, 179, 29]
      },
      tableData: [
        { a: '本级市', b: '重复享受待遇', c: '长沙市岳麓区王某某于2020年10月重复领取一次性待遇' },
        { a: '本级市', b: '重复享受待遇', c: '常德市鼎城区杨某某于2020年9月重复领取一次性待遇' },
        { a: '本级市', b: '死亡继续领取', c: '长沙市天心区离退休人员刘某某死亡后于2020年8月继续领取养老金' },
        { a: '本级市', b: '丧葬补助金不合规', c: '益阳市覃某某于2020年8月丧葬补助金不合规' },
        { a: '本级市', b: '工伤护理费不符合标准', c: '岳阳市李某某2020年8月工伤护理费不符合标准' },
        { a: '本级市', b: '定期待遇结果异常', c: '长沙市王某某2020年8月养老待遇金额远超正常情况' }
      ],
      mapData: [
        {
          name: '张家界市',
          value: [110.48451, 29.13731],
          num1: '431122',
          num2: '431122'
        },
        {
          name: '常德市',
          value: [111.659824, 29.453628],
          num1: '431103',
          num2: '431122'
        },
        {
          name: '岳阳市',
          value: [113.517951, 29.017928],
          num1: '431121',
          num2: '431122'
        },
        {
          name: '湘西土家族苗族自治州',
          value: [109.58093, 28.230609],
          num1: '431102',
          num2: '431122'
        },
        {
          name: '怀化市',
          value: [109.902883, 27.092109],
          num1: '431123',
          num2: '431122'
        },
        {
          name: '益阳市',
          value: [112.225262, 28.44569],
          num1: '431128',
          num2: '431122'
        },
        {
          name: '娄底市',
          value: [111.314596, 27.846386],
          num1: '431124',
          num2: '431122'
        },
        {
          name: '湘潭市',
          value: [112.791258, 27.556325],
          num1: '431125',
          num2: '431122'
        },
        {
          name: '株洲市',
          value: [113.701924, 26.919069],
          num1: '431126',
          num2: '431122'
        },
        {
          name: '邵阳市',
          value: [110.877939, 26.55564],
          num1: '431127',
          num2: '431122'
        },
        {
          name: '衡阳市',
          value: [112.726868, 26.539093],
          num1: '431129',
          num2: '431122'
        },
        {
          name: '永州市',
          value: [111.807003, 25.408268],
          num1: '431126',
          num2: '431122'
        },
        {
          name: '郴州市',
          value: [113.094814, 25.600281],
          num1: '431127',
          num2: '431122'
        },
        {
          name: '长沙市',
          value: [113.453561, 28.30391],
          num1: '431129',
          num2: '431122'
        }
      ],
      lineData1: {
        xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
        yData: [50, 21, 38, 24, 214, 179, 29, 56]
      },
      lineData2: {
        xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        yData: [50, 21, 38, 24, 214, 179, 29, 56, 214, 179, 29, 56]
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
    }, 10000)
    this.myTimeVal2 = setInterval(() => {
      this.numArrIndex++
      if (this.numArrIndex >= this.numArr.length) {
        this.numArrIndex = 0
      }
    }, 2000)
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
        margin-right: 55px;
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
