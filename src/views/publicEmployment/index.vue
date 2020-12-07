<template>
  <div class="main publicEmployment">
    <Header big-title="人社大数据分析平台" />
    <div class="container">
      <div class="ct-left">
        <div class="top">
          <div class="top-left item">
            <div class="iconBox">
              <img src="@/assets/img/dyxs-icon1.png" alt="">
            </div>
            <p>劳动力总数</p>
            <div class="num">
              <h3>
                <countTo :start-val="0" :end-val="num1" :duration="1500" />
              </h3>
              <span>人</span>
            </div>
            <div class="lt" />
            <div class="rt" />
            <div class="rb" />
            <div class="lb" />
          </div>
          <div class="top-right">
            <div class="item">
              <div class="tit">
                <span />
                <p>登记失业人员</p>
              </div>
              <div class="num">
                <h3>
                  <countTo :start-val="0" :end-val="num2" :duration="1500" />
                </h3>
                <span>人</span>
              </div>
              <div class="lt" />
              <div class="rt" />
              <div class="rb" />
              <div class="lb" />
            </div>
            <div class="item">
              <div class="tit">
                <span />
                <p>贫困劳动力人数</p>
              </div>
              <div class="num">
                <h3>
                  <countTo :start-val="0" :end-val="num3" :duration="1500" />
                </h3>
                <span>人</span>
              </div>
              <div class="lt" />
              <div class="rt" />
              <div class="rb" />
              <div class="lb" />
            </div>
            <div class="item">
              <div class="tit">
                <span />
                <p>就业困难人员</p>
              </div>
              <div class="num">
                <h3>
                  <countTo :start-val="0" :end-val="num4" :duration="1500" />
                </h3>
                <span>人</span>
              </div>
              <div class="lt" />
              <div class="rt" />
              <div class="rb" />
              <div class="lb" />
            </div>
            <div class="item">
              <div class="tit">
                <span />
                <p>退补渔民</p>
              </div>
              <div class="num">
                <h3>
                  <countTo :start-val="0" :end-val="num5" :duration="1500" />
                </h3>
                <span>人</span>
              </div>
              <div class="lt" />
              <div class="rt" />
              <div class="rb" />
              <div class="lb" />
            </div>
          </div>
        </div>
        <div class="center">
          <BoxItem title="就业人员分析">
            <div slot="title-btns" class="box-tools">
              <span v-for="(item,index) in options1" :key="index" :class="{'active':index===isactive1}" @click="select1(index)">
                {{ item }}
              </span>
            </div>
            <EchartsPie :data="pieData" />
          </BoxItem>
        </div>
        <div class="bottom">
          <BoxItem title="失业人员分析">
            <div slot="title-btns" class="box-tools">
              <span v-for="(item,index) in options2" :key="index" :class="{'active':index===isactive2}" @click="select2(index)">
                {{ item }}
              </span>
            </div>
            <EchartsPie1 :data="pieData1" :name="name1" />
          </BoxItem>
        </div>
      </div>
      <div class="ct-right">
        <div class="ct-right-top">
          <div class="band1">
            <div class="nav">
              <div class="cur">当前所在位置：<span>{{ center }}</span></div>
              <div class="all" @click="reset">查看全省</div>
            </div>
            <div class="map-content">
              <EchartsMap v-if="mapFlag" :data="mapData" @handleClick="mapClick" />
            </div>

          </div>
          <div class="band2">
            <div class="top">
              <BoxItem title="基本公共就业服务">
                <div class="info">
                  <div class="peopole">
                    登记就业人数：<span>
                      <countTo :start-val="0" :end-val="num8" :duration="1500" /></span>人
                  </div>
                  <div class="peopole">
                    登记失业人数：<span>
                      <countTo :start-val="0" :end-val="num9" :duration="1500" /></span>人
                  </div>
                </div>
                <EchartsLine :data="lineData" />
              </BoxItem>
            </div>
            <div class="bottom">
              <BoxItem title="311服务情况">
                <EchartsBar1 :data="barData1" />
              </BoxItem>
            </div>
          </div>
        </div>
        <div class="ct-right-bottom">
          <div class="top">
            <BoxItem title="享受政策服务情况">
              <div class="info">
                <div class="peopole">
                  累计补贴人次数：<span>
                    <countTo :start-val="0" :end-val="num6" :duration="1500" /></span>人
                </div>
                <div class="currcy">
                  累计补贴金额：<span>
                    <countTo :start-val="0" :end-val="num7" :duration="1500" /></span>万元
                </div>
              </div>
              <EchartsBar :data="barData" />
            </BoxItem>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Header from '@/views/components/Header'
import EchartsMap from '@/views/components/EchartsClickMap'
import EchartsLine from './components/line'
import EchartsBar from './components/bar'
import EchartsPie from './components/pie'
import EchartsPie1 from './components/pie1'
import EchartsBar1 from './components/bar1'
import countTo from 'vue-count-to'
export default {
  components: {
    Header,
    EchartsMap,
    EchartsLine,
    EchartsBar,
    EchartsPie,
    EchartsPie1,
    EchartsBar1,
    countTo
  },
  data() {
    return {
      isactive1: 0,
      options1: ['就业形势分析', '就业周期', '年龄结构分析', '文化程度分析'],
      name1: '失业周期',
      isactive2: 0,
      options2: ['失业周期', '年龄结构分析', '文化程度分析'],
      mapFlag: true,
      center: '全省',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
      num6: 0,
      num7: 0,
      num8: 0,
      num9: 0,
      barData: {
        xData: [
          '社保补贴',
          '公益性岗位补贴',
          '鉴定补贴',
          '见习补贴',
          '职业培训补贴',
          '创业培训',
          '求职创业补贴',
          '其他补贴'
        ],
        yData1: [],
        yData2: []
      },
      barData1: {
        xData: ['推荐岗位', '推荐职业培训', '推荐职业指导'],
        yData: []
      },
      mapData: [
        {
          name: '张家界市',
          centerId: '430800',
          value: [110.48451, 29.13731],
          num1: '431122',
          num2: '431122'
        },
        {
          name: '常德市',
          centerId: '430700',
          value: [111.659824, 29.453628],
          num1: '431103',
          num2: '431122'
        },
        {
          name: '岳阳市',
          centerId: '430600',
          value: [113.517951, 29.017928],
          num1: '431121',
          num2: '431122'
        },
        {
          name: '湘西土家族苗族自治州',
          centerId: '433100',
          value: [109.58093, 28.230609],
          num1: '431102',
          num2: '431122'
        },
        {
          name: '怀化市',
          centerId: '431200',
          value: [109.902883, 27.092109],
          num1: '431123',
          num2: '431122'
        },
        {
          name: '益阳市',
          centerId: '430900',
          value: [112.225262, 28.44569],
          num1: '431128',
          num2: '431122'
        },
        {
          name: '娄底市',
          centerId: '431300',
          value: [111.314596, 27.846386],
          num1: '431124',
          num2: '431122'
        },
        {
          name: '湘潭市',
          centerId: '430300',
          value: [112.791258, 27.556325],
          num1: '431125',
          num2: '431122'
        },
        {
          name: '株洲市',
          centerId: '430200',
          value: [113.701924, 26.919069],
          num1: '431126',
          num2: '431122'
        },
        {
          name: '邵阳市',
          centerId: '430500',
          value: [110.877939, 26.55564],
          num1: '431127',
          num2: '431122'
        },
        {
          name: '衡阳市',
          centerId: '430400',
          value: [112.726868, 26.539093],
          num1: '431129',
          num2: '431122'
        },
        {
          name: '永州市',
          centerId: '431100',
          value: [111.807003, 25.408268],
          num1: '431126',
          num2: '431122'
        },
        {
          name: '郴州市',
          centerId: '431000',
          value: [113.094814, 25.600281],
          num1: '431127',
          num2: '431122'
        },
        {
          name: '长沙市',
          centerId: '430100',
          value: [113.453561, 28.30391],
          num1: '431129',
          num2: '431122'
        }
      ],
      lineData: {
        xData: ['一季度', '二季度', '三季度', '四季度'],
        yData: []
      },
      pieData: [],
      pieData1: []
    }
  },
  mounted() {
    this.init('')
  },
  methods: {
    select1(index) {
      this.isactive1 = index
      if (index === 0) {
        this.pieData = [
          { name: '单位就业', value: '336484' },
          { name: '灵活就业', value: '2941871' },
          { name: '自主创业', value: '132409' }
        ]
      } else if (index === 1) {
        this.pieData = [
          { name: '6个月以下', value: '922586' },
          { name: '一年以下', value: '128674' },
          { name: '一年至两年', value: '311803' },
          { name: '两年至三年', value: '346178' },
          { name: '三年以上', value: '2395045' }
        ]
      } else if (index === 2) {
        this.pieData = [
          { name: '16-30岁', value: '421304' },
          { name: '31-40岁', value: '809635' },
          { name: '41-50岁', value: '1099067' },
          { name: '51-60岁', value: '1080758' }
        ]
      } else if (index === 3) {
        this.pieData = [
          { name: '小学', value: '91319' },
          { name: '初中', value: '588499' },
          { name: '高中', value: '670453' },
          { name: '大专及以上', value: '223270' },
          { name: '其他', value: '1837223' }
        ]
      }
    },
    select2(index) {
      this.isactive2 = index
      if (index === 0) {
        this.name1 = '失业周期'
        this.pieData1 = [
          { name: '6个月以下', value: '922586' },
          { name: '一年以下', value: '128674' },
          { name: '一年至两年', value: '311803' },
          { name: '两年至三年', value: '346178' },
          { name: '三年以上', value: '2395045' }
        ]
      } else if (index === 1) {
        this.name1 = '年龄结构\n\n分析'
        this.pieData1 = [
          { name: '16-30岁', value: '82019' },
          { name: '31-40岁', value: '111551' },
          { name: '41-50岁', value: '71071' },
          { name: '51-60岁', value: '8634' }
        ]
      } else if (index === 2) {
        this.name1 = '文化程度\n\n分析'
        this.pieData1 = [
          { name: '小学', value: '85492' },
          { name: '初中', value: '111698' },
          { name: '高中', value: '50280' },
          { name: '大专及以上', value: '58316' },
          { name: '其他', value: '341076' }
        ]
      }
    },
    init(name) {
      this.detail(name)
    },
    detail(name) {
      if (name === '长沙市') {
        this.num1 = 278916
        this.num2 = 50245
        this.num3 = 75545
        this.num4 = 201050
        this.num5 = 270
        this.pieData = [
          { name: '单位就业', value: '49613' },
          { name: '灵活就业', value: '745306' },
          { name: '自主创业', value: '10266' }
        ]
        this.pieData1 = [
          { name: '6个月以下', value: '15617' },
          { name: '一年以下', value: '15572' },
          { name: '一年至两年', value: '6169' },
          { name: '两年至三年', value: '11880' },
          { name: '三年以上', value: '12980' }
        ]
        this.lineData.yData = ['2.6', '2.87', '3.24', '2.83']
        this.barData1.yData = ['25014', '156344', '58322']
        this.barData.yData1 = ['0', '0', '0', '0', '0', '0', '3281', '0']
        this.barData.yData2 = ['0', '0', '0', '0', '0', '0', '492.15', '0']
        this.num6 = 3281
        this.num7 = 492.15
        this.num8 = 3281
        this.num9 = 492.15
      } else if (name === '株洲市') {
        this.num1 = 203595
        this.num2 = 16620
        this.num3 = 66558
        this.num4 = 44912
        this.num5 = 1218
        this.pieData = [
          { name: '单位就业', value: '4602' },
          { name: '灵活就业', value: '93836' },
          { name: '自主创业', value: '4426' }
        ]
        this.pieData1 = [
          { name: '6个月以下', value: '47960' },
          { name: '一年以下', value: '7205' },
          { name: '一年至两年', value: '13797' },
          { name: '两年至三年', value: '10723' },
          { name: '三年以上', value: '54009' }
        ]
        this.lineData.yData = ['2.2', '2.39', '2.5', '2.83']
        this.barData1.yData = ['34631', '122537', '35674']
        this.barData.yData1 = [
          '7691',
          '5408',
          '7358',
          '1225',
          '35434',
          '15337',
          '8859',
          '11861'
        ]
        this.barData.yData2 = [
          '3630',
          '3348',
          '158',
          '484',
          '1306',
          '1607',
          '1328.85',
          '1302.79'
        ]
        this.num6 = 16155
        this.num7 = 1554.77
        this.num8 = 102878
        this.num9 = 16620
      } else if (name === '湘潭市') {
        this.num1 = 101643
        this.num2 = 36881
        this.num3 = 17044
        this.num4 = 34791
        this.num5 = 374
        this.pieData = [
          { name: '单位就业', value: '7887' },
          { name: '灵活就业', value: '93308' },
          { name: '自主创业', value: '1571' }
        ]
        this.pieData1 = [
          { name: '6个月以下', value: '45397' },
          { name: '一年以下', value: '5477' },
          { name: '一年至两年', value: '13412' },
          { name: '两年至三年', value: '25595' },
          { name: '三年以上', value: '47066' }
        ]
        this.lineData.yData = ['3.23', '3.56', '3.82', '2.83']
        this.barData1.yData = ['16629', '86309', '26260']
        this.barData.yData1 = [
          '2603',
          '328',
          '9521',
          '1736',
          '27648',
          '7806',
          '4217',
          '3871'
        ]
        this.barData.yData2 = [
          '1200',
          '215.92',
          '200',
          '758',
          '315',
          '805',
          '632.55',
          '9133'
        ]
        this.num6 = 16155
        this.num7 = 1554.77
        this.num8 = 102771
        this.num9 = 17044
      } else if (name === '衡阳市') {
        this.num1 = 229248
        this.num2 = 126640
        this.num3 = 34449
        this.num4 = 26008
        this.num5 = 1209
        this.pieData = [
          { name: '单位就业', value: '5370' },
          { name: '灵活就业', value: '72069' },
          { name: '自主创业', value: '5467' }
        ]
        this.pieData1 = [
          { name: '6个月以下', value: '2332' },
          { name: '一年以下', value: '2441' },
          { name: '一年至两年', value: '1321' },
          { name: '两年至三年', value: '5523' },
          { name: '三年以上', value: '2033' }
        ]
        this.lineData.yData = ['2.58', '2.68', '2.88', '0']
        this.barData1.yData = ['16492', '50370', '20261']
        this.barData.yData1 = [
          '899',
          '0',
          '724',
          '0',
          '2421',
          '6698',
          '3019',
          '2394'
        ]
        this.barData.yData2 = [
          '350.92',
          '0',
          '7.33',
          '0',
          '0',
          '734.79',
          '403.22',
          '58.50'
        ]
        this.num6 = 16155
        this.num7 = 1554.77
      } else if (name === '邵阳市') {
        this.num1 = 580877
        this.num2 = 11900
        this.num3 = 421794
        this.num4 = 27666
        this.num5 = 121
        this.pieData = [
          { name: '单位就业', value: '5370' },
          { name: '灵活就业', value: '72069' },
          { name: '自主创业', value: '5467' }
        ]
        this.pieData1 = [
          { name: '6个月以下', value: '2332' },
          { name: '一年以下', value: '2441' },
          { name: '一年至两年', value: '1321' },
          { name: '两年至三年', value: '5523' },
          { name: '三年以上', value: '2033' }
        ]
        this.lineData.yData = ['2.58', '2.68', '2.88', '0']
        this.barData1.yData = ['16492', '50370', '20261']
        this.barData.yData1 = [
          '899',
          '0',
          '724',
          '0',
          '2421',
          '6698',
          '3019',
          '2394'
        ]
        this.barData.yData2 = [
          '350.92',
          '0',
          '7.33',
          '0',
          '0',
          '734.79',
          '403.22',
          '58.50'
        ]
        this.num6 = 16155
        this.num7 = 1554.77
        this.num8 = 3281
        this.num9 = 492.15
      } else if (name === '岳阳市') {
        this.num1 = 311886
        this.num2 = 126193
        this.num3 = 25624
        this.num4 = 18204
        this.num5 = 5727
        this.pieData = [
          { name: '单位就业', value: '5370' },
          { name: '灵活就业', value: '72069' },
          { name: '自主创业', value: '5467' }
        ]
        this.pieData1 = [
          { name: '6个月以下', value: '2332' },
          { name: '一年以下', value: '2441' },
          { name: '一年至两年', value: '1321' },
          { name: '两年至三年', value: '5523' },
          { name: '三年以上', value: '2033' }
        ]
        this.lineData.yData = ['2.58', '2.68', '2.88', '0']
        this.barData1.yData = ['16492', '50370', '20261']
        this.barData.yData1 = [
          '899',
          '0',
          '724',
          '0',
          '2421',
          '6698',
          '3019',
          '2394'
        ]
        this.barData.yData2 = [
          '350.92',
          '0',
          '7.33',
          '0',
          '0',
          '734.79',
          '403.22',
          '58.50'
        ]
        this.num6 = 16155
        this.num7 = 1554.77
        this.num8 = 3281
        this.num9 = 492.15
      } else if (name === '常德市') {
        this.num1 = 262607
        this.num2 = 146471
        this.num3 = 31072
        this.num4 = 62560
        this.num5 = 4114
        this.pieData = [
          { name: '单位就业', value: '5370' },
          { name: '灵活就业', value: '72069' },
          { name: '自主创业', value: '5467' }
        ]
        this.pieData1 = [
          { name: '6个月以下', value: '2332' },
          { name: '一年以下', value: '2441' },
          { name: '一年至两年', value: '1321' },
          { name: '两年至三年', value: '5523' },
          { name: '三年以上', value: '2033' }
        ]
        this.lineData.yData = ['2.58', '2.68', '2.88', '0']
        this.barData1.yData = ['16492', '50370', '20261']
        this.barData.yData1 = [
          '899',
          '0',
          '724',
          '0',
          '2421',
          '6698',
          '3019',
          '2394'
        ]
        this.barData.yData2 = [
          '350.92',
          '0',
          '7.33',
          '0',
          '0',
          '734.79',
          '403.22',
          '58.50'
        ]
        this.num6 = 16155
        this.num7 = 1554.77
        this.num8 = 3281
        this.num9 = 492.15
      } else if (name === '张家界市') {
        this.num1 = 191918
        this.num2 = 115078
        this.num3 = 5472
        this.num4 = 10070
        this.num5 = 0
        this.pieData = [
          { name: '单位就业', value: '5370' },
          { name: '灵活就业', value: '72069' },
          { name: '自主创业', value: '5467' }
        ]
        this.pieData1 = [
          { name: '6个月以下', value: '2332' },
          { name: '一年以下', value: '2441' },
          { name: '一年至两年', value: '1321' },
          { name: '两年至三年', value: '5523' },
          { name: '三年以上', value: '2033' }
        ]
        this.lineData.yData = ['2.58', '2.68', '2.88', '0']
        this.barData1.yData = ['16492', '50370', '20261']
        this.barData.yData1 = [
          '899',
          '0',
          '724',
          '0',
          '2421',
          '6698',
          '3019',
          '2394'
        ]
        this.barData.yData2 = [
          '350.92',
          '0',
          '7.33',
          '0',
          '0',
          '734.79',
          '403.22',
          '58.50'
        ]
        this.num6 = 16155
        this.num7 = 1554.77
        this.num8 = 3281
        this.num9 = 492.15
      } else if (name === '益阳市') {
        this.num1 = 279881
        this.num2 = 134392
        this.num3 = 7305
        this.num4 = 44504
        this.num5 = 7912
        this.pieData = [
          { name: '单位就业', value: '5370' },
          { name: '灵活就业', value: '72069' },
          { name: '自主创业', value: '5467' }
        ]
        this.pieData1 = [
          { name: '6个月以下', value: '2332' },
          { name: '一年以下', value: '2441' },
          { name: '一年至两年', value: '1321' },
          { name: '两年至三年', value: '5523' },
          { name: '三年以上', value: '2033' }
        ]
        this.lineData.yData = ['2.58', '2.68', '2.88', '0']
        this.barData1.yData = ['16492', '50370', '20261']
        this.barData.yData1 = [
          '899',
          '0',
          '724',
          '0',
          '2421',
          '6698',
          '3019',
          '2394'
        ]
        this.barData.yData2 = [
          '350.92',
          '0',
          '7.33',
          '0',
          '0',
          '734.79',
          '403.22',
          '58.50'
        ]
        this.num6 = '16155'
        this.num7 = '1554.77'
      } else if (name === '郴州市') {
        this.num1 = 547505
        this.num2 = 160024
        this.num3 = 27414
        this.num4 = 50252
        this.num5 = 1655
        this.pieData = [
          { name: '单位就业', value: '5370' },
          { name: '灵活就业', value: '72069' },
          { name: '自主创业', value: '5467' }
        ]
        this.pieData1 = [
          { name: '6个月以下', value: '2332' },
          { name: '一年以下', value: '2441' },
          { name: '一年至两年', value: '1321' },
          { name: '两年至三年', value: '5523' },
          { name: '三年以上', value: '2033' }
        ]
        this.lineData.yData = ['2.58', '2.68', '2.88', '0']
        this.barData1.yData = ['16492', '50370', '20261']
        this.barData.yData1 = [
          '899',
          '0',
          '724',
          '0',
          '2421',
          '6698',
          '3019',
          '2394'
        ]
        this.barData.yData2 = [
          '350.92',
          '0',
          '7.33',
          '0',
          '0',
          '734.79',
          '403.22',
          '58.50'
        ]
        this.num6 = '16155'
        this.num7 = '1554.77'
      } else if (name === '永州市') {
        this.num1 = 733242
        this.num2 = 13235
        this.num3 = 295299
        this.num4 = 91993
        this.num5 = 1216
        this.pieData = [
          { name: '单位就业', value: '5370' },
          { name: '灵活就业', value: '72069' },
          { name: '自主创业', value: '5467' }
        ]
        this.pieData1 = [
          { name: '6个月以下', value: '2332' },
          { name: '一年以下', value: '2441' },
          { name: '一年至两年', value: '1321' },
          { name: '两年至三年', value: '5523' },
          { name: '三年以上', value: '2033' }
        ]
        this.lineData.yData = ['2.58', '2.68', '2.88', '0']
        this.barData1.yData = ['16492', '50370', '20261']
        this.barData.yData1 = [
          '899',
          '4070',
          '11312',
          '683',
          '47450',
          '12699',
          '3019',
          '41511'
        ]
        this.barData.yData2 = [
          '1590',
          '2460',
          '154',
          '152',
          '4890',
          '1221',
          '418',
          '2956'
        ]
        this.num6 = 16155
        this.num7 = 1554.77
      } else if (name === '怀化市') {
        this.num1 = 5253948
        this.num2 = 14725
        this.num3 = 374464
        this.num4 = 35292
        this.num5 = 2301
        this.pieData = [
          { name: '单位就业', value: '5370' },
          { name: '灵活就业', value: '72069' },
          { name: '自主创业', value: '5467' }
        ]
        this.pieData1 = [
          { name: '6个月以下', value: '2332' },
          { name: '一年以下', value: '2441' },
          { name: '一年至两年', value: '1321' },
          { name: '两年至三年', value: '5523' },
          { name: '三年以上', value: '2033' }
        ]
        this.lineData.yData = ['2.58', '2.68', '2.88', '2.83']
        this.barData1.yData = ['16492', '50370', '20261']
        this.barData.yData1 = [
          '899',
          '4070',
          '11312',
          '683',
          '47450',
          '12699',
          '3019',
          '41511'
        ]
        this.barData.yData2 = [
          '1590',
          '2460',
          '154',
          '152',
          '4890',
          '1221',
          '418',
          '2956'
        ]
        this.num6 = 16155
        this.num7 = 1554.77
        this.num8 = 82916
        this.num9 = 14725
      } else if (name === '娄底市') {
        this.num1 = 440536
        this.num2 = 13063
        this.num3 = 180193
        this.num4 = 46236
        this.num5 = 577
        this.pieData = [
          { name: '单位就业', value: '5370' },
          { name: '灵活就业', value: '72069' },
          { name: '自主创业', value: '5467' }
        ]
        this.pieData1 = [
          { name: '6个月以下', value: '2332' },
          { name: '一年以下', value: '2441' },
          { name: '一年至两年', value: '1321' },
          { name: '两年至三年', value: '5523' },
          { name: '三年以上', value: '2033' }
        ]
        this.lineData.yData = ['2.58', '2.68', '2.88', '0']
        this.barData1.yData = ['16492', '50370', '20261']
        this.barData.yData1 = [
          '899',
          '0',
          '724',
          '0',
          '2421',
          '6698',
          '3019',
          '2394'
        ]
        this.barData.yData2 = [
          '350.92',
          '0',
          '7.33',
          '0',
          '0',
          '734.79',
          '403.22',
          '58.50'
        ]
        this.num6 = 16155
        this.num7 = 1554.77
      } else if (name === '湘西土家族苗族自治州') {
        this.num1 = 799909
        this.num2 = 21005
        this.num3 = 312043
        this.num4 = 36287
        this.num5 = 335
        this.pieData = [
          { name: '单位就业', value: '5370' },
          { name: '灵活就业', value: '72069' },
          { name: '自主创业', value: '5467' }
        ]
        this.pieData1 = [
          { name: '6个月以下', value: '2332' },
          { name: '一年以下', value: '2441' },
          { name: '一年至两年', value: '1321' },
          { name: '两年至三年', value: '5523' },
          { name: '三年以上', value: '2033' }
        ]
        this.lineData.yData = ['2.58', '2.68', '2.88', '0']
        this.barData1.yData = ['16492', '50370', '20261']
        this.barData.yData1 = [
          '899',
          '0',
          '724',
          '0',
          '2421',
          '6698',
          '3019',
          '2394'
        ]
        this.barData.yData2 = [
          '350.92',
          '0',
          '7.33',
          '0',
          '0',
          '734.79',
          '403.22',
          '58.50'
        ]
        this.num6 = 16155
        this.num7 = 1554.77
      } else {
        this.num1 = 27694074
        this.num2 = 314474
        this.num3 = 2546275
        this.num4 = 729829
        this.num5 = 27029
        this.pieData = [
          { name: '单位就业', value: '336484' },
          { name: '灵活就业', value: '2941871' },
          { name: '自主创业', value: '132409' }
        ]
        this.pieData1 = [
          { name: '6个月以下', value: '922586' },
          { name: '一年以下', value: '128674' },
          { name: '一年至两年', value: '311803' },
          { name: '两年至三年', value: '346178' },
          { name: '三年以上', value: '2395045' }
        ]
        this.lineData.yData = ['2.72', '2.98', '3.17', '2.83']
        this.barData1.yData = ['255333', '935692', '335823']
        this.barData.yData1 = [
          '61549',
          '32682',
          '66603',
          '16736',
          '547908',
          '129135',
          '47673',
          '234052'
        ]
        this.barData.yData2 = [
          '25440.44',
          '24296.47',
          '1237.53',
          '6297.88',
          '12634',
          '12529.13',
          '7101.32',
          '18459.57'
        ]
        this.num6 = 1136338
        this.num7 = 97903.86
        this.num8 = 3410925
        this.num9 = 314474
      }
    },
    mapClick(e) {
      this.center = e.name
      this.init(e.name)
    },
    reset() {
      this.init('')
      this.center = '全省'
      this.mapFlag = false
      this.$nextTick(() => {
        this.mapFlag = true
      })
    }
  }
}
</script>

<style scoped lang="scss">
.publicEmployment {
  .active {
    color: #fff;
  }
  .box-tools {
    span {
      &::after {
        content: '|';
        color: #6697e3;
      }
      &:last-child {
        &::after {
          content: '';
        }
      }
    }
  }
  .ct-left {
    flex: 1;
    padding-right: 50px;
    .top {
      height: 20%;
      display: flex;
      .item {
        position: relative;
        border-top: 1px solid #354165;
        border-bottom: 1px solid #354165;
        background: #021645;
        color: #5985cb;
        .iconBox {
          text-align: center;
          img {
            width: 60px;
          }
        }
        .tit {
          display: flex;
          align-items: center;
          margin: 10px 5px 10px 20px;
          span {
            display: inline-block;
            width: 10px;
            height: 10px;
            border: 1px solid #febb41;
            margin-right: 5px;
          }
          p {
            flex: 1;
            margin: 0;
          }
        }
        .num {
          display: flex;
          h3 {
            color: #c2dcf9;
            font-size: 20px;
            margin: 0;
          }
          span {
            display: flex;
            align-items: flex-end;
          }
        }
      }
      .top-left {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex: 1;
        margin-right: 24px;
        padding: 20px 0 20px 0;
        p {
          margin: 0;
          text-align: center;
        }
        .num {
          display: flex;
          justify-content: center;
        }
      }
      .top-right {
        flex: 2;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item {
          height: calc(50% - 12px);
          width: 47%;
          &:nth-child(1),
          &:nth-child(2) {
            margin-bottom: 20px;
          }
          .num {
            margin-left: 36px;
          }
        }
      }
    }
    .center {
      height: 40%;
    }
    .bottom {
      height: 40%;
    }
  }

  .ct-right {
    flex: 2;
    height: 100%;
    .ct-right-top {
      display: flex;
      height: 60%;
      .band1 {
        width: 55%;
        height: 100%;
        .nav {
          position: relative;
          text-align: right;
          padding: 10px 50px 0 0;
          & > div {
            display: inline-block;
            text-align: left;
          }
          .cur {
            width: 215px;
            height: 30px;
            line-height: 28px;
            padding-left: 25px;
            color: #ff9600;
            font-size: 16px;
            background-image: url(../../assets/img/cur.png);
            background-size: cover;
            box-sizing: border-box;
            margin-right: -10px;
            span {
              color: #fff;
              display: inline-block;
              max-width: 65px;
              position: absolute;
            }
          }
          .all {
            width: 111px;
            height: 30px;
            line-height: 28px;
            padding-left: 25px;
            color: #0d6bbc;
            font-size: 16px;
            background-image: url(../../assets/img/all.png);
            background-size: cover;
            box-sizing: border-box;
            cursor: pointer;
          }
        }

        .map {
          height: calc(100% - 40px);
        }
        .map-content {
          width: 100%;
          height: 100%;
        }
      }
      .band2 {
        flex: 1;
        .top {
          height: 50%;
          .info {
            display: flex;
            justify-content: center;
            color: #748bb2;
            font-size: 16px;
            .peopole {
              margin-right: 30px;
              span {
                color: #cd5428;
              }
            }
            .currcy {
              span {
                color: #a88c3b;
              }
            }
          }
        }
        .bottom {
          height: 50%;
        }
      }
    }
    .ct-right-bottom {
      height: 40%;
      .top {
        height: 95%;
        .info {
          display: flex;
          justify-content: center;
          padding-top: 15px;
          color: #748bb2;
          font-size: 16px;
          .peopole {
            margin-right: 30px;
            span {
              color: #cd5428;
            }
          }
          .currcy {
            span {
              color: #a88c3b;
            }
          }
        }
      }
    }
  }

  .item div.lt,
  .item div.rt,
  .item div.rb,
  .item div.lb {
    width: 3px;
    height: 3px;
  }
  .lt {
    position: absolute;
    left: -1px;
    top: -1px;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
  }

  .rt {
    position: absolute;
    right: -1px;
    top: -1px;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
  }

  .rb {
    position: absolute;
    bottom: -1px;
    right: -1px;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
  }

  .lb {
    position: absolute;
    bottom: -1px;
    left: -1px;
    border-bottom: 1px solid #fff;
    border-left: 1px solid #fff;
  }
}
</style>
