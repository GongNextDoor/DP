<template>
  <div class="fund insured">
    <Header big-title="永州市医保市级统筹云平台" small-title="基金收支结余" />
    <div class="container">

      <div class="info">
        <div class="left">
          <div class="box">
            <div class="title">分险种情况</div>
            <div class="img">
              <img src="../../assets/img/cbyw-t1.png" alt="">
            </div>
            <div class="body">
              <div class="flex-box">
                <div class="item">
                  <div class="num">
                    <img src="../../assets/img/yyjg-icon1.png" alt="">
                    <div class="pepole">
                      <div>{{ czlj }}<small>万元</small></div>
                      <div class="tag">城镇职工基金累计结余</div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="num">
                    <img src="../../assets/img/yyjg-icon2.png" alt="">
                    <div class="pepole">
                      <div>{{ cxlj }}<small>万元</small></div>
                      <div class="tag">城乡居民基金累计结余</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="img">
              <img src="../../assets/img/cbyw-b1.png" alt="">
            </div>
          </div>
          <ul class="list">
            <li>
              <div class="box">
                <div class="title"><span class="color-yellow">城镇职工</span>医保基金上个月基金收支结余</div>
                <div class="img">
                  <img src="../../assets/img/cbyw-t1.png" alt="">
                </div>
                <div class="body">
                  <div class="layer">
                    <div class="item">
                      <img src="../../assets/img/jjsz-icon1.png" alt="">
                      <div class="total">
                        <span class="num">{{ listNum1 }}</span>
                        <span class="text">总收入(万元)</span>
                      </div>
                    </div>
                    <div class="item">
                      <img src="../../assets/img/jjsz-icon2.png" alt="">
                      <div class="total">
                        <span class="num">{{ listNum2 }}</span>
                        <span class="text">总支出(万元)</span>
                      </div>
                    </div>
                    <div class="item">
                      <img src="../../assets/img/jjsz-icon3.png" alt="">
                      <div class="total">
                        <span class="num" :class="listNum3 < 0 && 'color-red'">{{ listNum3 }}</span>
                        <span class="text">结余(万元)</span>
                      </div>
                    </div>
                  </div>
                  <div class="echart">
                    <EchartsNumBar :data="pieData1" />
                  </div>
                </div>
                <div class="img">
                  <img src="../../assets/img/cbyw-b1.png" alt="">
                </div>
              </div>
            </li>
            <li>
              <div class="box">
                <div class="title"><span class="color-yellow">城镇职工</span>医保基金前六个月基金收支结余</div>
                <div class="img">
                  <img src="../../assets/img/cbyw-t1.png" alt="">
                </div>
                <div class="body">
                  <div class="layer">
                    <div class="item">
                      <img src="../../assets/img/jjsz-icon1.png" alt="">
                      <div class="total">
                        <span class="num">{{ listNum7 }}</span>
                        <span class="text">总收入(万元)</span>
                      </div>
                    </div>
                    <div class="item">
                      <img src="../../assets/img/jjsz-icon2.png" alt="">
                      <div class="total">
                        <span class="num">{{ listNum8 }}</span>
                        <span class="text">总支出(万元)</span>
                      </div>
                    </div>
                    <div class="item">
                      <img src="../../assets/img/jjsz-icon3.png" alt="">
                      <div class="total">
                        <span class="num" :class="listNum9 < 0 && 'color-red'">{{ listNum9 }}</span>
                        <span class="text">结余(万元)</span>
                      </div>
                    </div>
                  </div>
                  <div class="echart">
                    <EchartsNumBar :data="pieData3" />
                  </div>
                </div>
                <div class="img">
                  <img src="../../assets/img/cbyw-b1.png" alt="">
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="rights">
          <div class="box">
            <div class="title">基金累计结余（万元）</div>
            <div class="img">
              <img src="../../assets/img/cbyw-t1.png" alt="">
            </div>
            <div class="body">
              <NumDigitroll :num="(cxlj+czlj).toFixed(2)" />
            </div>
            <div class="img">
              <img src="../../assets/img/cbyw-b1.png" alt="">
            </div>
          </div>
          <ul class="list">
            <li>
              <div class="box">
                <div class="title"><span class="color-blue">城乡居民</span>医保基金上个月基金收支结余</div>
                <div class="img">
                  <img src="../../assets/img/cbyw-t1.png" alt="">
                </div>
                <div class="body">
                  <div class="layer">
                    <div class="item">
                      <img src="../../assets/img/jjsz-icon1.png" alt="">
                      <div class="total">
                        <span class="num">{{ listNum4 }}</span>
                        <span class="text">总收入(万元)</span>
                      </div>
                    </div>
                    <div class="item">
                      <img src="../../assets/img/jjsz-icon2.png" alt="">
                      <div class="total">
                        <span class="num">{{ listNum5 }}</span>
                        <span class="text">总支出(万元)</span>
                      </div>
                    </div>
                    <div class="item">
                      <img src="../../assets/img/jjsz-icon3.png" alt="">
                      <div class="total">
                        <span class="num" :class="listNum6 < 0 && 'color-red'">{{ listNum6 }}</span>
                        <span class="text">结余(万元)</span>
                      </div>
                    </div>
                  </div>
                  <div class="echart">
                    <EchartsNumBar :data="pieData2" />
                  </div>
                </div>
                <div class="img">
                  <img src="../../assets/img/cbyw-b1.png" alt="">
                </div>
              </div>
            </li>
            <li>
              <div class="box">
                <div class="title"><span class="color-blue">城乡居民</span>医保基金前六个月基金收支结余</div>
                <div class="img">
                  <img src="../../assets/img/cbyw-t1.png" alt="">
                </div>
                <div class="body">
                  <div class="layer">
                    <div class="item">
                      <img src="../../assets/img/jjsz-icon1.png" alt="">
                      <div class="total">
                        <span class="num">{{ listNum10 }}</span>
                        <span class="text">总收入(万元)</span>
                      </div>
                    </div>
                    <div class="item">
                      <img src="../../assets/img/jjsz-icon2.png" alt="">
                      <div class="total">
                        <span class="num">{{ listNum11 }}</span>
                        <span class="text">总支出(万元)</span>
                      </div>
                    </div>
                    <div class="item">
                      <img src="../../assets/img/jjsz-icon3.png" alt="">
                      <div class="total">
                        <span class="num" :class="listNum12 < 0 && 'color-red'">{{ listNum12 }}</span>
                        <span class="text">结余(万元)</span>
                      </div>
                    </div>
                  </div>
                  <div class="echart">
                    <EchartsNumBar :data="pieData4" />
                  </div>
                </div>
                <div class="img">
                  <img src="../../assets/img/cbyw-b1.png" alt="">
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="maps">
        <div class="nav">
          <div class="cur">当前所在位置：<span>{{ center }}</span></div>
          <div class="all" @click="reset">查看全市</div>
        </div>
        <div class="map">
          <EchartsMap v-if="mapFlag" @handleClick="mapClick" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/views/components/Header'
import NumDigitroll from '@/views/components/NumDigitroll'
import EchartsMap from '@/views/components/EchartsMap'
import EchartsNumBar from '@/views/components/EchartsNumBar'
export default {
  name: '',
  components: {
    Header,
    NumDigitroll,
    EchartsMap,
    EchartsNumBar
  },
  mixins: [

  ],
  props: {

  },
  data() {
    return {
      cxlj: 0,
      czlj: 0,
      listNum1: '',
      listNum2: '',
      listNum3: '',
      listNum4: '',
      listNum5: '',
      listNum6: '',
      listNum7: '',
      listNum8: '',
      listNum9: '',
      listNum10: '',
      listNum11: '',
      listNum12: '',
      center: '全市',
      mapFlag: true,
      pieData1: [],
      pieData2: [],
      pieData3: [],
      pieData4: []
    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {
    this.init('')
  },
  methods: {
    init(centerId) {
      this.detail(centerId)
    },
    detail(centerId) {
      if (centerId === '431122') { // 东安县
        this.cxlj = 18870.6
        this.czlj = 4107.56
        this.listNum1 = '67.15'
        this.listNum2 = '961.93'
        this.listNum3 = '-894.78'
        this.listNum4 = '185.25'
        this.listNum5 = '7980.71'
        this.listNum6 = '-7795.46'
        this.listNum7 = '3332.91'
        this.listNum8 = '3964.99'
        this.listNum9 = '-632.08'
        this.listNum10 = '20101.07'
        this.listNum11 = '22769.79'
        this.listNum12 = '2668.72'
      }
      if (centerId === '431103') { // 冷水滩
        this.cxlj = 24094.19
        this.czlj = 7492.42
        this.listNum1 = '421.85'
        this.listNum2 = '307.95'
        this.listNum3 = '113.9'
        this.listNum4 = '2359.3'
        this.listNum5 = '1269.28'
        this.listNum6 = '1090.02'
        this.listNum7 = '4283.86'
        this.listNum8 = '3670.31'
        this.listNum9 = '613.55'
        this.listNum10 = '13993.04'
        this.listNum11 = '19003.03'
        this.listNum12 = '-5009.99'
      }
      if (centerId === '431121') { // 祁阳县
        this.cxlj = 42218.79
        this.czlj = 7221.03
        this.listNum1 = '-2404.87'
        this.listNum2 = '444.98'
        this.listNum3 = '-2849.85'
        this.listNum4 = '0.8'
        this.listNum5 = '288.54'
        this.listNum6 = '-287.74'
        this.listNum7 = '6214.17'
        this.listNum8 = '5842.73'
        this.listNum9 = '371.44'
        this.listNum10 = '41418.85'
        this.listNum11 = '39640.81'
        this.listNum12 = '1778.04'
      }
      if (centerId === '431102') { // 零陵区
        this.cxlj = 32987.03
        this.czlj = 7288.42
        this.listNum1 = '796.94'
        this.listNum2 = '63.95'
        this.listNum3 = '732.99'
        this.listNum4 = '2905.11'
        this.listNum5 = '11031.59'
        this.listNum6 = '-8126.48'
        this.listNum7 = '3086.14'
        this.listNum8 = '2910.64'
        this.listNum9 = '175.5'
        this.listNum10 = '28008.01'
        this.listNum11 = '32236.15'
        this.listNum12 = '4228.14'
      }
      if (centerId === '431123') { // 双牌县
        this.cxlj = 7353.95
        this.czlj = 525.63
        this.listNum1 = '16.17'
        this.listNum2 = '65.22'
        this.listNum3 = '-49.05'
        this.listNum4 = '2545'
        this.listNum5 = '83.21'
        this.listNum6 = '2461.79'
        this.listNum7 = '2060.52'
        this.listNum8 = '1756.71'
        this.listNum9 = '303.81'
        this.listNum10 = '3548'
        this.listNum11 = '4772.87'
        this.listNum12 = '-1224.87'
      }
      if (centerId === '431128') { // 新田县
        this.cxlj = 29691.45
        this.czlj = 3910.76
        this.listNum1 = '2180.61'
        this.listNum2 = '293.3'
        this.listNum3 = '1887.31'
        this.listNum4 = '1578.14'
        this.listNum5 = '1039.27'
        this.listNum6 = '538.87'
        this.listNum7 = '3874.98'
        this.listNum8 = '2266.09'
        this.listNum9 = '1608.89'
        this.listNum10 = '16844.76'
        this.listNum11 = '12180'
        this.listNum12 = '4664.76'
      }
      if (centerId === '431124') { // 道县
        this.cxlj = 35173.41
        this.czlj = 3435.96
        this.listNum1 = '20.55'
        this.listNum2 = '763.67'
        this.listNum3 = '-743.12'
        this.listNum4 = '2319.59'
        this.listNum5 = '1955.9'
        this.listNum6 = '363.69'
        this.listNum7 = '4104.88'
        this.listNum8 = '4111.01'
        this.listNum9 = '-6.13'
        this.listNum10 = '17883.73'
        this.listNum11 = '25154.45'
        this.listNum12 = '-7270.72'
      }
      if (centerId === '431126') { // 宁远县
        this.cxlj = 50340.06
        this.czlj = 12062.4
        this.listNum1 = '344.77'
        this.listNum2 = '270.96'
        this.listNum3 = '73.81'
        this.listNum4 = '5688.21'
        this.listNum5 = '5795.08'
        this.listNum6 = '-106.87'
        this.listNum7 = '3716.72'
        this.listNum8 = '1956.27'
        this.listNum9 = '1760.45'
        this.listNum10 = '35174.47'
        this.listNum11 = '27837.4'
        this.listNum12 = '7337.07'
      }
      if (centerId === '431127') { // 蓝山县
        this.cxlj = 14293.89
        this.czlj = 538.59
        this.listNum1 = '460.85'
        this.listNum2 = '2162.67'
        this.listNum3 = '-1701.82'
        this.listNum4 = '751.63'
        this.listNum5 = '1988.42'
        this.listNum6 = '-1236.79'
        this.listNum7 = '4010.25'
        this.listNum8 = '4202.53'
        this.listNum9 = '-192.28'
        this.listNum10 = '15581.63'
        this.listNum11 = '13647.74'
        this.listNum12 = '1933.89'
      }
      if (centerId === '431125') { // 江永县
        this.cxlj = 15567.39
        this.czlj = 1759.17
        this.listNum1 = '1205.36'
        this.listNum2 = '157.36'
        this.listNum3 = '1048'
        this.listNum4 = '1029.52'
        this.listNum5 = '574.55'
        this.listNum6 = '454.97'
        this.listNum7 = '1551.47'
        this.listNum8 = '2471.34'
        this.listNum9 = '-919.87'
        this.listNum10 = '6099.93'
        this.listNum11 = '9669.9'
        this.listNum12 = '-3569.97'
      }
      if (centerId === '431129') { // 江华县
        this.cxlj = 26943.19
        this.czlj = 5589.53
        this.listNum1 = '523.46'
        this.listNum2 = '1.09'
        this.listNum3 = '522.37'
        this.listNum4 = '38.11'
        this.listNum5 = '1652.94'
        this.listNum6 = '-1614.83'
        this.listNum7 = '2982.09'
        this.listNum8 = '3356.94'
        this.listNum9 = '-374.85'
        this.listNum10 = '17858.55'
        this.listNum11 = '15457.07'
        this.listNum12 = '2401.48'
      }
      if (centerId === '') { // 全市
        this.cxlj = 297608.21
        this.czlj = 115359.25
        this.listNum1 = '9041.49'
        this.listNum2 = '2291.64'
        this.listNum3 = '6749.85'
        this.listNum4 = '45994'
        this.listNum5 = '24144.68'
        this.listNum6 = '21849.32'
        this.listNum7 = '41727.05'
        this.listNum8 = '45735.82'
        this.listNum9 = '-4008.77'
        this.listNum10 = '216528.32'
        this.listNum11 = '222369.21'
        this.listNum12 = '-5840.89'
      }
      this.pieData1 = [{ name: '结余', value: this.listNum3 }, { name: '支出', value: this.listNum2 }, { name: '收入', value: this.listNum1 }]
      this.pieData2 = [{ name: '结余', value: this.listNum6 }, { name: '支出', value: this.listNum5 }, { name: '收入', value: this.listNum4 }]
      this.pieData3 = [{ name: '结余', value: this.listNum9 }, { name: '支出', value: this.listNum8 }, { name: '收入', value: this.listNum7 }]
      this.pieData4 = [{ name: '结余', value: this.listNum12 }, { name: '支出', value: this.listNum11 }, { name: '收入', value: this.listNum10 }]
    },
    mapClick(e) {
      this.center = e.name
      this.init(e.centerId)
    },
    reset() {
      this.init('')
      this.center = '全市'
      this.mapFlag = false
      this.$nextTick(() => {
        this.mapFlag = true
      })
    }
  }
}
</script>

<style scoped lang="scss">
.color-yellow {
  color: #FF7123;
}
.color-blue {
  color: #2FEFFF;
}
.color-red {
  color: #EF3739;
}
</style>
