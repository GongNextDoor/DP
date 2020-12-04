<template>
  <div class="header">
    <div class="title">
      <div class="bigTitle">{{ bigTitle }}</div>
      <div class="smallTitle">{{ smallTitle }}</div>
    </div>
    <div class="time">
      {{ nowDate + ' ' + nowTime + ' ' + nowWeek }}
    </div>
    <!-- <div v-if="back" class="back" @click="$router.back()">返回</div> -->
  </div>
</template>

<script>
export default {
  props: {
    bigTitle: {
      type: String,
      default: '永州市医保市级统筹云平台'
    },
    smallTitle: {
      type: String,
      default: ''
    },
    back: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      nowDate: '', // 当前日期
      nowTime: '', // 当前时间
      nowWeek: '' // 当前星期
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.currentTime()
  },
  mounted() {

  },
  beforeDestroy: function() {
    if (this.getDate) {
      // console.log('销毁定时器')
      clearInterval(this.getDate) // 在Vue实例销毁前，清除时间定时器
    }
  },
  methods: {
    currentTime() {
      setInterval(this.getDate, 50)
    },
    getDate() {
      const yy = new Date().getFullYear()
      const mm = new Date().getMonth() + 1
      const dd = new Date().getDate()
      const week = new Date().getDay()
      const hh = new Date().getHours()
      const mf = new Date().getMinutes() < 10
        ? '0' + new Date().getMinutes()
        : new Date().getMinutes()
      if (week === 1) {
        this.nowWeek = '星期一'
      } else if (week === 2) {
        this.nowWeek = '星期二'
      } else if (week === 3) {
        this.nowWeek = '星期三'
      } else if (week === 4) {
        this.nowWeek = '星期四'
      } else if (week === 5) {
        this.nowWeek = '星期五'
      } else if (week === 6) {
        this.nowWeek = '星期六'
      } else {
        this.nowWeek = '星期日'
      }
      this.nowTime = hh + ':' + mf
      this.nowDate = yy + '-' + mm + '-' + dd
    }
  }
}
</script>

<style scoped lang="scss">
  .header {
    position: relative;
    height: 70px;
    background-image: url(../../../assets/img/header-bg.png);
    background-size: contain;
    background-position: center;

    .title {
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .bigTitle {
        padding: 2px 10px;
        font-size: 28px;
        text-shadow: 2px 0 0 #012f97, 0 2px 0 #012f97, -2px 0 0 #012f97, 0 -2px 0 #012f97;
        box-shadow: 0 0 20px rgba(42,108,254, .2);
        background-color: rgba(42,108,254, .1);
        color: #fff;
        border-radius: 30px;
      }

      .smallTitle {
        padding: 2px 5px;
        font-size: 18px;
        text-shadow: 1px 0 0 #012f97, 0 1px 0 #012f97, -1px 0 0 #012f97, 0 -1px 0 #012f97;
        box-shadow: 0 0 10px rgba(42,108,254, .2);
        background-color: rgba(42,108,254, .1);
        color: #03bbef;
        border-radius: 20px;
      }
    }

    .time {
      position: absolute;
      left: 30px;
      bottom: 27px;
      padding: 2px 10px;
      color: #fff;
      font-size: 16px;
      text-shadow: 1px 0 0 #012f97, 0 1px 0 #012f97, -1px 0 0 #012f97, 0 -1px 0 #012f97;
      box-shadow: 0 0 20px rgba(42,108,254, .2);
      background-color: rgba(42,108,254, .1);
      border-radius: 20px;
    }
    .back {
      position: absolute;
      right: 30px;
      bottom: 37px;
      height: 30px;
      line-height: 28px;
      padding: 2px 10px;
      color: #fff;
      font-size: 16px;
      text-shadow: 1px 0 0 #012f97, 0 1px 0 #012f97, -1px 0 0 #012f97, 0 -1px 0 #012f97;
      box-shadow: 0 0 20px rgba(42,108,254, .2);
      background-color: rgba(42,108,254, .1);
      border-radius: 20px;
      cursor: pointer;
    }
  }
</style>
