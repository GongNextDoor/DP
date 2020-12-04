import config from '@/config/index'

export default {
  api: {
    sum: `/${config.baseApiPath}/medicine/sum`,
    rank: `/${config.baseApiPath}/medicine/rank`,
    people: `/${config.baseApiPath}/insurance/people`,
    detail: `/${config.baseApiPath}/insurance/detail`,
    fee: `/${config.baseApiPath}/settlement/fee`,
    settlementDetail: `/${config.baseApiPath}/settlement/detail`,
    fund: `/${config.baseApiPath}/analysis/fund`,
    drugstore: `/${config.baseApiPath}/analysis/drugstore`,
    hospital: `/${config.baseApiPath}/analysis/hospital`
  }
}
