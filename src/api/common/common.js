import request from '@/utils/request'
import apiUrl from '../apiUrl'

export function sum(data) {
  return request.get(apiUrl.api.sum, data)
}

export function rank(data) {
  return request.get(apiUrl.api.rank, data)
}

export function people(data) {
  return request.get(apiUrl.api.people, data)
}

export function detail(data) {
  return request.get(apiUrl.api.detail, data)
}

export function fee(data) {
  return request.get(apiUrl.api.fee, data)
}

export function settlementDetail(data) {
  return request.get(apiUrl.api.settlementDetail, data)
}

export function fund(data) {
  return request.get(apiUrl.api.fund, data)
}

export function drugstore(data) {
  return request.get(apiUrl.api.drugstore, data)
}

export function hospital(data) {
  return request.get(apiUrl.api.hospital, data)
}

